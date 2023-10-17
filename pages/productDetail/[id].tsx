import MainLayout from '@/layouts/MainLayout/MainLayout';
import { ProductDetailType } from '@/types/details';
import { useDispatch, useSelector } from 'react-redux';

import ContainerProductDetail from '@/organisms/ContainerProductDetail';
import ContainerProductInfo from '@/organisms/ContainerProductInfo';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import ApiChupaPrecios from '../../lib/apiChupaPrecios';
import {
    setDataShoppingCar,
    setError,
    setLoading,
} from '../../redux/actions/shopping';
import { carShopping, main } from '../../redux/reducers/shopping';
import { NextPageWithLayout } from '../_app';

type productDatailProps = {
    dataProduct: ProductDetailType;
};

const ProductDetail: NextPageWithLayout<productDatailProps> = ({
    dataProduct,
}) => {
    // obtengo los datos del estado en redux
    const { data } = useSelector((state: main) => state.main);

    const dispatch = useDispatch();

    // funcion para agregar los productos en el carrito
    const addProductCar = () => {
        dispatch(setLoading(true));
        const productCarDetail = {
            image: dataProduct.main_image.link,
            title: dataProduct.title,
            price: dataProduct.price,
            amount: 1,
        } as unknown as carShopping;
        const errorMesage = {
            title: `Se agrego correctamente el producto`,
            severityError: 'success',
        };
        setTimeout(() => {
            dispatch(setError(errorMesage));
            dispatch(setDataShoppingCar([...data, productCarDetail]));
            dispatch(setLoading(false));
        }, 1000);
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

// esta funcion ayuda a obtener los datos de la API de lado del servidor para que se pueda usa el SSR
export const getServerSideProps = async (context: any) => {
    const { query } = context;
    try {
        // funcion para obter el token
        const { data: token } = await ApiChupaPrecios.post(
            `integration/admin/token`,
            {
                username:
                    process.env.USER_NAME || process.env.NEXT_PUBLIC_USER_NAME,
                password:
                    process.env.USER_PASS || process.env.NEXT_PUBLIC_USER_PASS,
            }
        );
        // funcion para obter los datos de la api
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

        return {
            props: {
                dataProduct: data[0].data.item,
            },
        };
    } catch (error) {
        // si hay un error en las consultas con el return notFound mandas a una pagina 404
        return {
            notFound: true,
        };
    }
};
// funcion para agregar layout a nuestra pagina

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default ProductDetail;
