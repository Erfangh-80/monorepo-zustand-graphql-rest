import { useEffect } from 'react';
import styled from 'styled-components';
import { getCountriesByRestMethods, useStore } from 'states';
import { Title } from '../molecules';
import { Card } from '../organism/card';

export const Rest = () => {
  const countries = useStore((state) => state.countries);

  return (
    <MainContainer>
      <CardContainer>
        {countries.data.map((country, countryIndex) => (
          <Card key={countryIndex} className="country">
            <Title items={country} />
            {country.provinces &&
              country.provinces.map((province, proIndex) => (
                <Card key={`---Pro${proIndex}`} className="province">
                  <Title items={province} />
                  {province.cities &&
                    province.cities.map((city, cityIndex) => (
                      <Card key={`-----City${cityIndex}`}>
                        <Title items={city} />
                      </Card>
                    ))}
                </Card>
              ))}
          </Card>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  font-family: 'Ubuntu', sans-serif;
  background-image: url('background.webp');
  background-color: #cccccc;
`;

const CardContainer = styled.div`
  & {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .province {
    flex-grow: 0;
  }
`;
