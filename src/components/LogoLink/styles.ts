/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const LinkContent = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    > img {
      max-height: 3rem;
    }
  `}
`;
