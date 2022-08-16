import React, { useState } from 'react';
import moment from 'moment';
import logoImg from '@static/logoOrigin.svg';
import homeImg from '@static/home_icon.svg';
import { ReachDate } from '@widgets/ReachDate';
import { Amount } from '@widgets/Amount';
import { CurrencyTypesEnum, getCurrencySymbol } from '@helpers/currency';
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
import { prettifyLongString } from "@helpers/text";

const getMonthDiffFromToday = (date: Date): number => {
    const diff: number = moment(moment(date)).diff(moment(), 'months', true);
    if (diff < 0) {
        return 0;
    }
    return Math.round(diff);
};

const getMonthlyAmount = (monthsFromToday: number, amount?: string): number => {
    if (!amount || !monthsFromToday) {
        return Number(amount);
    }
    return Number(amount) / monthsFromToday;
};

export interface HomePageProps {
    currency: CurrencyTypesEnum;
}

const HomePage: React.FC<HomePageProps> = ({ currency }) => {
    const [amount, setAmount] = useState<string | undefined>('0');
    const [date, setDate] = useState<Date>(moment().toDate());

    const currencySymbol = getCurrencySymbol(currency);

    const plainMonthAndYear: string = `${moment(date).format('MMMM')} ${moment(date).format('YYYY')}`;
    const plainAmountWithCurrency: string = `${currencySymbol}${parseFloat(amount as string).toLocaleString('en')}`;

    const monthsFromToday: number = getMonthDiffFromToday(date);
    const monthlyAmount: number = getMonthlyAmount(monthsFromToday, amount);

    const plainMonthlyAmountWithCurrency: string = `${currencySymbol}${parseFloat(
        monthlyAmount.toString()
    ).toLocaleString('en')}`;

    return (
        <StyledPage data-test='home-page'>
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
                            <Amount label='Total amount' currency={currency} value={amount} onChange={setAmount} />
                            <ReachDate label='Reach goal by' date={date} setDate={setDate} />
                        </StyledComponentsRow>
                        <StyledAmount>
                            <StyledAmountTop>
                                <p>Monthly amount</p>
                                <StyledAmountPrice data-test="home-page-monthly-amount-price">{prettifyLongString(plainMonthlyAmountWithCurrency, 15)}</StyledAmountPrice>
                            </StyledAmountTop>
                            <StyledAmountBottom>
                                <p>
                                    You’re planning <StyledBold data-test="home-page-months-from-today">{monthsFromToday} monthly deposits</StyledBold> to reach
                                    your <StyledBold data-test="home-page-amount-price">{plainAmountWithCurrency}</StyledBold> goal by{' '}
                                    <StyledBold>{plainMonthAndYear}.</StyledBold>
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
