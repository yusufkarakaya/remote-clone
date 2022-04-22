import React from 'react';
import styled from 'styled-components';

//image
import Subline from '../assets/subline.webp';

function ContainerBanner() {
  return (
    <Wrapper>
      <h2>
        RemoteTeam.com is an all-in-one{' '}
        <strong>
          Remote OS <img src={Subline} alt='subline text' />
        </strong>
        that powers remote teams operations.
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #323d47;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 7rem;
  padding-bottom: 7rem;

  h2 {
    text-align: center;
    line-height: 2;
    font-size: 2.3rem;
    font-weight: 700;
  }

  strong {
    color: #2d46c1;
    position: relative;
  }

  img {
    position: absolute;
    left: -1%;
    bottom: -35%;
    width: 99%;
  }
`;

export default ContainerBanner;
