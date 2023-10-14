import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { CardContainer, CardInfo } from './styles';
import { CardCategoryProps } from './type';

export const CardCategory: FC<CardCategoryProps> = ({ image, title }) => {
    const href = `/category/${title}`;
    return (
        <Link href={href}>
            <CardContainer>
                <Image src={image} alt={title} width={200} height={300} />
                <CardInfo py={3} px={2}>
                    <Box>
                        <Typography>{title}</Typography>
                    </Box>
                </CardInfo>
            </CardContainer>
        </Link>
    );
};
export default memo(CardCategory);
