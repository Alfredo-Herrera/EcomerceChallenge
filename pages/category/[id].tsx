import MainLayout from '@/layouts/MainLayout/MainLayout';
import CategorySection from '@/organisms/CategorySection';
import { CatoryType } from '@/types/category';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import ApiChupaPrecios from '../../lib/apiChupaPrecios';
import { NextPageWithLayout } from '../_app';

type CategoryProps = {
    dataCategory: CatoryType;
    category: string;
};

const Category: NextPageWithLayout<CategoryProps> = ({
    dataCategory,
    category,
}) => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CategorySection dataCategory={dataCategory} category={category} />
        </Grid>
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
        // si hay un error en las consultas con el return notFound mandas a una pagina 404

        return {
            notFound: true,
        };
    }
};

// funcion para agregar layout a nuestra pagina
Category.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default Category;
