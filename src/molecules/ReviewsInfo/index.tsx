import { Reviews } from '@/types/product';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const ReviewsInfo: FC<Reviews> = ({ rating, total_reviews }) => {
    const starView = () => {
        const data = rating.toFixed(1);
        const newData = data.split('.');
        const numberStarIcon = parseInt(newData[0]) || 0;
        let retunData: string | any[] = [];
        for (let i = 0; i < numberStarIcon; i++) {
            const key = `star-${i}`;
            retunData.push(<StarIcon key={key} />);
        }

        if (newData.length > 1) {
            const icon = <StarHalfIcon key={'starHalf'} />;
            retunData = [...retunData, icon];
        }
        if (retunData.length === 5) {
            console.log('pase aqu');
            return retunData;
        } else {
            const numberStar = 5 - retunData.length;
            for (let i = 0; i < numberStar; i++) {
                const key = `star-new-${i}`;
                console.log('🚀 ~ file: index.tsx:32 ~ starView ~ key:', key);
                retunData.push(<StarBorderIcon key={key} />);
            }
            return retunData;
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: '5px' }}>
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,.55);' }}>
                {rating}
            </Typography>
            <Box>{starView()}</Box>
            <Typography variant="body2" sx={{ color: 'rgba(0,0,0,.55);' }}>
                ({total_reviews})
            </Typography>
        </Box>
    );
};

export default ReviewsInfo;
