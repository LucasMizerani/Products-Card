const priceCurrency = (value: number): string => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
}

export default priceCurrency;