import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

function Media() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <h1>RemoteTeam in the Media</h1>
        </Header>
        <Boxes>
          <Box>
            <LeftText>
              <div>
                <h2>The New York Times</h2>
              </div>
            </LeftText>

            <RightText>
              <div>
                <p>The New York Times</p>
              </div>
              <div>
                <p>They Can’t Leave the Bay Area Fast Enough</p>
              </div>
              <div>
                <p>Read Article</p>
                <BsArrowRight />
              </div>
            </RightText>
          </Box>
          <Box>
            <LeftText>
              <div>
                <h2>The Wall Street Journal</h2>
              </div>
            </LeftText>

            <RightText>
              <div>
                <p>The Wall Street Journal</p>
              </div>
              <div>
                <p>Coronavirus Recasts Startups..</p>
              </div>
              <div>
                <p>Read Article</p>
                <BsArrowRight />
              </div>
            </RightText>
          </Box>
          <Box>
            <LeftText>
              <div>
                <h2>Fast Company</h2>
              </div>
            </LeftText>

            <RightText>
              <div>
                <p>Fast Company</p>
              </div>
              <div>
                <p>Does the pandemic mean...</p>
              </div>
              <div>
                <p>Read Article</p>
                <BsArrowRight />
              </div>
            </RightText>
          </Box>
        </Boxes>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-align: left;
  }
`;

const Header = styled.div`
  margin: 2rem 0rem;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

const Box = styled.div`
  border: 1px solid lightgray;
  display: flex;
  width: calc(33.333333333333336% - 13.333333333333334px);
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  border-radius: 20px;
  border-color: rgba(0, 0, 0, 0.07);
`;

const RightText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;

  div {
    position: relative;
    cursor: pointer;
  }

  svg {
    position: absolute;
    font-size: 1.4rem;
    top: 1px;
    left: 96px;
    cursor: pointer;
  }

  div:nth-child(1) {
    line-height: normal;
    height: auto;
    text-align: left;
    font-family: Nunito Sans, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: rgba(135, 135, 135, 1);
  }

  div:nth-child(2) {
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    line-height: normal;
    text-align: left;
    font-family: Nunito Sans, sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    height: 100%;
  }
  div:nth-child(3) {
    flex-shrink: 0;
    box-sizing: border-box;
    line-height: normal;
    height: auto;
    text-align: left;
    font-family: Nunito Sans, sans-serif;
    font-weight: 700;
    color: rgba(45, 70, 193, 1);
  }
`;

const LeftText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
  }

  h2 {
    position: relative;
    line-height: normal;
    text-align: left;
    font-size: 32px;
    font-family: Times New Roman, serif;
    width: auto;
    font-weight: 600;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }
`;
export default Media;
