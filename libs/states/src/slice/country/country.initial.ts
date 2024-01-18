import { Response } from '../..';

export interface I_variable_Create_City {
  name: string;
  abb: string;
  population: string;
}

export interface I_variable_Create_Province {
  name: string;
  abb: string;
  population: string;
  cities?: I_variable_Create_City[]
}


export interface I_variable_Create_Country {
  name: string;
  abb: string;
  population: string;
  provinces?: I_variable_Create_Province[]
}


export interface I_response_Country  {
  _id: string;
  name: string;
  abb: string;
  population: string;
  provinces?: I_variable_Create_Province[]
}

export interface Country {
  country: Response<I_response_Country >;
  countries: Response<I_response_Country []>;
}

export const singleCountryInitials: I_response_Country  = {
  _id: '',
  name: '',
  population: '',
  abb: '',
  provinces: []
};

export const countryInitials: Country = {
  country: {
    data: singleCountryInitials,
    error: '',
    loader: false,
  },
  countries: {
    data: [],
    error: '',
    loader: false,
  },
};
