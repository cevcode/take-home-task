import React, { useState } from 'react';
import { CurrencyTypesEnum, getCurrencySymbol } from '~/helpers/currency';
import CurrencyInput from 'react-currency-input-field';
import { StyledAmount, StyledCurrencySymbol, StyledField, StyledLabel } from '~/widgets/Amount/style';

interface AmountProps {
    label: string;
    currency: CurrencyTypesEnum;
    defaultValue?: string;
}

const Amount: React.FC<AmountProps> = ({ label, currency, defaultValue = '0' }) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    return (
        <StyledAmount>
            <StyledLabel>{label}</StyledLabel>
            <StyledField>
                <StyledCurrencySymbol>
                    <img src={getCurrencySymbol(currency)} alt='currency-symbol' />
                </StyledCurrencySymbol>
                <CurrencyInput
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
