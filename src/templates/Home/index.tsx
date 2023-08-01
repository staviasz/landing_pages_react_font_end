import { useEffect, useRef, useState } from 'react';
import { DataProps, mapData } from '../../Api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridGalery } from '../../components/GridGalery';
import { GridText } from '../../components/GridText';
import { GridTwoColumn } from '../../components/GridTwoColumns';
import { Loading } from '../../components/Loading';
import { PageNotFound } from '../PageNotFound';
import { Base } from '../base';

function Home() {
  const [dataPage, setDataPage] = useState<DataProps>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[teste-1-1]=landing-page&populate=deep',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setDataPage(() => pageData[0]);
      } catch (e) {
        setDataPage(undefined);
      } finally {
        setisLoading(false);
      }
    };
    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);
  if (isLoading === true) {
    return <Loading />;
  }
  if (dataPage === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug } = dataPage;
  const { links, text, link, srcImage } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImage }}
    >
      {sections.map((section, index) => {
        // console.log('text', text, 'link', link, 'src', srcImage);

        const { component } = section;
        const key = `${slug}-${index}`;
        if (component === 'section.section-two-coluns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          const { gridText } = section;
          return <GridText key={key} grid={gridText} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          const { gridImage } = section;
          console.log(gridImage);

          return <GridGalery key={key} grid={gridImage} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
