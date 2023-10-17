import {
    Checkbox,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataShoppingCar } from '../../../redux/actions/shopping';
import { carShopping, main } from '../../../redux/reducers/shopping';

const CardShopping: FC<carShopping> = ({ image, title, price, amount }) => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: main) => state.main);

    const deleteItem = () => {
        const filteredLibraries = data.filter((item) => item.title !== title);
        dispatch(setDataShoppingCar(filteredLibraries));
    };
    return (
        <ListItem
            alignItems="flex-start"
            secondaryAction={<Checkbox edge="end" />}
            divider
        >
            <ListItemAvatar>
                <Image src={image} alt={title} width={40} height={50} />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`   $${price}`}
                        </Typography>
                        <Typography
                            sx={{
                                display: 'inline',
                                marginLeft: '20px',
                                cursor: 'pointer',
                            }}
                            onClick={deleteItem}
                            component="span"
                            variant="body2"
                            color="secondary"
                        >
                            {` Eliminar `}
                        </Typography>
                    </>
                }
            />
        </ListItem>
    );
};

export default CardShopping;
