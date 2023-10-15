import { Box, Card, styled } from '@mui/material';

export const CardContainer = styled(Card)(`
  border-radius: 1rem;
  box-shadow: none;
  position: relative;
  max-width: 200px; 
  max-height: 200px;
  &::after {
    content: "";
    display: block;
    position: absolute;   
    bottom: 0;
    z-index: 1;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  transition: transform 0.5s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    img {
        opacity: 0.3;
    }
  }
`);

export const CardInfo = styled(Box)`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
`;
