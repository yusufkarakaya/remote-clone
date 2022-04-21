import React from 'react';
import styled from 'styled-components';

//images
import Hero from '../assets/hero-image-desktop.svg';
import Countries from '../assets/Countries.svg';
import CompaniesOnboarded from '../assets/CompaniesOnboarded.svg';
import HoursTracked from '../assets/HoursTracked.svg';
import HRToolsUsed from '../assets/HRToolsUsed.svg';

function Header() {
  return (
    <div>
      <Wrapper>
        <Container>
          <div>
            <FirstText>
              <p>
                RemoteTeam is an all-in-one operating system that provides HR
                solutions to your remote team
              </p>
            </FirstText>
            <SecondText>
              <p>
                Join the platform that’s{' '}
                <strong>
                  trusted by over 450 remote-first companies worldwide
                </strong>
              </p>
            </SecondText>
          </div>
          <div>
            <img src={Hero} alt='Hero' />
          </div>
        </Container>
      </Wrapper>
      <SubContainer>
        <Card>
          <div>
            <img src={Countries} alt='' />
            <h4>200+</h4>
          </div>
          <div>
            <p>Countries supported</p>
          </div>
        </Card>
        <Card>
          <div>
            <img src={CompaniesOnboarded} alt='' />
            <h4>450+</h4>
          </div>
          <div>
            <p>Companies onboarded</p>
          </div>
        </Card>
        <Card>
          <div>
            <img src={HoursTracked} alt='' />
            <h4>10,000+</h4>
          </div>
          <div>
            <p>HR Tools used</p>
          </div>
        </Card>
        <Card>
          <div>
            <img src={HoursTracked} alt='' />
            <h4>250K+</h4>
          </div>
          <div>
            <p>Hours tracked</p>
          </div>
        </Card>
      </SubContainer>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  padding-top: 50px;
  background-color: #fdfdfd;
`;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  div {
    padding-left: 20px;
  }
  img {
    padding-right: 50px;
  }
`;

const FirstText = styled.div`
  text-align: left;
  line-height: 3.5rem;
  color: rgba(36, 39, 63, 1);
  font-size: 2.7rem;
  font-weight: 700;
  padding-top: 50px;
`;

const SecondText = styled.div`
  padding-top: 40px;
  text-align: left;
  line-height: 2rem;
  font-size: 1.4rem;
  color: rgba(117, 117, 117, 1);
`;

const SubContainer = styled.div`
  background-color: rgba(36, 39, 63, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  gap: 1rem;
`;

const Card = styled.div`
  width: auto;
  height: auto;
  padding: 3rem 2rem;
  div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  div h4 {
    display: flex;
    align-items: center;
    color: rgba(255, 235, 183, 1);
    text-align: center;
    font-weight: 600;
    font-size: 1.6rem;
  }
  div p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 300;
    text-align: left;
  }
`;

export default Header;
