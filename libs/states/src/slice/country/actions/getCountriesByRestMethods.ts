/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from '../../../nextStore';
import { RestApiRequest } from '../../../restApiRequest';

export const getCountriesByRestMethods = async (
  page: number,
  limit: number
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

  try {
    const res = await RestApiRequest({
      url: `prisma/countries?limit=${limit}&page=${page}`,
    });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...states.countries.data, ...res?.data],
          loader: false,
        },
      }));

    const countries = res.data;

    let newCountries: any[] = [];

    for await (const country of countries) {
      const res = await RestApiRequest({
        url: `prisma/countries/${country.id}/provinces`,
      });
      let provinces = res.data;

      for await (const [index, province] of provinces.entries()) {
        const res = await RestApiRequest({
          url: `prisma/provinces/${province.id}/cities`,
        });
        provinces = [
          ...provinces.slice(0, index),
          { ...province, cities: res.data },
          ...provinces.slice(index + 1, provinces.length),
        ];
      }
      newCountries = [...newCountries, { ...country, provinces }];
    }

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: newCountries,
          loader: false,
        },
      }));

    return {
      data: newCountries,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have problem',
      loader: false,
    };
  }
};
