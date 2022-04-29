import React from 'react';
import NavMenus from './NavMenus';

import styled from 'styled-components';
import logo from '../../assets/remote-team-blue-logo.svg';

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
      <div>
        <Menus>
          <NavMenus />
        </Menus>
      </div>
      <SignButton>
        <button>Sign In</button>
      </SignButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 20rem;
  padding: 2rem;
  min-height: 110px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    font-weight: bold;
  }
  li {
    list-style-type: none;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid transparent;
  }
  li:hover {
    border-bottom: 2px solid gray;
    transform-origin: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const SignButton = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    font-size: 14px;
    color: white;
    background-color: #2dc18c;
    padding: 0.7rem 1.2rem;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Nav;
