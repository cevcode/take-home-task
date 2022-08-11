import React from 'react';
import { GlobalStyle } from '~/helpers/theme';
import { HomePage } from '~/pages/Home';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HomePage />
        </>
    );
};

export { App };
