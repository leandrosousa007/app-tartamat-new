import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    color: '#555',
  },
  finishButton: {
    backgroundColor: '#22c55e',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    width: '80%', // Definido para maior largura do botão
    height: 50, // Maior altura para o botão
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  item: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#32620e',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  fullScreenItemContainer: {
    width: Dimensions.get('window').width - 40, // Ajuste para evitar extrapolação
    height: Dimensions.get('window').height - 240, // Ajuste para evitar extrapolação
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  highlightedQuestion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#ffeb3b',
    padding: 10,
    borderRadius: 5,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
