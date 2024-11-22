import { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {isSigninInProgress && <ActivityIndicator style={styles.loader} />}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem vindo</Text>
        <Text style={styles.appName}>TartaMat</Text>
      </View>
      <View style={styles.loginSection}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="text"
          
        />
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={async () => {
            setIsSigninInProgress(true);
            try {
              await login();
            } catch (e) {
              console.error('Login error:', e);
            } finally {
              setIsSigninInProgress(false);
            }
          }}
        >
          <Text style={styles.loginButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={async () => {
            setIsSigninInProgress(true);
            try {
              await login();
            } catch (e) {
              console.error('Login error:', e);
            } finally {
              setIsSigninInProgress(false);
            }
          }}
          >
          <Text style={styles.signupText}>Crie sua conta <Text style={styles.signupLink}>Criar Agora</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7f0f1', // Cor de fundo clara
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7f0f1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 24,
    color: '#32620e', // Verde aplicado
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 32,
    color: '#32620e', // Verde aplicado
    fontWeight: 'bold',
    fontFamily: 'Cursive',
  },
  loginSection: {
    flex: 2,
    backgroundColor: '#32620e', // Fundo verde da seção de login
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#A4D5A5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#32620e',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 14,
  },
  signupLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
