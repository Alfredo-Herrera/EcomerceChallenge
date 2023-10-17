import Image from 'next/image';

const PaymentMethods = () => {
    return (
        <Image
            src={'/example.webp'}
            alt={'dataPayments'}
            layout="fill"
            objectFit="contain"
        />
    );
};

export default PaymentMethods;
