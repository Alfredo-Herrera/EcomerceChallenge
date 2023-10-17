import ProductCard from '@/molecules/ProductCard';
import { CatoryType } from '@/types/category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';

import FiltersCategory from '@/molecules/FiltersCategory';
import { FC, useState } from 'react';
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
    dataCategory: CatoryType;
    category: string;
};

const CategorySection: FC<CategorySectionProps> = ({
    dataCategory,
    category,
}) => {
    const dispatch = useDispatch();
    const { items, pagination, refinements } = dataCategory;

    const [viewItems, setviewItems] = useState(items);
    const filters = refinements[0];
    const { filterPagination } = useSelector((state: main) => state.main);

    const searchItemsPagination = async (page: number) => {
        dispatch(setLoading(true));
        dispatch(setDataPaginationFilter(page));
        if (window.scrollTo) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
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
            `chupaprecios/customcatalog/?search=${category}&selected_store=amazon&page_num=${page}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                },
                responseType: 'json',
            }
        );

        setviewItems(data[0].data.items ?? []);
        dispatch(setLoading(false));
    };

    return (
        <SectionCategoryContainer>
            <LeftSideContainer>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="body2">Filtros</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {filters.price && (
                            <FiltersCategory
                                title={filters.price.title}
                                filters={filters.price.filters}
                            />
                        )}

                        {filters.color && (
                            <FiltersCategory
                                title={filters.color.title}
                                filters={filters.color.filters}
                            />
                        )}

                        {filters.base && (
                            <FiltersCategory
                                title={filters.base.title}
                                filters={filters.base.filters}
                            />
                        )}
                    </AccordionDetails>
                </Accordion>
            </LeftSideContainer>
            <BodyContainer container>
                {viewItems.map((product, i) => (
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
