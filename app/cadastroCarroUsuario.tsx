import carrosRepository, { carros } from '@/src/database/carrosRepository';
import carrosUsuarioRepository, { carrosUsuario } from '@/src/database/carrosUsuarioRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../src/styles/stylecadastroCarroUsuario';

const repoCarros = new carrosRepository();
const repoCarrosUsuario = new carrosUsuarioRepository();

export default function CadastroCarroUsuario() {
  const [carros, setCarros] = useState<carros[]>([]);
  const [selectedCarroId, setSelectedCarroId] = useState<number | null>(null);
  const [quilometragem, setQuilometragem] = useState('');
  const [loading, setLoading] = useState(false);
  const [usuarioId, setUsuarioId] = useState<number | null>(null);

  useEffect(() => {
    const carregarCarros = async () => {
      try {
        const listaCarros = await repoCarros.all();
        setCarros(listaCarros);
        if (listaCarros.length > 0) {
          setSelectedCarroId(listaCarros[0].carro_id ?? null);
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os carros');
        console.error(error);
      }
    };

    const buscarUsuarioId = async () => {
      try {
        const id = await AsyncStorage.getItem('usuario_id');
        if (id) {
          setUsuarioId(Number(id));
        } else {
          Alert.alert('Erro', 'Usuário não encontrado. Faça login novamente.');
          router.replace('/');
        }
      } catch (error) {
        Alert.alert('Erro', 'Falha ao buscar o usuário');
        console.error(error);
      }
    };

    carregarCarros();
    buscarUsuarioId();
  }, []);

  const handleSalvar = async () => {
    if (!usuarioId) {
      Alert.alert('Erro', 'Usuário não encontrado.');
      return;
    }

    if (!selectedCarroId) {
      Alert.alert('Erro', 'Selecione um carro');
      return;
    }

    const kmNum = parseInt(quilometragem, 10);
    if (isNaN(kmNum) || kmNum < 0) {
      Alert.alert('Erro', 'Quilometragem inválida');
      return;
    }

    setLoading(true);

    try {
      const carroUsuario: carrosUsuario = {
        usuario_id: usuarioId,
        carro_id: selectedCarroId,
        quilometragem: kmNum,
      };

      await repoCarrosUsuario.create(carroUsuario);
      Alert.alert('Sucesso', 'Carro vinculado ao usuário com sucesso!', [
        { text: 'OK', onPress: () => router.back() }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vincular Carro ao Usuário</Text>

      <Text style={styles.label}>Selecione o Carro:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCarroId}
          onValueChange={(itemValue) => setSelectedCarroId(itemValue)}
          mode="dropdown"
          style={Platform.OS === 'ios' ? styles.pickerIOS : styles.pickerAndroid}
        >
          {carros.map((carro) => (
            <Picker.Item
              key={carro.carro_id}
              label={`${carro.marca} ${carro.modelo} (${carro.ano})`}
              value={carro.carro_id}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Quilometragem Atual:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a quilometragem"
        keyboardType="numeric"
        value={quilometragem}
        onChangeText={setQuilometragem}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSalvar}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Salvar'}</Text>
      </TouchableOpacity>
    </View>
  );
}
