import styled, { css } from 'styled-components';

interface ShowTextProps {
  color?: string;
}

const Color = css<ShowTextProps>`
  position: relative;
  padding-left: 16px;
  &:before {
    position: absolute;
    top: 7px;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: ${(props): string | undefined => props.color};
    border-radius: 50%;
    content: '';
  }
`;

export const ShowTextContainer = styled.span<ShowTextProps>`
  &.color {
    ${Color}
  }
`;
