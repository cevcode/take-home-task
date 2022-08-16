import React from 'react';
import { CurrencyTypesEnum, getCurrencyIcon } from '@helpers/currency';
import CurrencyInput from 'react-currency-input-field';
import { StyledAmount, StyledCurrencySymbol, StyledField, StyledLabel } from './style';

export interface AmountProps {
    label: string;
    currency: CurrencyTypesEnum;
    value?: string | number;
    onChange: (value?: string) => void;
}

const prepareDefaultValue = (value?: string | number): string => {
    if (!value || !Number(value)) {
        return '0';
    }
    return value.toString();
};

const Amount: React.FC<AmountProps> = ({ label, currency, value, onChange }) => {

    const handleChange = (value?: string) => {
        if (!value) {
            return onChange('0');
        }
        return onChange(value);
    };

    return (
        <StyledAmount data-test='amount-widget'>
            <StyledLabel>{label}</StyledLabel>
            <StyledField>
                <StyledCurrencySymbol>
                    <img src={getCurrencyIcon(currency)} alt={`currency-symbol-${currency}`} />
                </StyledCurrencySymbol>
                <CurrencyInput
                    decimalsLimit={2}
                    decimalScale={2}
                    data-test='amount-input'
                    name='currency-field'
                    allowNegativeValue={false}
                    value={prepareDefaultValue(value)}
                    decimalSeparator='.'
                    groupSeparator=','
                    onValueChange={value => handleChange(value)}
                />
            </StyledField>
        </StyledAmount>
    );
};

export { Amount };
