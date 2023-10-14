import MainLayout from '@/layouts/MainLayout/MainLayout';
import ProductCard from '@/molecules/ProductCard';
import { CatoryType } from '@/types/category';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import ApiChupaPrecios from '../../lib/apiChupaPrecios';
import { NextPageWithLayout } from '../_app';

type CategoryProps = {
    dataCategory: CatoryType;
    category: string;
};

const Category: NextPageWithLayout<CategoryProps> = ({ dataCategory }) => {
    const { total_products, items, pagination, selected_store } = dataCategory;
    console.log('🚀 ~ file: [id].tsx:16 ~ items:', items);
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {items.map((product) => (
                <Grid
                    item
                    md={3}
                    lg={2}
                    sm={4}
                    xs={6}
                    xl={2}
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: '20px',
                        gap: '20px',
                    }}
                    key={product.title}
                >
                    <ProductCard {...product} />
                </Grid>
            ))}
        </Grid>
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
            `chupaprecios/customcatalog/?search=${query.id}&selected_store=amazon&page_num=1`,
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
                dataCategory: data[0].data,
                category: query.id,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

Category.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default Category;
