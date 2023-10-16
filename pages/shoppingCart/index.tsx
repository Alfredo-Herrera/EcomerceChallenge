import MainLayout from '@/layouts/MainLayout/MainLayout';
import CardShopping from '@/molecules/CardShopping';
import { CatoryType } from '@/types/category';
import { List } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { main } from '../../redux/reducers/shopping';
import { NextPageWithLayout } from '../_app';

type CategoryProps = {
    dataCategory: CatoryType;
    category: string;
};

const ShoppingCart: NextPageWithLayout<CategoryProps> = ({ dataCategory }) => {
    const { data } = useSelector((state: main) => state.main);
    console.log('🚀 ~ file: index.tsx:16 ~ data:', data);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
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
        </Grid>
    );
};

ShoppingCart.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default ShoppingCart;
