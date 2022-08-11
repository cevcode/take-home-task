import React from 'react';
import logoImg from '~/static/logoOrigin.svg';
import homeImg from '~/static/home_icon.svg';
import styled from 'styled-components';

const StyledPage = styled.div`
  min-height: 100vh;
`;

const StyledHeader = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1.5rem 3.5rem;
`;

const HomePage = () => {
  return (
      <StyledPage>
          <StyledHeader>
              <img src={logoImg} alt="logo"/>
          </StyledHeader>
          <div>
              <p>Let's plan your <b>saving goal</b></p>
              <div>
                  <div>
                      <img src={homeImg} alt="home-icon"/>
                      <div>
                          <h6>Buy a house</h6>
                          <p>Saving goal</p>
                      </div>
                  </div>
                  <div>
                      <div>Amount field</div>
                      <div>Goal field</div>
                  </div>
                  <div>
                      <div>
                          <p>Monthly amount</p>
                          <p>$520.83</p>
                      </div>
                      <div>
                          <p>You’re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b> goal by <b>October 2020.</b></p>
                      </div>
                  </div>
                  <button>Confirm</button>
              </div>
          </div>
      </StyledPage>
  )
};

export { HomePage };
