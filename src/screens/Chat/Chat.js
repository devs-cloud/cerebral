import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {Button} from '../../components';
import {Colors, Metrics} from '../../constants';

const Chat = () => {
  const [input, setInput] = useState('');
  const [questions, setQuestions] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSend = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TextInput style={styles.input} value={input} onChange={handleChange} />
        <Button style={styles.send} title="Send" handleClick={handleSend} />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'green',
    position: 'relative',
    paddingTop: Metrics.statusBarHeight,
  },
  footer: {
    width: Metrics.screenWidth - 20,
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 10,
    left: 0,
    bottom: 25,
  },
  input: {
    height: 60,
    flex: 12,
    backgroundColor: 'white',
  },
  send: {
    height: 60,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    borderRadius: 5,
  },
});
