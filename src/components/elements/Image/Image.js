import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  dBlock: {
    display: 'block',
  },
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image = (props) => {
  const { src, srcSet, alt, className, ...rest } = props;

  const classes = useStyles();
  return (
    <img
      className={clsx('image', classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      loading='lazy'
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: '...',
};

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
};

export default Image;
