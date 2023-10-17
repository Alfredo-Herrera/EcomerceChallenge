import ProductCard from '@/molecules/ProductCard';
import { CatoryType } from '@/types/category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    Pagination,
    Typography,
    useMediaQuery,
} from '@mui/material';

import FiltersCategory from '@/molecules/FiltersCategory';
import SkeletonCard from '@/molecules/SkeletonCard';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiChupaPrecios from '../../../lib/apiChupaPrecios';
import {
    setDataPaginationFilter,
    setLoading,
} from '../../../redux/actions/shopping';
import { main } from '../../../redux/reducers/shopping';
import {
    BodyContainer,
    LeftSideContainer,
    SectionCategoryContainer,
} from './styles';

export type CategorySectionProps = {
    category: string;
};

const CategorySection: FC<CategorySectionProps> = ({ category }) => {
    const dispatch = useDispatch();
    const [viewSkeleton, setViewSkeleton] = useState(true);
    const [error, setError] = useState('');
    const matches = useMediaQuery('(min-width:600px)');
    const [dataCategory, setdataCategory] = useState<CatoryType>({
        total_products: 0,
        items: [],
        pagination: {
            current: '',
            previous: '',
            next: { href: '', title: '' },
            links: [{ href: '', title: '' }],
        },
        refinements: [],
        selected_store: '',
    });
    const { items, pagination, refinements } = dataCategory;
    const filters = refinements[0];
    const { filterPagination } = useSelector((state: main) => state.main);

    useEffect(() => {
        getElements(1);
    }, []);

    const getElements = async (page: number) => {
        try {
            const { data: token } = await ApiChupaPrecios.post(
                `integration/admin/token`,
                {
                    username:
                        process.env.USER_NAME ||
                        process.env.NEXT_PUBLIC_USER_NAME,
                    password:
                        process.env.USER_PASS ||
                        process.env.NEXT_PUBLIC_USER_PASS,
                }
            );
            const { data } = await ApiChupaPrecios.get(
                `chupaprecios/customcatalog/?search=${category}&selected_store=amazon&page_num=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Access-Control-Allow-Origin': '*',
                    },
                    responseType: 'json',
                }
            );
            setViewSkeleton(false);
            setdataCategory(data[0].data);
            setError('');
        } catch (error) {
            setError('Error en la Api');
        }
    };

    const searchItemsPagination = async (page: number) => {
        dispatch(setLoading(true));
        dispatch(setDataPaginationFilter(page));
        if (window.scrollTo) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        try {
            const { data: token } = await ApiChupaPrecios.post(
                `integration/admin/token`,
                {
                    username:
                        process.env.USER_NAME ||
                        process.env.NEXT_PUBLIC_USER_NAME,
                    password:
                        process.env.USER_PASS ||
                        process.env.NEXT_PUBLIC_USER_PASS,
                }
            );
            const { data } = await ApiChupaPrecios.get(
                `chupaprecios/customcatalog/?search=${category}&selected_store=amazon&page_num=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Access-Control-Allow-Origin': '*',
                    },
                    responseType: 'json',
                }
            );

            setdataCategory(data[0].data);
            dispatch(setLoading(false));
            setError('');
        } catch (error) {
            setError('Error en la consulta');
        }
    };

    const viewAccordion = !matches ? {} : { expanded: true };

    return (
        <SectionCategoryContainer>
            <LeftSideContainer>
                <Accordion {...viewAccordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="body2">Filtros</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {filters?.price && (
                            <FiltersCategory
                                title={filters.price.title}
                                filters={filters.price.filters}
                            />
                        )}

                        {filters?.color && (
                            <FiltersCategory
                                title={filters.color.title}
                                filters={filters.color.filters}
                            />
                        )}

                        {filters?.base && (
                            <FiltersCategory
                                title={filters.base.title}
                                filters={filters.base.filters}
                            />
                        )}
                    </AccordionDetails>
                </Accordion>
            </LeftSideContainer>
            <BodyContainer container>
                {viewSkeleton &&
                    !error &&
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (item) => {
                            const key = `skeleton-${item}`;
                            return <SkeletonCard key={key} />;
                        }
                    )}
                {error && (
                    <Grid
                        item
                        md={12}
                        xs={12}
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <Image
                            src={'/error.svg'}
                            alt={'clean data'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '50%', height: '100%' }}
                        />
                        <Typography variant="h2">
                            Error en la consulta del Api{' '}
                        </Typography>
                        <Button
                            size="large"
                            onClick={() => getElements(1)}
                            variant="outlined"
                        >
                            Volver a intentar
                        </Button>
                    </Grid>
                )}
                {items.map((product, i) => (
                    <Grid
                        item
                        md={3}
                        lg={3}
                        sm={4}
                        xs={6}
                        xl={3}
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            marginBottom: '20px',
                            gap: '20px',
                        }}
                        key={`${i}-${product.title}`}
                    >
                        <ProductCard {...product} />
                    </Grid>
                ))}
                <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <Pagination
                        count={pagination.links.length}
                        variant="outlined"
                        color="secondary"
                        page={filterPagination}
                        onChange={(e, page) => searchItemsPagination(page)}
                    />
                </Grid>
            </BodyContainer>
        </SectionCategoryContainer>
    );
};

export default CategorySection;
