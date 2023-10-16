import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { currencies } from './help';

const AddProductsCart = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
            }}
        >
            <Typography variant="body2">Cantidad:</Typography>
            <TextField
                id="filled-select-currency"
                select
                defaultValue="1"
                variant="standard"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        <Typography variant="body2">{option.label}</Typography>
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="body2">(6 dispo...)</Typography>
        </Box>
    );
};

export default AddProductsCart;
