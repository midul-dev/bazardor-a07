

const formatNumber = (value: number) => {

    return new Intl.NumberFormat("bn-BD").format(value);

};

export default formatNumber;