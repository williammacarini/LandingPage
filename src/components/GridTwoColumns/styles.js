import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.font.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.font.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      text-align: center;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
