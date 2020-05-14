import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Start = ({start}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>General Quiz</Text>
      <Button
        onPress={start}
        titleStyle={styles.buttonText}
        type="outline"
        title="Start Quiz "
        buttonStyle={styles.button}
        iconRight={true}
        icon={
          <Icon
            name="arrow-right"
            color="green"
            size={25}
            iconStyle={styles.icon}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'green',
  },
  button: {
    borderWidth: 2,
    borderStyle: 'dotted',
    height: 60,
    width: 300,
    margin: 20,
    borderColor: 'green',
    borderRadius: 10,
  },
  icon: {
    padding: 10,
  },
});

export default Start;
