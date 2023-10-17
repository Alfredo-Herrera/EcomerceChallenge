import { Box, Grid, styled } from '@mui/material';
import breakpoints from '../../../styles/theme/breakpoints';

export const SectionCategoryContainer = styled(Box)`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 8px;
    grid:
        'header header header' auto
        'leftSide body rightSide' 1fr
        / 17% 1fr 12%;

    @media (max-width: ${breakpoints.values.sm}px) {
        grid:
            'header header header' auto
            'leftSide leftSide leftSide' auto
            'body body body' 1fr
            / 17% 1fr 12%;
    }
`;

export const LeftSideContainer = styled(Box)`
    grid-area: leftSide;
    margin-left: 10px;
    margin-bottom: 20px;
`;

export const BodyContainer = styled(Grid)`
    grid-area: body;
`;
