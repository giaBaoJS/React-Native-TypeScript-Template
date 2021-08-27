import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {kTextSizes} from '../../Utils/Constant';
// Redux
import {useSelector} from 'react-redux';

const ItalicText = (props: any) => {
  return (
    <Text
      {...props}
      allowFontScaling={false}
      selectable={true}
      style={{
        ...styles.text,
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: kTextSizes.body,
    fontStyle: 'italic',
  },
});

export default ItalicText;
