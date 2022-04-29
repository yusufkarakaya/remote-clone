import React from 'react';
import styled from 'styled-components';

function NavMenus() {
  return (
    <Ul>
      <li className='menu-item'>Independent Contractors</li>
      <li className='menu-item'>Global Payroll</li>
      <li className='menu-item'>HR Tools</li>
      <li className='menu-item'>Pricing</li>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-weight: bold;

  @media (max-width: 868px) {
    flex-flow: column nowrap;
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

export default NavMenus;
