import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './styles';

const FullView = ({ children }) => {
  return (
  <View style={style.wrapper}>
      <View style={style.main}>{children}</View>
  </View>
  )
}

FullView.defaultProps = {
  children: null,
};

FullView.propTypes = {
  children: PropTypes.node,
};

export default FullView;
