/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSections = (sections: any = []) => {
  return sections.map((section: any) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return sections;
  });
};

export const mapSectionTwoColumns = (section: any = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImage = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    text,
    srcImage,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section: any = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section: any = {}) => {
  const {
    __component: component = 'section.section-grid-text',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;
  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text: any) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section: any = {}) => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
    grid: grid.map((img: any) => {
      const {
        image: { url: srcImage = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImage,
        altText,
      };
    }),
  };
};
