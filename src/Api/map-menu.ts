/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapMenu = (menuData: any = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImage = '' } = '',
    menu_links: links = [],
  } = menuData;
  return {
    newTab,
    text,
    link,
    srcImage,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links: any = []) => {
  return links.map((item: any) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
