import React from 'react';
import styled from 'styled-components';

function NavMenus({ open }) {
  return (
    <Ul open={open}>
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
  align-items: center;

  @media (max-width: 1300px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: absolute;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
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
