import React, { useEffect, useState } from 'react';
import moment from "moment";
import arrowLeftIcon from '@static/arrow-left.svg';
import {
    StyledButton,
    StyledButtonRight,
    StyledContent,
    StyledField,
    StyledLabel,
    StyledReachDate,
    StyledTitle,
} from './style';

export interface ReachDateProps {
    label: string;
    date: Date;
    setDate: (date: Date) => void;
}

const ReachDate: React.FC<ReachDateProps> = ({ label, date, setDate }) => {
    const [focused, handleFocus] = useState<boolean>(false);

    const checkPrevButtonDisabled = () => {
        return moment(date).subtract(1, 'M').isBefore(moment(), 'month');
    };

    const isPrevButtonDisabled: boolean = checkPrevButtonDisabled();

    useEffect(() => {
        if (focused) {
            const onKeyDown = ({ key }: { key: string }) => {
                if (key === 'ArrowRight') {
                    return handleClickNext();
                }
                if (key === 'ArrowLeft' && !isPrevButtonDisabled) {
                    return handleClickPrev();
                }
            };

            document.addEventListener('keydown', onKeyDown);

            return () => {
                document.removeEventListener('keydown', onKeyDown);
            };
        }
    }, [focused, date]);

    const handleClickNext = () => {
        const newDate = moment(date).add(1, 'M').toDate();
        return setDate(newDate);
    };

    const handleClickPrev = () => {
        const newDate = moment(date).subtract(1, 'M').toDate();
        return setDate(newDate);
    };

    const handleFocusField = () => {
        handleFocus(true);
    };

    const handleBlurField = () => {
        handleFocus(false);
    };

    return (
        <StyledReachDate data-test='reach-date-widget'>
            <StyledLabel>{label}</StyledLabel>
            <StyledField
                onFocus={handleFocusField}
                onBlur={handleBlurField}
                tabIndex={0}
                focused={focused}
                data-test='reach-date-field'
            >
                <StyledButton
                    onClick={handleClickPrev}
                    disabled={isPrevButtonDisabled}
                    data-test='reach-date-left-arrow'
                >
                    <img src={arrowLeftIcon} alt='arrow-left-icon' />
                </StyledButton>
                <StyledContent>
                    <StyledTitle data-test='reach-date-month-field'>{moment(date).format('MMMM')}</StyledTitle>
                    <p data-test='reach-date-year-field'>{moment(date).format('YYYY')}</p>
                </StyledContent>
                <StyledButtonRight onClick={handleClickNext} data-test='reach-date-right-arrow'>
                    <img src={arrowLeftIcon} alt='arrow-right-icon' />
                </StyledButtonRight>
            </StyledField>
        </StyledReachDate>
    );
};

export { ReachDate };
