import usuarioRepository from '@/src/database/usuarioRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../src/styles/styleIndex';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);

    try {
      const usuarios = await usuarioRepository.all();

      const usuarioEncontrado = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );

      if (usuarioEncontrado) {
        await AsyncStorage.setItem('usuario_id', usuarioEncontrado.id.toString());

        Alert.alert('Sucesso', 'Login realizado com sucesso!', [
          {
            text: 'OK',
            onPress: () => router.replace('/exibeVeiculos')
          }
        ]);
      } else {
        Alert.alert('Erro', 'Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      Alert.alert('Erro', 'Falha ao tentar fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
  
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>VrumTech</Text>
      </View>
  
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
  
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
  
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.createAccountButton} onPress={() => router.push('/cadastroUsuario')}>
        <Text style={styles.createAccountText}>Cadastrar</Text>
      </TouchableOpacity>
  
    </View>
  </View>

  );
}
