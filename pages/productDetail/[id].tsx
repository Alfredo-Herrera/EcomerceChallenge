import MainLayout from '@/layouts/MainLayout/MainLayout';
import { ProductDetailType } from '@/types/details';
import { useDispatch, useSelector } from 'react-redux';

import ContainerProductDetail from '@/organisms/ContainerProductDetail';
import ContainerProductInfo from '@/organisms/ContainerProductInfo';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import ApiChupaPrecios from '../../lib/apiChupaPrecios';
import { setDataShoppingCar } from '../../redux/actions/shopping';
import { carShopping, main } from '../../redux/reducers/shopping';
import { NextPageWithLayout } from '../_app';

type productDatailProps = {
    dataProduct: ProductDetailType;
};

const ProductDetail: NextPageWithLayout<productDatailProps> = ({
    dataProduct,
}) => {
    const { data } = useSelector((state: main) => state.main);

    const dispatch = useDispatch();
    const addProductCar = () => {
        const productCarDetail = {
            image: dataProduct.main_image.link,
            title: dataProduct.title,
            price: dataProduct.price,
        } as unknown as carShopping;
        dispatch(setDataShoppingCar([...data, productCarDetail]));
    };
    return (
        <Paper elevation={6} sx={{ margin: '0px 30px 30px 30px' }}>
            <Grid container>
                <Grid item md={9}>
                    <ContainerProductDetail
                        title={dataProduct.title}
                        image={dataProduct.main_image.link}
                        reviews={dataProduct.reviews}
                        asin={dataProduct.asin}
                        price={dataProduct.price}
                        description={dataProduct.description}
                    />
                </Grid>
                <Grid item md={3} padding={'20px'}>
                    <ContainerProductInfo
                        url={dataProduct.url}
                        addProductCar={addProductCar}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export const getServerSideProps = async (context: any) => {
    const { query } = context;
    try {
        const { data: token } = await ApiChupaPrecios.post(
            `integration/admin/token`,
            {
                username:
                    process.env.USER_NAME || process.env.NEXT_PUBLIC_USER_NAME,
                password:
                    process.env.USER_PASS || process.env.NEXT_PUBLIC_USER_PASS,
            }
        );
        const { data } = await ApiChupaPrecios.get(
            `chupaprecios/productdetail/?asin=${query.id}&selectedStore=amazon`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                },
                responseType: 'json',
            }
        );
        console.log(
            '🚀 ~ file: [id].tsx:51 ~ getServerSideProps ~ data:',
            data
        );

        return {
            props: {
                dataProduct: data[0].data.item,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default ProductDetail;
