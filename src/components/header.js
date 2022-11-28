import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import Svg, {Path} from 'react-native-svg';

const Header = () => {
  return (
    <View style={styles.svgCurve}>
      <View>
        <Svg
          width="100%"
          height="192"
          viewBox="0 0 393 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M0 0H393V130.315C393 130.315 311.766 128.401 208.5 157.5C79.8313 193.758 0 191.887 0 191.887V0Z"
            fill="#82C8DE"
          />
        </Svg>
        <Svg
          height="200"
          width="100%"
          viewBox="0 0 393 200"
          style={{position: 'absolute', top: 0}}>
          <Path
            fill="#10637D"
            d="M396 0H0V135.744C0 135.744 83.2433 135.744 187.297 166.056C316.948 203.825 396 199.882 396 199.882V0Z"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});

export default Header;
