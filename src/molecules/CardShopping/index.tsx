import {
    Checkbox,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { carShopping } from '../../../redux/reducers/shopping';

const CardShopping: FC<carShopping> = ({ image, title, price, amount }) => {
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
                    </>
                }
            />
        </ListItem>
    );
};

export default CardShopping;
