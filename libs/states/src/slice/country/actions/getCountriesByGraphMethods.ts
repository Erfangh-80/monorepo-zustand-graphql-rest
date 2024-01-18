import { gql, request } from 'graphql-request';
import { store } from '../../../nextStore';
import graphQLClient from '../../../graphApiRequest';

export const getCountriesByGraphMethods = async (
  page: number = 1,
  limit: number = 10
) => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  const query = gql`
    {
      getFiftyCitiesOfCountry(pageNumber: ${page}, limit: ${limit}) {
        id
        name
        abb
        population
        provinces {
          id
          name
          abb
          population
          cities {
            id
            name
            abb
            population
          }
        }
      }
    }
  `;
  try {
    console.log(query);
    const res: any = await graphQLClient.request(query);
    console.log({ res });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...res.getFiftyCitiesOfCountry],
          loader: false,
        },
      }));

    return {
      data: res.getFiftyCitiesOfCountry,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have a problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have a problem',
      loader: false,
    };
  }
};
