import PaymentMethods from '@/atoms/PaymentMethods';
import InfoProductDetail from '@/molecules/InfoProductDetail';
import ProductDescription from '@/molecules/ProductDescription';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { Reviews } from '../../types/product';

type ContainerProductDetailProps = {
    title: string;
    image: string;
    reviews: Reviews;
    asin: string;
    price: number;
    description: string;
};

const ContainerProductDetail: FC<ContainerProductDetailProps> = ({
    image,
    title,
    reviews,
    asin,
    price,
    description,
}) => {
    return (
        <Grid container>
            <Grid item md={6} padding={'30px'}>
                <Image src={image} alt={title} width={378} height={468} />
            </Grid>
            <Grid
                item
                md={6}
                padding="20px"
                display="flex"
                gap="15px"
                flexDirection="column"
            >
                <InfoProductDetail
                    title={title}
                    reviews={reviews}
                    asin={asin}
                    price={price}
                />
                <Box
                    sx={{
                        width: '100%',
                        height: '100px',
                        position: 'relative',
                    }}
                >
                    <PaymentMethods />
                </Box>
                <ProductDescription description={description} />
            </Grid>
        </Grid>
    );
};

export default ContainerProductDetail;
