import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Metrics} from '../../constants';

const ChatContent = ({title, content, isSender}) => {
  return (
    <View style={styles.chatContainer}>
      <View style={styles.titleConatiner}>
        <Text
          style={[styles.title, isSender ? styles.sender : styles.receiver]}>
          {title}:
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default ChatContent;

const styles = StyleSheet.create({
  chatContainer: {
    width: Metrics.screenWidth / 2 + 100,
    backgroundColor: 'yellow',
    borderRadius: 20,
    marginLeft: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  title: {
    fontSize: 16,
  },
  sender: {
    color: Colors.pink,
  },
  receiver: {
    color: Colors.black,
  },
  content: {
    fontSize: 12,
  },
});
