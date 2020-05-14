import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionButton = ({disabled, text, correct, fill, press}) => {
  return (
    <Button
      disabled={disabled}
      onPress={press}
      type="outline"
      buttonStyle={
        !correct && !fill
          ? styles.button
          : !correct && fill
          ? styles.wrongFill
          : correct && fill
          ? styles.correctFill
          : styles.wrong
      }
      title={text}
      titleStyle={fill ? styles.textFill : styles.text}
      icon={
        !correct && !fill ? null : !correct ? (
          <Icon
            name="times-circle-o"
            color={fill ? 'white' : 'red'}
            size={25}
            iconStyle={styles.icon}
          />
        ) : (
          <Icon
            name="check-circle-o"
            color="white"
            size={25}
            iconStyle={styles.icon}
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
  button: {
    borderRadius: 30,
    height: 50,
    margin: 10,
    borderColor: 'grey',
    borderWidth: 2,
  },
  correctFill: {
    borderRadius: 30,
    height: 50,
    backgroundColor: 'green',
    margin: 10,
    borderColor: 'green',
    borderWidth: 2,
  },
  wrong: {
    borderRadius: 30,
    height: 50,
    margin: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  wrongFill: {
    borderRadius: 30,
    backgroundColor: 'red',
    height: 50,
    margin: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
    color: 'grey',
  },
  textFill: {
    fontSize: 15,
    color: 'white',
  },
  disabledStyle: {},
});

export default OptionButton;
