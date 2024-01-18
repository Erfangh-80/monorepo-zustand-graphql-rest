/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

interface IRestApiRequest {
  url: string;
}

export const RestApiRequest = ({ url }: IRestApiRequest) => getResponse(url);

const getResponse = async (url: string) => {
  try {
    const response = await axios.get(`http://localhost:3051/${url}`);
    // console.log('result ', response);

    if (!response.status || response.data.success === false) {
      throw Error(response.data.body as string);
    }
    // may error if there is no body

    if (response.data.success === false) {
      throw new Error(response.data.body as string);
    }

    return response;
  } catch (err: any) {
    throw Error(err.message);
  }
};
