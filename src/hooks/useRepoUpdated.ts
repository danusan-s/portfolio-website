import { useEffect, useState } from "react";

const CACHE_KEY = "repo-push-times-v1";
const CACHE_TTL_MS = 1 * 60 * 60 * 1000; // 1 hours

interface CacheEntry {
  pushedAt: string;
  fetchedAt: number;
}

function readCache(): Record<string, CacheEntry> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, CacheEntry>;
  } catch {
    return {};
  }
}

function writeCache(cache: Record<string, CacheEntry>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // ignore quota errors
  }
}

export function formatRelativeTime(isoDate: string): string {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  const diffSec = Math.max(1, Math.floor((now - then) / 1000));

  const mins = Math.floor(diffSec / 60);
  const hours = Math.floor(diffSec / 3600);
  const days = Math.floor(diffSec / 86400);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (diffSec < 60) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (weeks < 5) return `${weeks}w ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`;
}

/**
 * Fetches `pushed_at` for the given GitHub repos (e.g. "danusan-s/ExchEng")
 * and returns a map of repo -> relative label (e.g. "3d ago").
 * Results are cached in localStorage for 6h to stay well under the
 * unauthenticated rate limit (60 req/hr).
 */
export function useRepoUpdatedLabels(repos: string[]): Record<string, string> {
  const [labels, setLabels] = useState<Record<string, string>>(() => {
    const cache = readCache();
    const initial: Record<string, string> = {};
    for (const repo of repos) {
      const entry = cache[repo];
      if (entry) initial[repo] = formatRelativeTime(entry.pushedAt);
    }
    return initial;
  });

  useEffect(() => {
    let cancelled = false;
    const cache = readCache();
    const now = Date.now();

    const needsFetch = repos.filter((repo) => {
      const entry = cache[repo];
      return !entry || now - entry.fetchedAt > CACHE_TTL_MS;
    });

    if (needsFetch.length === 0) return;

    Promise.all(
      needsFetch.map(async (repo) => {
        try {
          const res = await fetch(`https://api.github.com/repos/${repo}`);
          if (!res.ok) return;
          const data = await res.json();
          if (typeof data.pushed_at === "string") {
            cache[repo] = { pushedAt: data.pushed_at, fetchedAt: Date.now() };
          }
        } catch {
          // offline or rate-limited: keep stale/absent value
        }
      }),
    ).then(() => {
      if (cancelled) return;
      writeCache(cache);
      const next: Record<string, string> = {};
      for (const repo of repos) {
        const entry = cache[repo];
        if (entry) next[repo] = formatRelativeTime(entry.pushedAt);
      }
      setLabels(next);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repos.join(",")]);

  return labels;
}
