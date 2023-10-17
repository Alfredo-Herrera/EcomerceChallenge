import MainLayout from '@/layouts/MainLayout/MainLayout';
import CategorySection from '@/organisms/CategorySection';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

type CategoryProps = {
    category: string;
};

const Category: NextPageWithLayout<CategoryProps> = ({ category }) => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CategorySection category={category} />
        </Grid>
    );
};

// esta funcion ayuda a obtener los datos de la API de lado del servidor para que se pueda usa el SSR
export const getServerSideProps = async (context: any) => {
    const { query } = context;
    try {
        return {
            props: {
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
