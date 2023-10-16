import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Card, styled, Typography } from '@mui/material';

export const CardProductContainer = styled(Card)(`
  border-radius: 1rem;
  box-shadow: none;
  position: relative;
  min-width: 200px; 
  min-height: 350px;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    display: block;
    position: absolute;   
    bottom: 0;
    z-index: 1;
  }
  transition: transform 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    img {
        opacity: 0.3;
    }
    svg {
      display: block;
    }
}
`);

export const CardProductInfo = styled(Box)`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
`;

export const ImageContainer = styled(Box)`
    position: relative;
    height: 150px;
    width: 100%;
`;

export const IconContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    height: -webkit-fill-available;
`;

export const IconDetails = styled(VisibilityIcon)`
    color: #f72d01;
    display: none;
    font-size: 3rem;
`;

export const TitleTyphography = styled(Typography)`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: 10px;
`;

export const PriceContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
