import React from 'react';
import styled from 'styled-components';
//images
import CheckInApp from '../assets/Check-in_App.svg';
import CompensationManagement from '../assets/compensation-management.svg';
import InventoryManagement from '../assets/Inventory_management.svg';
import OrganizationChart from '../assets/organization-chart.svg';
import Reimbursement from '../assets/Reimbursement.svg';

function HRManagement() {
  return (
    <Wrapper>
      <Container>
        <div>
          <div>
            <h5>HR Management (HRIS) Features</h5>
          </div>
          <div>
            <h6>
              Discover free apps built by RemoteTeam that seamlessly integrate
              with your dashboard
            </h6>
          </div>
        </div>
        <ContainerBoxes>
          <MainBox>
            <IconBox>
              <img src={CheckInApp} alt='' />
            </IconBox>
            <div>
              <p>Check-in App</p>
            </div>
          </MainBox>
          <MainBox>
            <IconBox>
              <img src={CompensationManagement} alt='' />
            </IconBox>
            <div>
              <p>Compensation Management</p>
            </div>
          </MainBox>
          <MainBox>
            <IconBox>
              <img src={InventoryManagement} alt='' />
            </IconBox>
            <div>
              <p>Organization Chart</p>
            </div>
          </MainBox>
          <MainBox>
            <IconBox>
              <img src={OrganizationChart} alt='' />
            </IconBox>
            <div>
              <p>Reimbursement & Expense Payments</p>
            </div>
          </MainBox>
          <MainBox>
            <IconBox>
              <img src={Reimbursement} alt='' />
            </IconBox>
            <div>
              <p>Equipment Tracking</p>
            </div>
          </MainBox>
        </ContainerBoxes>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(250, 250, 250, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  width: 100%;

  h5 {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
  h6 {
    font-size: 1.3rem;
    text-align: center;
    font-weight: 400;
    color: rgba(117, 117, 117, 1);
  }

  p {
    line-height: normal;
    text-align: center;
    font-size: 1.2rem;
    color: rgba(50, 61, 71, 1);
    font-family: Nunito Sans, sans-serif;
    font-weight: 600;
    margin-top: 0.5rem;
  }
`;

const Container = styled.div`
  padding: 2rem 2rem;
  padding-right: 3rem;
  max-width: 1200px;
  margin-top: 70px;
  margin-bottom: 80px;
  margin-right: 3.6rem;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

const ContainerBoxes = styled.div`
  display: flex;
  gap: 6rem;
  width: 1200px;

  @media (max-width: 768px) {
    width: 550px;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0rem;
  }

  div {
    @media (max-width: 768px) {
      margin-top: 5px;
      width: 150px;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

const MainBox = styled.div`
  margin-top: 80px;
`;

const IconBox = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 140px;
  width: 168px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: solid;
  border-color: rgba(244, 243, 243, 1);
  border-width: 3px;
  cursor: pointer;
  pointer-events: auto;

  :hover {
    border-style: solid;
    border-color: rgba(45, 70, 193, 1);
    border-width: 3px;
    transition: all 0.3s cubic-bezier(0.37, 0.01, 0, 0.98);
  }
`;

export default HRManagement;
