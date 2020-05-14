import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import OptionButton from '../components/OptionButton';

const Quiz = ({score, questionNumber, question, next, finish, check, opt}) => {
  const press = (index) => {
    check(questionNumber, options[index], index);
  };
  const {ques, options, answer} = question;

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Score: {score}</Text>
        <Text style={styles.headText}>Question: {questionNumber + 1}/5</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.questionText}>{ques}</Text>
      </View>
      <View style={styles.options}>
        {options.map((val, index) => {
          return (
            <OptionButton
              correct={
                opt !== null && index === opt.ind && opt.correct
                  ? true
                  : opt !== null && val === answer
                  ? true
                  : false
              }
              fill={
                opt !== null && index === opt.ind
                  ? true
                  : opt !== null && val === answer
                  ? true
                  : false
              }
              disabled={opt !== null}
              press={() => press(index)}
              key={index}
              text={'  ' + val}
            />
          );
        })}
      </View>
      <Button
        buttonStyle={styles.btn}
        type="outline"
        title={questionNumber < 4 ? 'Next' : 'Finish'}
        disabled={opt === null}
        onPress={questionNumber < 4 ? next : finish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  questionText: {
    fontSize: 20,
  },
  content: {
    flex: 1 / 4,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    margin: 20,
    flex: 1 / 2,
  },
  headText: {
    fontSize: 20,
  },
  head: {
    flex: 1 / 20,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Quiz;
