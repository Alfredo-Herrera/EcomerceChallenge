import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import { Box, Button } from '@mui/material';
import { FC } from 'react';

type BuyButtonsProps = {
    addProductCar: () => void;
};

const BuyButtons: FC<BuyButtonsProps> = ({ addProductCar }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '20px',
            }}
        >
            <Button
                fullWidth
                variant="contained"
                startIcon={<SellIcon />}
                sx={{ height: 40 }}
            >
                Comprar ahora
            </Button>
            <Button
                fullWidth
                variant="contained"
                startIcon={<LocalGroceryStoreIcon />}
                sx={{ height: 40 }}
                onClick={addProductCar}
            >
                Agregar al Carrito
            </Button>
        </Box>
    );
};

export default BuyButtons;
