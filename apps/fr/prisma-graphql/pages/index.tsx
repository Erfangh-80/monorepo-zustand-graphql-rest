import { TestGraph } from 'shared';
import { getCountriesByGraphMethods } from 'states';

export function Index() {
  return <TestGraph />;
}

export default Index;

export const getServerSideProps = async () => {
  const countries = await getCountriesByGraphMethods(1, 10);

  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
