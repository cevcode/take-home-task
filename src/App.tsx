import React from 'react';
import { GlobalStyle } from '@helpers/theme';
import { HomePage } from '@pages/Home';
import { CurrencyTypesEnum } from '@helpers/currency';

const globalSettings = {
    currency: CurrencyTypesEnum.USD,
};

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HomePage currency={globalSettings.currency} />
        </>
    );
};

export { App };
