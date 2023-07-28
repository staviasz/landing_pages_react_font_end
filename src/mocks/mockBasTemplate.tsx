import { GridText } from '../components/GridText';
import { mGText } from './mockGridText';
import { links } from './mockLinks';
import { logoData } from './mockLogoData';

export const mBase = {
  children: (
    <>
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
      <GridText {...mGText} background={true} />
      <GridText {...mGText} />
    </>
  ),
  links: links,
  logoData: logoData,
  footerHtml:
    'Projeto executado por <b>Erick staviasz</b> no curso de react de Otavio Miranda',
};
