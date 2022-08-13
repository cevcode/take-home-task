import React, { useEffect, useState } from 'react';
import moment from 'moment';
import arrowLeftIcon from '~/static/arrow-left.svg';
import { StyledButton, StyledButtonRight, StyledContent, StyledField, StyledLabel, StyledReachDate, StyledTitle } from '~/widgets/ReachDate/style';

interface ReachDateProps {
    label: string;
}

const ReachDate: React.FC<ReachDateProps> = ({ label }) => {
    const [date, setDate] = useState<Date>(moment().toDate());
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
        <StyledReachDate>
            <StyledLabel>{label}</StyledLabel>
            <StyledField onFocus={handleFocusField} onBlur={handleBlurField} tabIndex={0} focused={focused}>
                <StyledButton onClick={handleClickPrev} disabled={isPrevButtonDisabled}>
                    <img src={arrowLeftIcon} alt='arrow-left-icon' />
                </StyledButton>
                <StyledContent>
                    <StyledTitle>{moment(date).format('MMMM')}</StyledTitle>
                    <p>{moment(date).format('YYYY')}</p>
                </StyledContent>
                <StyledButtonRight onClick={handleClickNext}>
                    <img src={arrowLeftIcon} alt='arrow-right-icon' />
                </StyledButtonRight>
            </StyledField>
        </StyledReachDate>
    );
};

export { ReachDate };
