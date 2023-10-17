import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import { Button } from '@mui/material';
import { FC } from 'react';
import { ButtonsContainer } from './styles';

type BuyButtonsProps = {
    addProductCar: () => void;
};

const BuyButtons: FC<BuyButtonsProps> = ({ addProductCar }) => {
    return (
        <ButtonsContainer>
            <Button
                fullWidth
                variant="contained"
                startIcon={<SellIcon />}
                sx={{ height: 40 }}
                href="/soon"
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
        </ButtonsContainer>
    );
};

export default BuyButtons;
