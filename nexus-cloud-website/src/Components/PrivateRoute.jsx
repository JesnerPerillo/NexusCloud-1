import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('token');
  return token ? <Component {...rest} /> : <Navigate to="/login" />;
}

// ✅ PropTypes validation
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // `elementType` ensures it's a valid React component
};
