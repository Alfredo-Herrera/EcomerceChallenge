import { TextCleaner } from '@/helper/TextCleaner';
import { ProductCardType } from '@/types/product';
import { Box } from '@mui/material';
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
}) => {
    const href = `/category/`;
    return (
        <Link href={href}>
            <CardProductContainer>
                <ImageContainer>
                    <Image
                        src={thumbnail}
                        alt={title}
                        width={150}
                        height={200}
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
                    </Box>
                </CardProductInfo>
            </CardProductContainer>
        </Link>
    );
};
export default memo(ProductCard);