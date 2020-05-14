import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const Result = ({score, start}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30}}>Correct Answers: {score / 5}</Text>
      <Text style={{fontSize: 30}}>Your Score: {score}</Text>
      <Button
        onPress={start}
        type="outline"
        titleStyle={{fontSize: 20}}
        buttonStyle={{
          width: 300,
          margin: 10,
          borderRadius: 10,
          borderWidth: 1.5,
        }}
        title="Start Again"
      />
    </View>
  );
};

export default Result;
