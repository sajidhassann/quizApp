import React, {useState, useEffect, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Keyboard,
  FlatList,
  Animated,
} from 'react-native';

import {Input, Header, ListItem} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  // const ANIMATION_DURATION = 250;

  const COLOR = 'teal';
  const SEC = 'white';

  const [todoList, setTodoList] = useState([]);
  const [current, setCurrent] = useState(null);
  const [text, setText] = useState('');
  // const [animation, setAnimation] = useState(new Animated.Value(1));
  // const animation = new Animated.Value(0);
  const inputRef = createRef();
  useEffect(() => {
    if (current !== null) {
      setText(current.val);
    } else {
      setText('');
    }
    // Animated.timing(animation, {
    //   toValue: 1,
    //   duration: ANIMATION_DURATION,
    //   useNativeDriver: true,
    // }).start();
  }, [current, todoList]);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item, index}) => (
    // <Text style={{fontSize: 100}}>{item}</Text>
    // <Animated.View>
    <ListItem
      disabled={
        current === null || (current !== null && current.in === index)
          ? false
          : true
      }
      disabledStyle={{backgroundColor: 'grey'}}
      containerStyle={{
        borderRadius: 15,
        margin: 10,
        backgroundColor: COLOR,
      }}
      onPress={() => onSelect(index)}
      key={index}
      leftElement={<Text style={{fontSize: 20, color: SEC}}>#{index + 1}</Text>}
      // Component={{text: {val}, style: {color: '#000'}}}
      title={item}
      titleStyle={{fontSize: 24, color: SEC}}
      rightIcon={
        <Icon
          disabled={
            current === null || (current !== null && current.in === index)
              ? false
              : true
          }
          // disabledStyle={{backgroundColor: 'black'}}
          color={SEC}
          name="times-circle"
          style={{fontSize: 30}}
          onPress={() => onDelete(index)}
        />
      }
    />
    // </Animated.View>
  );

  const onClick = () => {
    if (current === null) {
      todoList.push(text.trim());
      // setTodoList([...todoList, text.trim()]);
      setText('');
      Keyboard.dismiss();
    } else if (current !== null) {
      todoList[current.in] = text.trim();
      Keyboard.dismiss();
      setCurrent(null);
    }
  };
  const onDelete = (index) => {
    setText('');
    setCurrent(null);
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  const onChange = (txt) => {
    if (txt === '' && current) {
      setCurrent(null);
      // Keyboard.dismiss();
    }
    setText(txt);
  };

  const onSelect = (index) => {
    inputRef.current.focus();
    setCurrent({in: index, val: todoList[index]});
  };
  return (
    <SafeAreaView
      style={{backgroundColor: SEC}}
      containerStyle={{backgroundColor: 'white'}}>
      <Header
        statusBarProps={{backgroundColor: COLOR}}
        containerStyle={{height: 50, backgroundColor: COLOR}}
        centerComponent={{
          text: 'TODO App',
          style: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'auto',
            marginBottom: 30,
          },
        }}
      />
      <Input
        leftIcon={
          text !== '' ? (
            <Icon
              onPress={() => {
                Keyboard.dismiss();
                setText('');
                if (current) setCurrent(null);
              }}
              style={{fontSize: 24}}
              color={COLOR}
              name="times"
            />
          ) : (
            <Text />
          )
        }
        ref={inputRef}
        onChangeText={(txt) => onChange(txt)}
        placeholder="Add new task..."
        value={text}
        rightIcon={
          <Icon
            disabled={text === '' ? true : false}
            color={text === '' ? 'grey' : COLOR}
            name={current === null ? 'plus' : 'refresh'}
            style={{fontSize: 28}}
            onPress={onClick}
          />
        }
      />
      {/* {todoList.length === 0 ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 28, color: 'grey'}}>No TODO Items...</Text>
        </View>
      ) : ( */}
      <SafeAreaView>
        <View>
          <FlatList
            ListEmptyComponent={
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 28, color: 'grey'}}>
                  No TODO Items...
                </Text>
              </View>
            }
            initialNumToRender={8}
            data={todoList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            extraData={current}
          />
        </View>
      </SafeAreaView>
      {/* )} */}
      {/* <View style={styles.scrollView}>
          <ScrollView>
            {todoList.map((val, index) => (
              <ListItem
                onPress={() => onSelect(index)}
                key={index}
                leftElement={
                  <Text style={{fontSize: 20, color: 'cornflowerblue'}}>
                    #{index + 1}
                  </Text>
                }
                // Component={{text: {val}, style: {color: '#000'}}}
                title={val}
                titleStyle={{fontSize: 24}}
                rightIcon={
                  <Icon
                    name="times-circle-o"
                    style={{fontSize: 35, color: 'cornflowerblue'}}
                    onPress={() => onDelete(index)}
                  />
                }
              />
            ))}
          </ScrollView>
        </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    // height: 1000,
    // flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // paddingTop: '40%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
