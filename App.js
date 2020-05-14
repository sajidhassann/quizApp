import React, {Fragment, useState, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Start from './screens/Start';
import Quiz from './screens/Quiz';
import questionBank from './QuestionBank';
import Quizz from './model/Quiz';
import Result from './screens/Result';

const App = () => {
  const start = () => {
    setScore(0);
    setQuestion(0);
    setOpt(null);
    setScreen(2);
  };

  const next = () => {
    setQuestion(question + 1);
    setOpt(null);
  };
  const finish = () => {
    setScreen(3);
    setOpt(null);
    setQuizArr([]);
  };
  const check = (questionNumber, answer, optIndex) => {
    if (quizArr[questionNumber].answer === answer) {
      setOpt({ind: optIndex, correct: true});
      setScore(score + 5);
      //   console.log(optIndex);
    } else {
      setOpt({ind: optIndex, correct: false});
    }
  };
  const [opt, setOpt] = useState(null);
  const [screen, setScreen] = useState(1);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizArr, setQuizArr] = useState([]);

  useEffect(() => {
    for (let i = 0; i < questionBank.length; i += 3) {
      const ind = Math.floor(Math.random() * 3) + i;
      const val = questionBank[ind];
      quizArr.push(new Quizz(val.question, 5, val.answer, val.options));
    }
    setQuizArr([...quizArr]);
  }, [screen]);
  return (
    <Fragment>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      {screen === 1 && <Start start={start} />}
      {screen === 2 && (
        <Quiz
          finish={finish}
          score={score}
          questionNumber={question}
          question={quizArr[question]}
          next={next}
          opt={opt}
          check={check}
        />
      )}
      {screen === 3 && <Result score={score} start={start} />}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', //main axis
    flex: 1,
    justifyContent: 'center', //cross axis
  },
  text: {
    fontSize: 50,
    color: 'grey',
  },
});

export default App;
