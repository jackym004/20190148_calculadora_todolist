import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calculation = eval(input);
      setResult(calculation.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('1')} style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('2')} style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('3')} style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('+')} style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('4')} style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('5')} style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('6')} style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('-')} style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('7')} style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('8')} style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('9')} style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('*')} style={styles.button}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleClear} style={styles.button}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('0')} style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.button}><Text style={styles.buttonText}>⌫</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('/')} style={styles.button}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleCalculate} style={styles.button}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  displayText: {
    fontSize: 40,
    color: '#000',
  },
  resultText: {
    fontSize: 30,
    color: '#888',
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
  },
});

export default App;
