import React, { useState } from 'react';
import { CurrencyTypesEnum, getCurrencySymbol } from '@helpers/currency';
import CurrencyInput from 'react-currency-input-field';
import { StyledAmount, StyledCurrencySymbol, StyledField, StyledLabel } from './style';

interface AmountProps {
    label: string;
    currency: CurrencyTypesEnum;
    defaultValue?: string | number;
}

const prepareDefaultValue = (defaultValue: string | number): string => {
    if (!defaultValue || !Number(defaultValue)) {
        return '0';
    }
    return defaultValue.toString();
};

const Amount: React.FC<AmountProps> = ({ label, currency, defaultValue = '0' }) => {
    const [value, setValue] = useState<string | undefined>(prepareDefaultValue(defaultValue));

    return (
        <StyledAmount data-test='amount-widget'>
            <StyledLabel>{label}</StyledLabel>
            <StyledField>
                <StyledCurrencySymbol>
                    <img src={getCurrencySymbol(currency)} alt={`currency-symbol-${currency}`} />
                </StyledCurrencySymbol>
                <CurrencyInput
                    decimalsLimit={2}
                    decimalScale={2}
                    data-test='amount-input'
                    name='currency-field'
                    allowNegativeValue={false}
                    value={value}
                    decimalSeparator='.'
                    groupSeparator=','
                    onValueChange={value => setValue(value)}
                />
            </StyledField>
        </StyledAmount>
    );
};

export { Amount };
