import styled from 'styled-components';
import { globalStyles } from '@helpers/theme';

export const StyledAmount = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.p`
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
`;

export const StyledField = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    border: 1px solid ${globalStyles.palette.borderColor};
    border-radius: 0.25rem;
    input {
        width: 100%;
        border: 1px solid transparent;
        height: 100%;
        font-size: 1.5rem;
        font-family: ${globalStyles.fonts.accent};
        color: #4d6475;
        border-radius: 0.25rem;
        font-weight: 500;
        padding-left: 2.75rem;
        &:focus {
            outline: none;
            border: 1px solid ${globalStyles.palette.accent};
        }
    }
`;

export const StyledCurrencySymbol = styled.p`
    position: absolute;
    top: calc(50% - 0.75rem);
    left: 0.7rem;
`;
