import { useEffect, useRef, useState } from 'react';
import { DataProps, mapData } from '../../Api/map-data';
import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
import { PageNotFound } from '../PageNotFound';
import { Wrapper } from './styles';

function Home() {
  const [dataPage, setDataPage] = useState<DataProps>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[teste-2]=landing-page&populate=deep',
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
  return (
    <div className="App">
      <Wrapper>
        <Heading size="xhuge">O texto que eu quero</Heading>
      </Wrapper>
    </div>
  );
}

export default Home;
