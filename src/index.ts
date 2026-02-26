const whitelist = new Set(['/@TheRealWalterWhiteOfficial1', '/@detectiveRust999']);

const items = document.querySelectorAll('ytd-rich-item-renderer');

for (const item of items) {
  const href = item.querySelector('a[href^="/@"]')?.getAttribute('href');
  if (href && whitelist.has(href)) {
    item.setAttribute('data-allowed', '');
  }
}
