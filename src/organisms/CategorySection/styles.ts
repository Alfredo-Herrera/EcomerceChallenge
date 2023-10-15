import { Box, Grid, styled } from '@mui/material';

export const SectionCategoryContainer = styled(Box)`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 8px;
    grid:
        'header header header' auto
        'leftSide body rightSide' 1fr
        / 17% 1fr 12%;
`;

export const LeftSideContainer = styled(Box)`
    grid-area: leftSide;
`;

export const BodyContainer = styled(Grid)`
    grid-area: body;
`;
