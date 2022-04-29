import React, { useState } from 'react';
import styled from 'styled-components';

//images
import TimeTracker from '../assets/TimeTracking.svg';
import Invoicing from '../assets/Invoicing.svg';
import ComplianceDocs from '../assets/ComplianceDocs.svg';
import ContractAgreements from '../assets/ContractAgreements.svg';

function Container() {
  const [activeTab, setActive] = useState('TimeTracking');

  return (
    <Wrapper>
      <div>
        <Left>
          <Button
            type='button'
            onClick={() => {
              setActive('TimeTracking');
            }}
            className={activeTab === 'TimeTracking' ? 'active' : ''}
          >
            Time-Tracking
          </Button>
          <Button
            type='button'
            onClick={() => {
              setActive('Invoicing');
            }}
            className={activeTab === 'Invoicing' ? 'active' : ''}
          >
            Invoicing
          </Button>
          <Button
            type='button'
            onClick={() => {
              setActive('ComplianceDocs');
            }}
            className={activeTab === 'ComplianceDocs' ? 'active' : ''}
          >
            Compliance Documents
          </Button>
          <Button
            type='button'
            onClick={() => {
              setActive('ContractAgreements');
            }}
            className={activeTab === 'ContractAgreements' ? 'active' : ''}
          >
            Contract Agreements
          </Button>
        </Left>

        {activeTab === 'TimeTracking' && (
          <Right>
            <h3>Time-Tracking Designed for Independent Contractors</h3>
            <h4>
              Integrate your time-tracking tool to automatically generate
              payments
            </h4>
            <img src={TimeTracker} alt='Time Tracker' />
            <button>Learn more</button>
          </Right>
        )}
        {activeTab === 'Invoicing' && (
          <Right>
            <h3>Invoicing</h3>
            <h4>
              Create and pay invoices based on your team’s working hours and
              expenditures
            </h4>
            <img src={Invoicing} alt='Invoicing' />
            <button>Learn more</button>
          </Right>
        )}
        {activeTab === 'ComplianceDocs' && (
          <Right>
            <h3>Compliance Designed for Independent Contractors</h3>
            <h4>
              Stay compliant by generating and managing tax and legal forms
            </h4>
            <img src={ComplianceDocs} alt='Invoicing' />
            <button>Learn more</button>
          </Right>
        )}
        {activeTab === 'ContractAgreements' && (
          <Right>
            <h3>Contracts Designed for Independent Contractors</h3>
            <h4>
              Manage documents and collect signatures for remote employees
            </h4>
            <img src={ContractAgreements} alt='Invoicing' />
            <button>Learn more</button>
          </Right>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  background-color: rgba(45, 70, 193, 1);
  width: 100%;
  min-height: 750px;
  padding: 2rem;
  background-image: url(https://res.cloudinary.com/hebu10lmu/image/upload/c_scale,q_auto/v1603792530/www/forestry/fingerprint_tg1rou.svg);

  .active {
    color: rgb(45, 193, 140);
    text-decoration: underline;
  }

  div {
    display: flex;
    width: 1200px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-top: 0rem;
    margin-bottom: 0.2rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  min-width: 860px;

  h3,
  h4 {
    text-align: left;
    padding-bottom: 1rem;

    @media (max-width: 768px) {
      text-align: center !important;
      width: 550px;
    }
  }
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }
  h4 {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.85);
    text-align: left;
    font-weight: 600;
  }
  button {
    display: flex;
    flex-direction: column;
    -moz-box-align: stretch;
    align-items: stretch;
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    margin-top: 26px;
    appearance: none;
    padding: 10px 20px;
    background-color: rgb(45, 193, 140);
    color: white;
    border-radius: 10px;
    text-align: center;
    margin-right: auto;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: Nunito Sans, sans-serif;
    border: none;

    @media (max-width: 768px) {
      margin: 1.5rem auto;
    }
  }
  img {
    @media (max-width: 768px) {
      width: 510px;
    }
  }
`;

export default Container;
