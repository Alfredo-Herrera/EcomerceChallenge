import { TextCleaner } from '@/helper/TextCleaner';
import { ProductCardType } from '@/types/product';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import {
    CardProductContainer,
    CardProductInfo,
    IconContainer,
    IconDetails,
    ImageContainer,
    PriceContainer,
    TitleTyphography,
} from './styles';

export const ProductCard: FC<ProductCardType> = ({
    thumbnail,
    title,
    details,
    asin,
}) => {
    const href = `/productDetail/${asin}`;
    return (
        <Link href={href}>
            <CardProductContainer>
                <ImageContainer>
                    <Image
                        src={thumbnail}
                        alt={title}
                        layout="fill"
                        objectFit="contain"
                        style={{ marginTop: '10px' }}
                    />
                    <IconContainer>
                        <IconDetails />
                    </IconContainer>
                </ImageContainer>
                <CardProductInfo py={3} px={2}>
                    <Box>
                        <TitleTyphography variant="body2">
                            {TextCleaner(title)}
                        </TitleTyphography>
                        <PriceContainer>
                            <TitleTyphography variant="body1">
                                ${details.total}
                            </TitleTyphography>
                            <TitleTyphography variant="caption">
                                Envío gratis
                            </TitleTyphography>
                        </PriceContainer>
                        <Box padding={'20px'}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Ver Detalles
                            </Button>
                        </Box>
                    </Box>
                </CardProductInfo>
            </CardProductContainer>
        </Link>
    );
};
export default memo(ProductCard);
