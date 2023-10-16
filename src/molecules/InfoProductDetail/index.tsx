import { Reviews } from '@/types/product';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import ReviewsInfo from '../ReviewsInfo';

type InfoProductDetailProps = {
    title: string;
    reviews: Reviews;
    asin: string;
    price: number;
};

const InfoProductDetail: FC<InfoProductDetailProps> = ({
    title,
    reviews,
    asin,
    price,
}) => {
    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '22px',
                    lineHeight: 1.18,
                    marginTop: '5px',
                }}
            >
                {title}
            </Typography>
            <ReviewsInfo {...reviews} />
            <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography variant="body2">
                    {`Estado: `}
                    <span style={{ color: '#00a650' }}>En Stock</span>
                </Typography>

                <Typography variant="body2" sx={{ color: 'rgba(0,0,0,.55);' }}>
                    {`SKU: ${asin}`}
                </Typography>
            </Box>
            <Typography
                variant="caption"
                sx={{
                    fontSize: '36px',
                    fontWeight: '300',
                    marginTop: '5px',
                    lineHeight: '1',
                }}
            >
                ${price} MX
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    fontSize: '20px',
                    fontWeight: '300',
                    marginTop: '5px',
                    lineHeight: '1',
                }}
            >
                IVA incluido
            </Typography>
        </>
    );
};

export default InfoProductDetail;
