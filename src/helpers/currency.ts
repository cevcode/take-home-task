import usdIcon from '~/static/dollar-sign.svg';

export enum CurrencyTypesEnum {
    USD = 'USD',
    default = 'USD',
};

export const CURRENCY_SYMBOLS = {
    USD: usdIcon,
    default: usdIcon,
};

export const getCurrencySymbol = (currency: CurrencyTypesEnum) => {
    if (CURRENCY_SYMBOLS.hasOwnProperty(currency)) {
        return CURRENCY_SYMBOLS[currency];
    }
    return CURRENCY_SYMBOLS.default;
};
