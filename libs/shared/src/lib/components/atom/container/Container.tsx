import { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactElement | ReactNode;
  className?: string;
}

export const Container: FC<IProps> = ({ children, className }) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};
const ContainerWrapper = styled.div`
  margin: 0 auto;
`;
