import React from 'react';
import logoImg from '@static/logoOrigin.svg';
import homeImg from '@static/home_icon.svg';
import { ReachDate } from '@widgets/ReachDate';
import { Amount } from '@widgets/Amount';
import { CurrencyTypesEnum } from '@helpers/currency';
import {
    StyledAmount,
    StyledAmountBottom,
    StyledAmountPrice,
    StyledAmountTop,
    StyledBold,
    StyledBox,
    StyledBoxHeader,
    StyledBoxHeaderContent,
    StyledButton,
    StyledComponentsRow,
    StyledDescription,
    StyledFooter,
    StyledHeader,
    StyledInner,
    StyledOuter,
    StyledPage,
} from './style';

interface HomePageProps {
    currency: CurrencyTypesEnum;
}

const HomePage: React.FC<HomePageProps> = ({ currency }) => {
    return (
        <StyledPage data-test="home-page">
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
                        <StyledComponentsRow>
                            <Amount label='Total amount' currency={currency} />
                            <ReachDate label='Reach goal by' />
                        </StyledComponentsRow>
                        <StyledAmount>
                            <StyledAmountTop>
                                <p>Monthly amount</p>
                                <StyledAmountPrice>$520.83</StyledAmountPrice>
                            </StyledAmountTop>
                            <StyledAmountBottom>
                                <p>
                                    You’re planning <StyledBold>48 monthly deposits</StyledBold> to reach your{' '}
                                    <StyledBold>$25,000</StyledBold> goal by <StyledBold>October 2020.</StyledBold>
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
