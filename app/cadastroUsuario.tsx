import usuarioRepository from '@/src/database/usuarioRepository';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../src/styles/styleCadastroUsuario';
export default function CadastroUsuario() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    if (!email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const novoUsuario = {
        email,
        senha 
      };
      
      const id = await usuarioRepository.create(novoUsuario);
      
      if (id) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
          { 
            text: 'OK', 
            onPress: () => router.back() 
          }
        ]);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Falha ao cadastrar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Cadastro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha (mínimo 6 caracteres)"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleCadastro}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}