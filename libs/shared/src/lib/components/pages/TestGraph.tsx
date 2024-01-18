import { useStore } from 'states';
import styled from 'styled-components';
import { Card } from '../organism/card';
import { Title } from '../molecules';

export const TestGraph = () => {
  const countries = useStore((state) => state.countries);

  // useEffect(() => {
  //   getCountriesByGraphMethods();
  // }, []);

  return (
    <MainContainer>
      <CardContainer>
        {countries.data.map((country, countryIndex) => (
          <Card key={countryIndex}>
            <Title items={country} />
            {country.provinces &&
              country.provinces.map((province, proIndex) => (
                <Card key={`---Pro${proIndex}`}>
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
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;
