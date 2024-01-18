import { FC } from 'react';
import styled from 'styled-components';
interface IItem {
  name: string;
  abb: string;
  population: string;
}
interface IProps {
  items: IItem;
}
export const Title: FC<IProps> = ({ items }) => {
  return (
    <TitleWrapper>
      <span>
        <i>🏢</i>
        {items.name}
      </span>
      <span>
        <i>🏠</i>
        {items.abb}
      </span>
      <span>
        <i>👬</i>
        {items.population}
      </span>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.p`
  font-size: 1.3rem;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    padding: 0.5rem;
    display: inline-block;
    height: fit-content;
    i {
      font-style: normal;
      padding: 0.5rem;
    }
  }
`;
