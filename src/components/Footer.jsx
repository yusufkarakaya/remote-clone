import React from 'react';
import styled from 'styled-components';

//images
import WhiteLogo from '../assets/logo-white.svg';
import GDPR from '../assets/GDPR.png';
import Privacy_Shield from '../assets/Privacy_Shield.png';
import UK_Privacy from '../assets/UK_Privacy.png';
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Stack from '../assets/stack.svg';

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <List>
            <div>
              <img src={WhiteLogo} alt='Company logo' />
            </div>
            <Box>
              <h5>Remote Operation System</h5>
              <p>
                RemoteTeam.com is an all-in-one Remote OS that powers remote
                teams operations.
              </p>
            </Box>
          </List>
          <List>
            <div>
              <h5>Site</h5>
              <ul>
                <li>Pricing</li>
                <li>Security</li>
                <li>Press Kit</li>
                <li>Status</li>
              </ul>
            </div>
          </List>
          <List>
            <div>
              <h5>Policies</h5>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy policy</li>
                <li>
                  Do Not Sell My Personal <br /> Information
                </li>
                <li>Copyright Policy</li>
              </ul>
            </div>
          </List>
          <List>
            <div>
              <h5>Features</h5>
              <ul>
                <li>Invoices</li>
                <li>Time Tracking</li>
                <li>Tax Compliance</li>
                <li>Global Payroll</li>
                <li>Check-In App</li>
              </ul>
            </div>
          </List>
          <List>
            <div>
              <ul>
                <li>Team App</li>
                <li>Time Off & Holidays</li>
                <li>Reimbursement</li>
                <li>Payroll Management</li>
              </ul>
            </div>
          </List>
        </Grid>
        <Bottom>
          <div>
            <img src={GDPR} alt='' />
            <img src={UK_Privacy} alt='' />
            <img src={Privacy_Shield} alt='' />
          </div>
          <Middle>
            <img src={Twitter} alt='' />
            <img src={Linkedin} alt='' />
            <img src={Stack} alt='' />
          </Middle>
          <div>
            © Remote Team Inc. <strong>2022</strong> All rights reserved.
          </div>
        </Bottom>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24273f;
  color: #f9f9f9;
  font-family: nunito sans;
  font-size: 0.9rem;
  font-weight: 300;
  min-height: 50vh;
  padding: 4rem 1rem 3rem;
  text-align: left;
`;

const Container = styled.div`
  margin: 2rem 22rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  div:nth-child(3) {
    margin-top: 3.5rem;
  }
  div:nth-child(4) {
    margin-top: 4.3rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  text-align: left;

  :not(:first-child) {
    margin-top: 2rem;
  }

  img {
    width: 10rem;
    color: #fefefe;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-decoration: none;
  }
  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
  }
  li {
    list-style-type: none;
    margin: 0.5rem 0 0;
    padding: 0;
    width: 100%;
    color: white;
    font-weight: 300;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

const Box = styled.div`
  background: #22253e;
  border-radius: 20px;
  box-shadow: inset 5px 4px 24px rgba(26, 28, 47, 0.9),
    inset 3px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;

  h5 {
    font-size: 1rem;
    font-weight: 700;
    opacity: 0.9;
    margin-bottom: 0.7rem;
  }
  p {
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 1rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;

  div img {
    margin-right: 1rem;
    width: 110px;
    color: #fefefe;
  }
`;

const Middle = styled.div`
  img {
    color: #fefefe;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-decoration: none;
    width: 30px !important;
    height: 30px;
  }
  display: flex;
  text-align: center;
`;
export default Footer;
