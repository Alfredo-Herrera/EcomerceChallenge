import { Box, CardMedia, Typography } from '@mui/material';
import { memo } from 'react';
import { CardContainer, CardInfo } from './styles';

export const GalaxyCardDemo = memo(function GalaxyCard() {
    return (
        <>
            <CardContainer>
                <CardMedia
                    component="img"
                    image={
                        'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
                    }
                />
                <CardInfo py={3} px={2}>
                    <Box>
                        <Typography>Galaxy</Typography>
                        <Typography>Buds 2019</Typography>
                        <Typography>Perfect for everyone</Typography>
                    </Box>
                </CardInfo>
            </CardContainer>
        </>
    );
});
export default GalaxyCardDemo;
