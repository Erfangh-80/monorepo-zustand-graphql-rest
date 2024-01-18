import { Rest } from 'shared';
import { getCountriesByRestMethods } from 'states';

export function Index() {
  return <Rest />;
}

export default Index;

export const getServerSideProps = async () => {
  const countries = await getCountriesByRestMethods(1, 10);

  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
