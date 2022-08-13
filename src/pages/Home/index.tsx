import React from 'react';
import logoImg from '~/static/logoOrigin.svg';
import homeImg from '~/static/home_icon.svg';
import styled from 'styled-components';
import { globalStyles } from '~/helpers/theme';

const StyledPage = styled.div`
    min-height: 100vh;
`;

const StyledHeader = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 1.5rem 3.5rem;
`;

const StyledOuter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledInner = styled.div`
    width: 35rem;
`;

const StyledDescription = styled.p`
    font-size: 1.25rem;
    color: ${globalStyles.palette.accent};
    padding: 1.5rem 0;
    text-align: center;
`;

const StyledBox = styled.div`
  background-color: #fff;
  box-shadow: 0 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 0.5rem;
  padding: 2.5rem;
`;

const StyledBold = styled.span`
  font-weight: 600;
`;

const StyledBoxHeader = styled.div`
  display: inline-flex;
  align-items: center;
  img {
    width: 4rem;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAmount = styled.div`
  border: 1px solid ${globalStyles.palette.borderColor};
  border-radius: 0.5rem;
`;

const StyledAmountTop = styled(StyledRow)`
  padding: 1.5rem;
  align-items: center;
  p:first-child {
    font-size: 1.25rem;
  }
`;

const StyledAmountBottom = styled(StyledRow)`
  background-color: #F4F8FA;
  padding: 1.5rem;
  p {
    font-size: 0.75rem;
  }
`;


const StyledAmountPrice = styled.p`
  color: ${globalStyles.palette.accentText};
  font-size: 2rem;
  font-family: ${globalStyles.fonts.accent};
  font-weight: 500;
`;

const StyledBoxHeaderContent = styled.div`
  margin-left: 1rem;
  h6 {
    font-family: ${globalStyles.fonts.accent};
    font-weight: 500;
  }
  p {
    color: ${globalStyles.palette.secondaryText}
  }
`;

const StyledButton = styled.button`
  width: 320px;
  padding: 1.125rem 0;
  color: #FFF;
  font-weight: 600;
  outline: 0;
  border-radius: 2rem;
  background-color: ${globalStyles.palette.accent};
  border: none;
  cursor: pointer;
  &:hover {
    filter: grayscale(30%);
  }
  &:active {
    filter: grayscale(50%);
  }
`;

const StyledFooter = styled(StyledRow)`
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
`;

const HomePage = () => {
    return (
        <StyledPage>
            <StyledHeader>
                <img src={logoImg} alt='logo' />
            </StyledHeader>
            <StyledOuter>
                <StyledInner>
                    <StyledDescription>
                        Let's plan your <StyledBold>saving goal.</StyledBold>
                    </StyledDescription>
                    <StyledBox>
                        <StyledBoxHeader>
                            <img src={homeImg} alt='home-icon' />
                            <StyledBoxHeaderContent>
                                <h6>Buy a house</h6>
                                <p>Saving goal</p>
                            </StyledBoxHeaderContent>
                        </StyledBoxHeader>
                        <StyledRow>
                            <div>Amount field</div>
                            <div>Goal field</div>
                        </StyledRow>
                        <StyledAmount>
                            <StyledAmountTop>
                                <p>Monthly amount</p>
                                <StyledAmountPrice>$520.83</StyledAmountPrice>
                            </StyledAmountTop>
                            <StyledAmountBottom>
                                <p>
                                    You’re planning <StyledBold>48 monthly deposits</StyledBold> to reach your <StyledBold>$25,000</StyledBold> goal by <StyledBold>October 2020.</StyledBold>
                                </p>
                            </StyledAmountBottom>
                        </StyledAmount>
                        <StyledFooter>
                            <StyledButton>Confirm</StyledButton>
                        </StyledFooter>
                    </StyledBox>
                </StyledInner>
            </StyledOuter>
        </StyledPage>
    );
};

export { HomePage };
