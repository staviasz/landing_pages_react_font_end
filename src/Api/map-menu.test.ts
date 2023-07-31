import { mapMenu, mapMenuLinks } from './map-menu';
import data from './map-menu-mock.json';

describe('map-menu', () => {
  it('should map data even if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.srcImage).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu(data);
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.link).toBe('#home');
    expect(menu.srcImage).toBe('a.svg');
    expect(menu.links[0].newTab).toBe(true);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks(data.menu_links);
    expect(links[1].newTab).toBe(false);
    expect(links[1].children).toBe('');
    expect(links[1].link).toBe('');
  });
});
