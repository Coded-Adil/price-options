import PropTypes from 'prop-types';

import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const {price, features, name} = option;
    return (
        <div className="bg-blue-300 flex flex-col rounded-lg p-4 text-center space-y-6">
            <h2>
                <span className="text-6xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl font-bold">{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn bg-green-500 w-full">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;