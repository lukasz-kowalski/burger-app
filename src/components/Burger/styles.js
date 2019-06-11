import styled from 'styled-components';
import { breakpoints, minWidth, minHeight } from '../../utils/mediaQueries';

export const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  ${minWidth(breakpoints.sm) + minHeight(breakpoints.xs)} {
    width: 350px;
    height: 300px;
  }

  ${minWidth(breakpoints.sm) + minHeight(breakpoints.xs + 1)} {
    width: 450px;
    height: 400px;
  }

  ${minWidth(breakpoints.lg) + minHeight(breakpoints.md)} {
    width: 600px;
    height: 450px;
  }
`;
