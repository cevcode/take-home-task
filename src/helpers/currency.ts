import usdIcon from '@static/dollar-sign.svg';

export enum CurrencyTypesEnum {
    USD = 'USD',
    default = 'USD',
};

export const CURRENCY_ICONS = {
    USD: usdIcon,
    default: usdIcon,
};

export const CURRENCY_SYMBOLS = {
    USD: '$',
    default: '$',
};

export const getCurrencyIcon = (currency: CurrencyTypesEnum) => {
    if (CURRENCY_ICONS.hasOwnProperty(currency)) {
        return CURRENCY_ICONS[currency];
    }
    return CURRENCY_ICONS.default;
};

export const getCurrencySymbol = (currency: CurrencyTypesEnum) => {
    if (CURRENCY_SYMBOLS.hasOwnProperty(currency)) {
        return CURRENCY_SYMBOLS[currency];
    }
    return CURRENCY_SYMBOLS.default;
};
