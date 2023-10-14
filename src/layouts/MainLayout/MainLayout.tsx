import NavBar from '@/organisms/Navbar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import { FC } from 'react';

export interface mainInterface {
    children: React.ReactElement | React.ReactNode;
    title: string;
}
// eslint-disable-next-line react/function-component-definition
const MainLayout: FC<mainInterface> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Alfredo Herrera" />
                <meta
                    name="description"
                    content="Informacion sobre el contacto"
                />
                <meta name="keywords" content={`${title},`} />
            </Head>

            <main style={{ background: '#EBEBEB' }}>
                <Grid container>
                    <Grid item md={12}>
                        <NavBar />
                    </Grid>
                    <Toolbar sx={{ marginBottom: '30px' }} />
                    {children}
                </Grid>
            </main>
        </>
    );
};

export default MainLayout;
