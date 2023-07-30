import { mapMenu } from './map-menu';
import { mapSections } from './map-section';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapData = (pagesData: any[] = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      title = '',
      slug = '',
      sections = [],
      menu = {},
    } = data;
    return {
      footerHtml,
      title,
      slug,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
