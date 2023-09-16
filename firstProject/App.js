/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={
      //   {
      //   width: "40%",
      //   margin: "auto",
      //   // borderBlockColor:"10px solid blue",
      //   backgroundColor:"yellow"
      // }
      styles.sectionContainer
    }>
      <View
        style={styles.sectionTitle}
      >
        <Text>
          Hello Kushumoti!!
        </Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>
          {count}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: "50%",
    // paddingHorizontal: 24,
    backgroundColor: "yellow",
    width: "40%",
    // margin:"auto"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
