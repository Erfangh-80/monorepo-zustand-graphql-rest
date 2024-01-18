import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '../../../utilis/enum';
import { FC, ReactElement } from 'react';

interface ISidebar {
  id: string | number;
  title: string;
  icon: ReactElement;
  href: string;
}

interface IProps {
  sidebarItems?: ISidebar[];
  showSidebar?: boolean;
  className?: string;
}
export const SideBar: FC<IProps> = ({
  sidebarItems,
  showSidebar = true,
  className,
}) => {
  return (
    <div>
      {showSidebar && (
        <SidebarWrapper>
          <div className="logo">
            <Link href="/"></Link>
          </div>
          <div className="sidebar">
            {sidebarItems?.map((item) => (
              <div key={item.id} className="sidebar-link--items">
                <Link key={item.id} href={item.href}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </SidebarWrapper>
      )}
    </div>
  );
};

const SidebarWrapper = styled.aside`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${Colors.Blue};
  gap: 1rem;
  padding: 0.8rem 0.5rem;
  border-top-left-radius: 1.7rem;
  border-bottom-left-radius: 1.7rem;
  transform: translateY(-6.5%);
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .sidebar-link--items a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: ${Colors.White};
    font-size: 0.8rem;
    cursor: pointer;
  }

  .sidebar li a svg {
    width: 1.2rem;
    height: auto;
  }
  .logo svg {
    width: 2.2rem;
    height: auto;
  }
`;
