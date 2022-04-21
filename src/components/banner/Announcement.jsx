import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <Wrapper>
      <Link to={'/'}>
        <p>RemoteTeam joins Gusto! Learn More</p>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f45d48;
  text-align: center;
  padding: 1.5rem;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
    font-size: 17px;
    font-weight: bold;
  }
`;

export default Banner;
