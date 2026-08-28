/**
 * Class-based light/dark handling (mirrors next-themes with attribute="class"
 * and defaultTheme="system"). The initial class is applied by a blocking
 * inline script in SiteLayout so there is no flash of the wrong theme.
 */

export const THEME_STORAGE_KEY = "theme";

export type ResolvedTheme = "light" | "dark";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function storedTheme(): ResolvedTheme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function resolvedTheme(): ResolvedTheme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** next-themes' `disableTransitionOnChange`. */
function withoutTransitions(apply: () => void) {
  const style = document.createElement("style");
  style.append(
    document.createTextNode(
      "*,*::before,*::after{transition:none!important;animation:none!important}",
    ),
  );
  document.head.append(style);

  apply();

  window.getComputedStyle(document.body).transition;
  requestAnimationFrame(() => style.remove());
}

function paint(theme: ResolvedTheme) {
  const root = document.documentElement;
  withoutTransitions(() => {
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  });
  syncToggles(theme);
}

function syncToggles(theme: ResolvedTheme) {
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  for (const toggle of document.querySelectorAll("[data-mode-toggle]")) {
    toggle.setAttribute("aria-label", label);
  }
}

export function setTheme(theme: ResolvedTheme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Preference is not persisted, but the page still switches.
  }
  paint(theme);
}

export function toggleTheme() {
  setTheme(resolvedTheme() === "dark" ? "light" : "dark");
}

export function initTheme() {
  syncToggles(resolvedTheme());

  window.matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (storedTheme() === null) paint(systemTheme());
  });
}
