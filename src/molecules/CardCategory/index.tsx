import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, memo } from 'react';
import { CardContainer, CardInfo } from './styles';
import { CardCategoryProps } from './type';

export const CardCategory: FC<CardCategoryProps> = ({ image, title }) => {
    console.log('🚀 ~ file: index.tsx:8 ~ image:', image);
    return (
        <CardContainer>
            <Image src={image} alt={title} width={200} height={300} />
            <CardInfo py={3} px={2}>
                <Box>
                    <Typography>{title}</Typography>
                </Box>
            </CardInfo>
        </CardContainer>
    );
};
export default memo(CardCategory);
