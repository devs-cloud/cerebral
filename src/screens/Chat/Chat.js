import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, ChatContent} from '../../components';
import {Colors, Metrics} from '../../constants';

const Chat = () => {
  const scrollViewRef = useRef();
  const [input, setInput] = useState('');
  const [isSendable, setIsSendable] = useState(true);
  const [cur, setCur] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [contents, setContents] = useState([]);
  const isValid = (text, rule) => {
    // Validate the text by validation code
    if (rule === true || rule === false) {
      return rule;
    }
    if (Array.isArray(rule)) {
      return rule.includes(text);
    }
    const reg = new RegExp(rule);
    return reg.test(text);
  };
  const handleSend = () => {
    const newContents = [...contents];
    const index = questions.findIndex((item) => item.id == cur);
    const text = input.toLowerCase();
    let next = index;

    // Add your chat content
    newContents.push({
      title: 'You',
      content: input,
      isSender: true,
    });

    // Validate the content
    if (isValid(text, questions[index].validation)) {
      const path = questions[index].paths[text] || questions[index].paths;
      next = questions.findIndex((item) => item.id == path);
    } else {
      next = questions.findIndex((item) => item.id == -1);
    }

    // Add reseponse
    newContents.push({
      title: 'Bot',
      content: questions[next].question,
      isSender: false,
    });
    if (questions[next].paths == undefined) {
      setIsSendable(false);
    }

    setInput('');
    setCur(next);
    setContents(newContents);
  };

  useEffect(() => {
    // fetch the json data & initialize the chat
    fetch(
      'https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json',
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) {
          return;
        }
        const newContents = [];
        const index = res.findIndex((item) => item.id == 1);
        setQuestions(res);
        newContents.push({
          title: 'Bot',
          content: res[index].question,
          isSender: false,
        });
        setContents(newContents);
        setCur(1);
      });
  }, []);

  return (
    // To-Do: Convert currentFocusedField to currentFocusedInput
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current.scrollToEnd({animated: true});
          }}>
          {contents &&
            contents.length > 0 &&
            contents.map((item, index) => (
              <ChatContent key={index} {...item} />
            ))}
        </ScrollView>
      </View>
      <View style={[styles.footer]}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          editable={isSendable}
        />
        <Button
          style={[styles.send, isSendable ? {} : styles.disabled]}
          titleStyle={styles.sendTitle}
          title="Send"
          handleClick={handleSend}
          disabled={!isSendable}
        />
      </View>
    </KeyboardAwareScrollView>
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
  content: {
    height: Metrics.screenHeight - 120 - Metrics.statusBarHeight,
    backgroundColor: 'white',
    marginTop: 20,
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
  sendTitle: {
    color: Colors.white,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
});
