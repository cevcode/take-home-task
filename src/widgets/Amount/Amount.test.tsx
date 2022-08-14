import React from 'react';
import { render } from '@testUtils/testUtils';
import { Amount } from './';
import { CurrencyTypesEnum } from '@helpers/currency';

interface AmountProps {
    label: string;
    currency: CurrencyTypesEnum;
    defaultValue?: string | number;
}

describe('Widgets -> Amount', () => {
    let props: AmountProps;

    beforeEach(() => {
        props = {
            label: 'Some label',
            currency: CurrencyTypesEnum.default,
            defaultValue: '0',
        };
    });

    const renderComponent = () =>
        render(<Amount currency={props.currency} label={props.label} defaultValue={props.defaultValue} />);

    it('should render without crash', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByDataTest('amount-widget')).toBeInTheDocument();
    });

    it('should render provided label', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByText('Some label')).toBeInTheDocument();
    });

    it('should render provided currecy symbol', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByAltText('currency-symbol-USD')).toBeInTheDocument();
    });

    it('should render provided value as string with decimals in input', async () => {
        props.defaultValue = '50000.51234';
        const wrapper: any = await renderComponent();
        const input = wrapper.queryByDataTest('amount-input');
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('50,000.51');
    });

    it('should render provided value as invalid string in input', async () => {
        props.defaultValue = 'some-string';
        const wrapper: any = await renderComponent();
        const input = wrapper.queryByDataTest('amount-input');
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('0.00');
    });

    it('should render provided value as number in input', async () => {
        props.defaultValue = 100;
        const wrapper: any = await renderComponent();
        const input = wrapper.queryByDataTest('amount-input');
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('100.00');
    });
});
