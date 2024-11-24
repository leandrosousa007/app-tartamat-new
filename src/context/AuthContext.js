import { createContext, useState, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configuração do Google Signin
GoogleSignin.configure({
  webClientId:
    '438872457138-miq1lm1c3cue420bg81k8erkqd9o3cij.apps.googleusercontent.com',
});

// Funções de autenticação
const onLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

const onLogout = async () => {
  await GoogleSignin.signOut();
};

// Contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [contadorAcertos, setContadorAcertos] = useState(0);
  const [contadorFeitos, setContadorFeitos] = useState(0);
  const [porcentagem, setPorcentagem] = useState("0.00"); 

useEffect(() => {
  if (contadorFeitos > 0) {
    setPorcentagem(((contadorAcertos * 100) / contadorFeitos).toFixed(1));
  } else {
    setPorcentagem("0.00"); 
  }
}, [contadorAcertos, contadorFeitos]); 


  const login = async () => {
    const user = await onLogin();
    console.log(user);
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await onLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        contadorAcertos,
        setContadorAcertos,
        contadorFeitos,
        setContadorFeitos,
        porcentagem,
        setPorcentagem
      }}>
      {children}
    </AuthContext.Provider>
  );
};
