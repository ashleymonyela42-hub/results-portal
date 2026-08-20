import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
  const [ice, setIce] = useState<number >(0);
  const [part1, setPart1] = useState<number >(0);
  const [part2, setPart2] = useState<number >(0);
  const [targetfm, setTargetFM] = useState<number >(0);
  const [cass, setCASS] = useState<number >(0);
  const [result, setResult] = useState<number >(0);

  const wIce = 0.10;
  const wPart1 = 0.25;
  const wPart2 = 0.30;
  const wPOE = 0.10;


  const resultportal = () => {
    const cassValue = ice + part1 * wPart1 + part2 * wPart2;
    const resultValue = targetfm > 0 ? (targetfm - cassValue) / wPOE : 0;
    
    setResult(resultValue);
    setCASS(cassValue);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 100,
    },

    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      marginBottom: 20,
    },

    image: {
      width: 50,
      height: 40,
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your ice"
        value={String(ice)}
        onChangeText={(Text) => setIce(parseFloat(Text))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your part1"
        keyboardType="numeric"
        value={String(part1)}
        onChangeText={(Text) => setPart1(parseFloat(Text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your part2"
        keyboardType="numeric"
        value={String(part2)}
        onChangeText={(Text) => setPart2(parseFloat(Text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your targetfm"
        keyboardType="numeric"
        value={String(targetfm)}
        onChangeText={(Text) => setTargetFM(parseFloat(Text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your cass"
        keyboardType="numeric"
        value={String(cass)}
        onChangeText={(Text) => setCASS(parseFloat(Text))}
      />

      <Button
        title="Calculate"
        onPress={resultportal}
      />
      
      <Text>{ice}</Text>
      <Text>{part1}</Text>
      <Text>{part2}</Text>
      <Text>{targetfm}</Text>
      <Text>{cass}</Text>
      
    </View>
  );
}