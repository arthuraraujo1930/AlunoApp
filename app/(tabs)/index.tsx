import { Image, StyleSheet, Platform, View, TextInput, Button, Text, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { aluno } from '../model/aluno';

import { useState } from 'react';


export default function HomeScreen() {
  const [nome, setNome] = useState('');

  function salvarAluno() {
    const aluno = new Aluno(nome);

    console.log('Aluno salvo:', aluno);
    Alert.alert('Aluno Salvo', `Nome: ${aluno.nome}`);
    setNome(''); // limpa o campo
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Aluno</Text>
      <TextInputstyle={styles.input}
        placeholder="Digite o nome do aluno"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Salvar Aluno" onPress={salvarAluno} />
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
