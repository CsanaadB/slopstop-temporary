import { describe, it, expect } from 'vitest';
import { Window } from 'happy-dom';
import { filterVideos, parseWhitelist } from '../../src/filter';

const window = new Window();
const document = window.document;

describe('filterVideos', () => {
  it('sets data-allowed on whitelisted item', () => {
    const item = document.createElement('ytd-rich-item-renderer');
    const link = document.createElement('a');
    link.setAttribute('href', '/@TheRealWalterWhiteOfficial1');
    item.appendChild(link);
    filterVideos([item], new Set(['/@TheRealWalterWhiteOfficial1']));
    expect(item.hasAttribute('data-allowed')).toBe(true);
  });

  it('skips items without a channel link', () => {
    const item = document.createElement('ytd-rich-item-renderer');
    expect(() => filterVideos([item], new Set())).not.toThrow();
  });
});

describe('parseWhitelist', () => {
  it('parses lines into a Set, ignoring blank lines and whitespace', () => {
    const text = '/@ChannelOne\n  \n/@ChannelTwo\n\n  /@ChannelThree  \n';
    const result = parseWhitelist(text);
    expect(result).toEqual(new Set(['/@ChannelOne', '/@ChannelTwo', '/@ChannelThree']));
  });
});
