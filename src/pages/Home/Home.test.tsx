import React from 'react';
import { render, within, fireEvent } from "@testUtils/testUtils";
import { HomePage, HomePageProps } from "./";
import { CurrencyTypesEnum } from '@helpers/currency';
import userEvent from "@testing-library/user-event/dist";

describe('Pages -> HomePage', () => {
    let props: HomePageProps;

    beforeEach(() => {
        props = {
            currency: CurrencyTypesEnum.default,
        };
    });

    const renderComponent = () =>
        render(<HomePage currency={props.currency} />);

    it('should render without crash', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByDataTest('home-page')).toBeInTheDocument();
    });

    it('should render default monthly amount price', async () => {
        const wrapper: any = await renderComponent();

        const monthlyAmountField = wrapper.queryByDataTest('home-page-monthly-amount-price');

        expect(monthlyAmountField).toBeInTheDocument();

        expect(within(monthlyAmountField).getByText('$0')).toBeInTheDocument();
    });

    it('should render default amount price', async () => {
        const wrapper: any = await renderComponent();

        const amountField = wrapper.queryByDataTest('home-page-amount-price');

        expect(amountField).toBeInTheDocument();

        expect(within(amountField).getByText('$0')).toBeInTheDocument();
    });

    it('should render field with default 0 months from today', async () => {
        const wrapper: any = await renderComponent();

        const monthFromTodayField = wrapper.queryByDataTest('home-page-months-from-today');

        expect(monthFromTodayField).toBeInTheDocument();

        expect(within(monthFromTodayField).getByText('0 monthly deposits')).toBeInTheDocument();
    });

    it('should render field with default 0 months from today', async () => {
        const wrapper: any = await renderComponent();

        const monthFromTodayField = wrapper.queryByDataTest('home-page-months-from-today');

        expect(monthFromTodayField).toBeInTheDocument();

        expect(within(monthFromTodayField).getByText('0 monthly deposits')).toBeInTheDocument();
    });

    it('should render valid values in all places by changing amount and months', async () => {
        const wrapper: any = await renderComponent();

        // click 2 times on datepicker to change the value from 0 -> 2 months from today
        const reachDateRightButton = wrapper.queryByDataTest('reach-date-right-arrow');
        expect(reachDateRightButton).toBeInTheDocument();

        userEvent.click(reachDateRightButton);
        userEvent.click(reachDateRightButton);

        // change amount by typing value into the input
        const amountInputField = wrapper.queryByDataTest('amount-input');
        expect(amountInputField).toBeInTheDocument();

        fireEvent.change(amountInputField, { target: { value: '50000' } });
        expect(amountInputField.value).toBe('50,000');

        //check that amount value is correct in total amount field render
        const amountField = wrapper.queryByDataTest('home-page-amount-price');
        expect(amountField).toBeInTheDocument();

        expect(within(amountField).getByText('$50,000')).toBeInTheDocument();

        //check that monthly amount field is correct
        const monthlyAmountField = wrapper.queryByDataTest('home-page-monthly-amount-price');
        expect(monthlyAmountField).toBeInTheDocument();

        expect(within(monthlyAmountField).getByText('$25,000')).toBeInTheDocument();

        //check that total months value from today is valid
        const monthFromTodayField = wrapper.queryByDataTest('home-page-months-from-today');
        expect(monthFromTodayField).toBeInTheDocument();

        expect(within(monthFromTodayField).getByText('2 monthly deposits')).toBeInTheDocument();
    });
});
