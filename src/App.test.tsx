import React from 'react';
import { render } from '@testUtils/testUtils';
import { App } from './App';

describe('App',  () => {
    const renderComponent = () =>
        render(<App />);

    it('should render without crash', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByDataTest('home-page')).toBeInTheDocument();
    });
});
