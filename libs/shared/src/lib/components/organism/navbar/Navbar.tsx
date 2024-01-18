import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Container } from '../../atom/container';
import Link from 'next/link';
import { Colors } from '../../../utilis/enum';

interface INavbar {
  id: number | string;
  title: string;
  href: string;
  icon?: ReactElement;
}
interface IProps {
  navigationItems?: INavbar[];
}

const Navbar: FC<IProps> = ({ navigationItems }) => {
  return (
    <NavbarWrapper>
      <Container className="container">
        <nav className="navigation">
          {navigationItems && (
            <ul>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link key={item.id} href={item.href}>
                    {item.icon && item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.header`
  background: ${Colors.neutralLightest};
  width: 100%;
  font-size: 12px;
  color: ${Colors.neutral};
  grid-column: 1/-1;
  & .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .navigation {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .navigation ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  .navigation ul li {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    gap: 1rem;
    color: ${Colors.neutral};
  }

  .navigation ul li a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: ${Colors.neutral};
    cursor: pointer;
  }
  .navigation ul li a svg {
    width: 1.2rem;
    height: auto;
    stroke: ${Colors.neutral};
  }

  .navbar--profile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    margin-left: 30px;
    position: relative;
  }

  .navbar--profile--header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 0 2px 5px;
    cursor: pointer;
  }

  .active-navbar--profile--header {
    border-radius: 10px 10px 0 0;
    border: 1px solid ${Colors.BlueAzure};
  }

  .navbar--profile--title {
    display: flex;
    flex-direction: column;
  }
  .navbar--profile--title--name {
    margin: 0;
    align-self: center;
  }
  .navbar--profile--title--role {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    gap: 2px;
  }

  .navbar--profile--image {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
  .navbar--profile--image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100%;
  }

  .navbar--profile--icon {
    width: 16px;
    height: 16px;
  }

  .select--sub-buttons {
    display: flex;
    flex-direction: column;
    border: 1px solid ${Colors.BlueAzure};
    border-radius: 0 0 10px 10px;
    background-color: white;
    width: 100%;
    margin-top: 35px;
    position: absolute;
    z-index: 5;
    border-top: none;
    box-sizing: border-box;
    top: 8px;
  }

  .select--empty {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 10px;
    height: 40px;
    border: 1px solid gainsboro;
    border-radius: 10px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    color: gainsboro;
    box-sizing: border-box;
    padding-right: 10px;
  }

  .select--empty:hover {
    border-color: ${Colors.BlueAzure};
  }

  .select--empty--left-side {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .navbar--profile--title--role--title {
    color: ${Colors.neutral};
    width: 80px;
    max-width: fit-content;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .select-empty--left-side--clear {
    color: lightcoral;
    visibility: visible;
  }

  .select-empty--left-side--clear--inactive {
    visibility: hidden;
  }

  .option {
    width: 100%;
    height: 35px;
    cursor: pointer;
    color: ${Colors.neutral};
    border-bottom: 1px solid rgba(220, 220, 220, 0.4);
    padding-left: 10px;
    box-sizing: border-box;
    line-height: 2.125rem;
  }

  .option:last-child {
    border: none;
    border-radius: 0 0 10px 10px;
  }

  .option:first-child {
    border-top: 1px solid gainsboro;
  }

  .option:hover {
    background-color: ${Colors.neutralLighter};
    color: black;
  }

  .active-option {
    background-color: ${Colors.BlueAzure};
    color: whitesmoke;
  }

  .select--empty:hover .option {
    opacity: 100;
    background-color: #24123b;
  }

  .option-title {
    padding-right: 10px;
  }

  .hamburger-menu {
    display: flex;
    width: 50px;
    cursor: pointer;
  }

  /* .menu {
    display: ${(props) => (props ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ${Colors.neutralLightest};
    height: 100vh;

    ul {
      padding: 0px;

      li {
        padding: 1rem 3rem;
        cursor: pointer;
      }
    }
  } */

  /* 
  .login {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-left: 15px;
    }
  } */

  @media (min-width: 768px) {
    .hamburger-menu {
      display: none;
    }

    .menu {
      display: flex;
      height: 60px;
      top: 0;
      right: 100px;
      ul {
        display: flex;
        li {
          padding: 0px 1.5rem;
        }
      }
    }
  }
`;

export { Navbar };
