import MainLayout from '@/layouts/MainLayout/MainLayout';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

// pagina 404 custom
const Custom404: NextPageWithLayout = () => {
    return (
        <Grid container>
            <Grid
                item
                md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                <Image
                    src={'/404.svg'}
                    alt={'clean data'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '50%', height: '100%' }}
                />
                <Button
                    variant="outlined"
                    href="/"
                    color="secondary"
                    size="large"
                >
                    Regresar al Home
                </Button>
            </Grid>
        </Grid>
    );
};
// funcion para agregar layout a nuestra pagina
Custom404.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout title="Categoria">{page}</MainLayout>;
};

export default Custom404;
