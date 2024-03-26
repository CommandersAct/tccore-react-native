import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TCUserInstance} from "@commandersact/tccore-react-native";


function test()
{
  TCUserInstance.ID = "12"
}

export default function App() {

  test()
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
