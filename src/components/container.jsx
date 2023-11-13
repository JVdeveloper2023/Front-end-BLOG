import { cn } from "../libs/utils";
import PropTypes from 'prop-types';

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

function Container({ children, className }) {
    const classes = cn('container mx-auto px-5 lg:px-28', className);
  
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
  
  export default Container;