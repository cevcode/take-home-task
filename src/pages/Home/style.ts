import styled from 'styled-components';
import { globalStyles, media } from '~/helpers/theme';

export const StyledPage = styled.div`
    min-height: 100vh;
`;

export const StyledHeader = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 1.5rem 3.5rem;
    @media ${media.lessThanMobile} {
      padding: 1rem;
    }
`;

export const StyledOuter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledInner = styled.div`
    width: 35rem;
`;

export const StyledDescription = styled.p`
    font-size: 1.25rem;
    color: ${globalStyles.palette.accent};
    padding: 1.5rem 0;
    text-align: center;
`;

export const StyledBox = styled.div`
    background-color: #fff;
    box-shadow: 0 16px 32px rgba(30, 42, 50, 0.08);
    border-radius: 0.5rem;
    padding: 2.5rem;
    @media ${media.lessThanMobile} {
      padding: 1.5rem;
    }
`;

export const StyledBold = styled.span`
    font-weight: 600;
`;

export const StyledBoxHeader = styled.div`
    display: inline-flex;
    align-items: center;
    img {
        width: 4rem;
    }
`;

export const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledAmount = styled.div`
    border: 1px solid ${globalStyles.palette.borderColor};
    border-radius: 0.5rem;
`;

export const StyledAmountTop = styled(StyledRow)`
    padding: 1.5rem;
    align-items: center;
    p:first-child {
        font-size: 1.25rem;
    }
`;

export const StyledAmountBottom = styled(StyledRow)`
    background-color: #f4f8fa;
    padding: 1.5rem;
    p {
        font-size: 0.75rem;
    }
`;

export const StyledAmountPrice = styled.p`
    color: ${globalStyles.palette.accentText};
    font-size: 2rem;
    font-family: ${globalStyles.fonts.accent};
    font-weight: 500;
`;

export const StyledBoxHeaderContent = styled.div`
    margin-left: 1rem;
    h6 {
        font-family: ${globalStyles.fonts.accent};
        font-weight: 500;
    }
    p {
        color: ${globalStyles.palette.secondaryText};
    }
`;

export const StyledButton = styled.button`
    width: 320px;
    padding: 1.125rem 0;
    color: #fff;
    font-weight: 600;
    outline: 0;
    border-radius: 2rem;
    background-color: ${globalStyles.palette.accent};
    border: none;
    cursor: pointer;
    &:hover {
        filter: grayscale(30%);
    }
    &:active {
        filter: grayscale(50%);
    }
    @media ${media.lessThanMobile} {
      width: 100%;
    }
`;

export const StyledFooter = styled(StyledRow)`
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
`;

export const StyledComponentsRow = styled(StyledRow)`
    margin: 1.5rem 0;
    @media ${media.lessThanMobile} {
      flex-direction: column;
    }
`;
