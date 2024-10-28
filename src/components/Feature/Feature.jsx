import PropTypes from 'prop-types';
import { FaCheckSquare } from "react-icons/fa";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center gap-2"><FaCheckSquare className="text-green-500" />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}

export default Feature;