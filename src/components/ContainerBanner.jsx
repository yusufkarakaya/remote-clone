import React from 'react';
import styled from 'styled-components';

function ContainerBanner() {
  return (
    <Wrapper>
      <h2>
        RemoteTeam.com is an all-in-one Remote OS Remote OS that powers remote
        teams operations.
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #323d47;
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

export default ContainerBanner;
