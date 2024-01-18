import styled from 'styled-components';
import { FC, ReactElement, ReactNode } from 'react';
interface IItems {
  id: number | string;
  title: string;
  href: string;
  icon: ReactElement;
}
interface IProps {
  children: ReactElement | ReactNode;
  sidebarItems?: IItems[];
  navigationItems?: IItems[];
  showSidebar?: boolean;
}

export const TemplateLayout: FC<IProps> = ({ children, navigationItems }) => {
  return (
    <TemplateWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </TemplateWrapper>
  );
};

const TemplateWrapper = styled.div`
  width: 100%;
  grid-template-rows: 1fr;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
