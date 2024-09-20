import * as React from 'react';

import { StyleSheet, View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { TCUserInstance} from "@commandersact/tccore-react-native";
import { TCCoreBridge } from 'src/TCCore';


function test()
{
  TCUserInstance.ID = "12"
}

export default function App() {

  test()
  return (
    <View>
      <ButtonRow />
    </View>
  );
}


let mockVen: { [key: string]: string } = {
  'PRIVACY_VEN_1': '1',
  'PRIVACY_VEN_2': '1',
  'PRIVACY_VEN_3': '0'
};


let mockConsent: { [key: string]: string } = {
  'PRIVACY_CAT_1': '1',
  'PRIVACY_CAT_2': '1',
  'PRIVACY_CAT_3': '0',
  'PRIVACY_VEN_4': '0',
};

const ButtonRow = () => {

  return (
    <ScrollView>
       <View  style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => TCUserInstance.external_consent = mockConsent}>
          <Text style={styles.buttonText}>set External consent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => TCUserInstance.consent_vendors = mockVen}>
          <Text style={styles.buttonText}>set vendor consent value</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => TCUserInstance.anonymous_id = "412"}>
          <Text style={styles.buttonText}>set anonymous_id</Text>
        </TouchableOpacity>


        </View >

    </ScrollView>
);
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginTop: 64
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  consentButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
});