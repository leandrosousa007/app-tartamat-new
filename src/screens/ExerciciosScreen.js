import { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import { getExercicios } from '../api/exerciciosApi';
import { CardQuestion } from '../components/CardQuestion';
import { AuthContext } from '../context/AuthContext';

export default function ExerciciosScreen() {
  const { setContadorAcertos, setContadorFeitos } = useContext(AuthContext);
  const [exercicios, setExercicios] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feitos, setFeitos] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    const fetchedExercicios = getExercicios().map(exercicio => ({
      ...exercicio,
      feito: false,
      acertou: null,
    }));
    setExercicios(fetchedExercicios);
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      const timer = setInterval(() => {
        setTempo(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado ou o timer for desativado
    }
  }, [isTimerActive]);

  const handlePress = (resposta, item) => {
    setContadorFeitos(prev => prev + 1);
    setFeitos(prev => prev + 1);

    if (resposta.correta === true) {
      setContadorAcertos(prev => prev + 1);
      setAcertos(prev => prev + 1);
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id
            ? { ...exercicio, acertou: true, feito: true }
            : exercicio,
        ),
      );
    } else {
      setExercicios(prevExercicios =>
        prevExercicios.map(exercicio =>
          exercicio.id === item.id ? { ...exercicio, feito: true } : exercicio,
        ),
      );
    }

    // Avança para a próxima questão
    if (currentQuestionIndex < exercicios.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>

      {/* Exibição do Tempo, Acertos e Questões */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Tempo: {formatTime(tempo)} | Acertos: {acertos}</Text>
        <Text style={styles.infoText}>
          Questão {currentQuestionIndex + 1} de {exercicios.length}
        </Text>
      </View>

      {/* Renderizando a questão atual */}
      {exercicios.length > 0 && (
        <CardQuestion
          handlePress={handlePress}
          item={exercicios[currentQuestionIndex]} // Passando a questão atual
        />
      )}
    </View>
  );
}

// Função para formatar o tempo no formato 0:00
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
