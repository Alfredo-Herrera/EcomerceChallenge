import { Filter } from '@/types/category';
import { Box, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

type FiltersCategoryProps = {
    title: string;
    filters: Filter[];
};

const FiltersCategory: FC<FiltersCategoryProps> = ({ title, filters }) => {
    return (
        <Box
            sx={{
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Typography>{title}</Typography>
            <Box>
                {filters.map((filter, index) => {
                    const key = `${filter.value}-${index}`;
                    return (
                        <Box key={key} sx={{ display: 'flex' }}>
                            <Typography variant="body2">
                                <Checkbox
                                    edge="end"
                                    sx={{ marginRight: '10px' }}
                                />
                                {filter.value}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default FiltersCategory;
