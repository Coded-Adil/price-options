import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className="pr-10 my-2 md:my-0 font-bold hover:bg-yellow-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;