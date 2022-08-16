import React from 'react';
import Sinon, { SinonSpy } from 'sinon';
import moment from 'moment';
import { render, within, fireEvent } from '@testUtils/testUtils';
import { ReachDate, ReachDateProps } from './';
import userEvent from '@testing-library/user-event/dist';

const sandbox = Sinon.createSandbox();

describe('Widgets -> ReachDate', () => {
    let props: ReachDateProps;

    beforeEach(() => {
        props = {
            label: 'Some label',
            date: moment().toDate(),
            setDate: sandbox.stub(),
        };
    });

    const renderComponent = () => render(<ReachDate label={props.label} date={props.date} setDate={props.setDate} />);

    it('should render without crash', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByDataTest('reach-date-widget')).toBeInTheDocument();
    });

    it('should render provided label', async () => {
        const wrapper: any = await renderComponent();
        expect(wrapper.queryByText('Some label')).toBeInTheDocument();
    });

    it('should render left and right controls', async () => {
        const wrapper: any = await renderComponent();
        const rightButton = wrapper.queryByDataTest('reach-date-right-arrow');
        const leftButton = wrapper.queryByDataTest('reach-date-left-arrow');
        expect(rightButton).toBeInTheDocument();
        expect(leftButton).toBeInTheDocument();
    });

    it('should render current month', async () => {
        const wrapper: any = await renderComponent();
        const monthField = wrapper.queryByDataTest('reach-date-month-field');
        expect(monthField).toBeInTheDocument();
        const { getByText } = within(monthField);
        expect(getByText(moment().format('MMMM'))).toBeInTheDocument();
    });

    it('should render current year', async () => {
        const wrapper: any = await renderComponent();
        const yearField = wrapper.queryByDataTest('reach-date-year-field');
        expect(yearField).toBeInTheDocument();
        const { getByText } = within(yearField);
        expect(getByText(moment().format('YYYY'))).toBeInTheDocument();
    });

    it('should disable prev button if the value will be less than current date', async () => {
        const wrapper: any = await renderComponent();
        const yearField = wrapper.queryByDataTest('reach-date-year-field');
        const monthField = wrapper.queryByDataTest('reach-date-month-field');

        expect(yearField).toBeInTheDocument();
        expect(monthField).toBeInTheDocument();

        expect(within(yearField).getByText(moment().format('YYYY'))).toBeInTheDocument();
        expect(within(monthField).getByText(moment().format('MMMM'))).toBeInTheDocument();

        const leftButton = wrapper.queryByDataTest('reach-date-left-arrow');
        expect(leftButton).toBeInTheDocument();

        expect(leftButton).toHaveAttribute('disabled');
    });

    it('should add 1 month to current date by clicking on next button', async () => {
        const wrapper: any = await renderComponent();
        const yearField = wrapper.queryByDataTest('reach-date-year-field');
        const monthField = wrapper.queryByDataTest('reach-date-month-field');

        expect(yearField).toBeInTheDocument();
        expect(monthField).toBeInTheDocument();

        expect(within(yearField).getByText(moment().format('YYYY'))).toBeInTheDocument();
        expect(within(monthField).getByText(moment().format('MMMM'))).toBeInTheDocument();

        const rightButton = wrapper.queryByDataTest('reach-date-right-arrow');
        expect(rightButton).toBeInTheDocument();

        userEvent.click(rightButton);
        expect((props.setDate as SinonSpy<any>).called).toBeTruthy();
        expect(moment((props.setDate as SinonSpy<any>).firstCall.args[0]).format('MMMM')).toBe(
            moment().add(1, 'M').format('MMMM')
        );
    });

    it('should allow user to add 1 month by using ArrowRight keyboard button if field is in focus', async () => {
        const wrapper: any = await renderComponent();
        const field = wrapper.queryByDataTest('reach-date-field');

        expect(field).toBeInTheDocument();

        const monthField = wrapper.queryByDataTest('reach-date-month-field');

        expect(within(monthField).getByText(moment().format('MMMM'))).toBeInTheDocument();

        fireEvent.focus(field);
        fireEvent.keyDown(field, {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 37,
            charCode: 37,
        });

        expect((props.setDate as SinonSpy<any>).called).toBeTruthy();
        expect(moment((props.setDate as SinonSpy<any>).firstCall.args[0]).format('MMMM')).toBe(
            moment().add(1, 'M').format('MMMM')
        );
    });
});
