import ProductCard from '@/molecules/ProductCard';
import { CatoryType } from '@/types/category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from '@mui/material';

import { FC } from 'react';
import {
    BodyContainer,
    LeftSideContainer,
    SectionCategoryContainer,
} from './styles';

export type CategorySectionProps = {
    dataCategory: CatoryType;
};

const CategorySection: FC<CategorySectionProps> = ({ dataCategory }) => {
    const { total_products, items, pagination, selected_store, refinements } =
        dataCategory;
    const filters = refinements[0];

    return (
        <SectionCategoryContainer>
            <LeftSideContainer>
                <Accordion expanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="body2">Filtros</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>hola mundio</h1>
                    </AccordionDetails>
                </Accordion>
            </LeftSideContainer>
            <BodyContainer container>
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
            </BodyContainer>
        </SectionCategoryContainer>
    );
};

export default CategorySection;
