import styled, { css } from 'styled-components';
import { globalStyles } from '~/helpers/theme';

export const StyledReachDate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    max-width: 12rem;
`;

export const StyledLabel = styled.p`
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
`;

export const StyledField = styled.div<{ focused: boolean }>`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${globalStyles.palette.borderColor};
    border-radius: 0.25rem;
    &:focus {
        outline: none;
    }
    ${props =>
    props.focused &&
    css`
            border: 1px solid ${globalStyles.palette.accent};
        `}
`;

export const StyledButton = styled.button`
    padding: 0 1.25rem;
    height: 100%;
    display: flex;
    border: none;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    outline: 0;
    cursor: pointer;
    border-radius: 0.25rem;
    &:hover {
        background-color: ${globalStyles.palette.borderColor};
    }
    &:active {
        background-color: ${globalStyles.palette.borderColor};
        filter: contrast(90%);
    }
`;

export const StyledButtonRight = styled(StyledButton)`
    img {
        transform: rotate(180deg);
    }
`;

export const StyledContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledTitle = styled.p`
    font-weight: 600;
    margin-bottom: 0.2rem;
`;
