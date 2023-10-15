import { ContainerInfo } from '@/atoms/ContainerInfo/styles';
import AddProductsCart from '@/molecules/AddProductsCart';
import BuyButtons from '@/molecules/BuyButtons';
import InfoShipments from '@/molecules/InfoShipments';
import ReturnProductDetailContainer from '@/molecules/ReturnProductDetailContainer';
import { FC } from 'react';

type ContainerProductInfoProps = {
    url: string;
    addProductCar: () => void;
};

const ContainerProductInfo: FC<ContainerProductInfoProps> = ({
    url,
    addProductCar,
}) => {
    return (
        <ContainerInfo>
            <InfoShipments url={url} />
            <AddProductsCart />
            <BuyButtons addProductCar={addProductCar} />
            <ReturnProductDetailContainer />
        </ContainerInfo>
    );
};

export default ContainerProductInfo;
