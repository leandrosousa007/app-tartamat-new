import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';



export default function ExerciciosScreen({ navigation }) {
  const [nivel, setNivel] = useState('Fácil'); // Estado para armazenar o nível de dificuldade

  // Exercícios baseados no nível de dificuldade
  const exercicios = {
    Fácil: ['Gráfico Simples 1', 'Gráfico Simples 2', 'Gráfico Simples 3'],
    Médio: ['Gráfico Avançado 1', 'Gráfico Avançado 2', 'Gráfico Avançado 3'],
    Difícil: ['Gráfico Complexo 1', 'Gráfico Complexo 2', 'Gráfico Complexo 3'],
  };

  // Função de navegação para a tela de exercício
  const navegarParaExercicio = (exercicio) => {
    navigation.navigate('ExerciciosScreen', { exercicio }); 
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Exercícios de Funções de 1 Grau</Text>

      {/* Botões de Dificuldade */}
      <View style={styles.nivelContainer}>
        <TouchableOpacity
          style={[styles.nivelButton, nivel === 'Fácil' && styles.nivelButtonSelected]}
          onPress={() => setNivel('Fácil')}
        >
          <Text style={styles.nivelButtonText}>Fácil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nivelButton, nivel === 'Médio' && styles.nivelButtonSelected]}
          onPress={() => setNivel('Médio')}
        >
          <Text style={styles.nivelButtonText}>Médio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nivelButton, nivel === 'Difícil' && styles.nivelButtonSelected]}
          onPress={() => setNivel('Difícil')}
        >
          <Text style={styles.nivelButtonText}>Difícil</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Exercícios */}
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {exercicios[nivel].map((exercicio, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navegarParaExercicio(exercicio)} // Navegar para a tela de exercício
          >
            <Text style={styles.buttonText}>{exercicio}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  nivelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  nivelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  nivelButtonSelected: {
    backgroundColor: '#32620e', // Verde quando selecionado
  },
  nivelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#32620e', // Verde para os botões de exercício
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
