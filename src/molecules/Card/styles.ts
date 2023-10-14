import { Box, Card, styled } from '@mui/material';

export const CardContainer = styled(Card)(`
  border-radius: 1rem;
  box-shadow: none;
  position: relative;
  max-width: 200px; 
  max-height: 360px;
  &::after {
    content: "";
    display: block;
    position: absolute;   
    bottom: 0;
    z-index: 1;
s  }
`);

export const CardInfo = styled(Box)`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
`;
