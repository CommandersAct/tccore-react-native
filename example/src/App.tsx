import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {TCUser} from "tccore-react-native";


function testibbg()
{
  TCUser.getInstance().ID = "12"
}

export default function App() {

  testibbg()
  return (
    <View style={styles.container}>
      <Text>Result: TCUser </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
