import MainLayout from '@/layouts/MainLayout/MainLayout';
import CardShopping from '@/molecules/CardShopping';
import { List, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { main } from '../../redux/reducers/shopping';
import { NextPageWithLayout } from '../_app';

const ShoppingCart: NextPageWithLayout = () => {
    // obtengo los datos del estado en redux
    const { data } = useSelector((state: main) => state.main);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                gap: '20px',
            }}
        >
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3">Carrito de Compras</Typography>
            </Grid>
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {data.length > 0 ? (
                    <List
                        dense
                        sx={{
                            width: '80%',

                            bgcolor: 'background.paper',
                        }}
                    >
                        {data.map((element, index) => {
                            const key = `${element.title}- ${index}`;
                            return <CardShopping {...element} key={key} />;
                        })}
                    </List>
                ) : (
                    <Image
                        src={'/NoOrder.svg'}
                        alt={'clean data'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '50%', height: '100%' }}
                    />
                )}
            </Grid>
        </Grid>
    );
};
// funcion para agregar layout a nuestra pagina

ShoppingCart.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default ShoppingCart;
