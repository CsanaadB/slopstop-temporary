export function parseWhitelist(text: string): Set<string> {
  return new Set(
    text.split('\n').map((line) => line.trim()).filter((line) => line.length > 0)
  );
}

export function filterVideos(items: Iterable<Element>, whitelist: Set<string>) {
  for (const item of items) {
    const link = item.querySelector('a[href^="/@"]');
    if (!link) continue;
    const href = link.getAttribute('href');
    if (href && whitelist.has(href)) {
      item.setAttribute('data-allowed', '');
    }
  }
}
