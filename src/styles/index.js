import { css } from '@emotion/css';

const brand = '#74D900';

export const title = css`
  color: ${brand};
  font-size: 1em;
  white-space: nowrap;
`;

export const comicSans = css`
  font-family: 'Comic Sans MS', cursive;
`;

export const box = css`
  position: relative;
  display: inline-block;
  border: 2px solid ${brand};
  line-height: 1;
  padding: 4px;
  border-radius: 4px;
`;

export const navlink = css`
  font-size:16px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background: linear-gradient(to right, #00bcff, #00ff96,#fbff00,#ff7600);
`;

export const navPosition = css`
  position: absolute;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  top: 0px;
`;
