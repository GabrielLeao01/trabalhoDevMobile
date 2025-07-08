import carrosUsuarioRepository from '@/src/database/carrosUsuarioRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../src/styles/styleVeiculos';

const repo = new carrosUsuarioRepository();

export default function ExibeVeiculos() {
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const carregarVeiculos = async (usuarioId: number) => {
    setLoading(true);

    try {
      const listaVeiculos = await repo.allByUsuarioId(usuarioId);

      setVeiculos(listaVeiculos);
    } catch (error) {
      console.error('Erro ao carregar veículos:', error);
      Alert.alert('Erro', 'Não foi possível carregar os veículos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const buscarUsuarioId = async () => {
      try {
        const id = await AsyncStorage.getItem('usuario_id');
        if (id) {
          await carregarVeiculos(Number(id));
        } else {
          Alert.alert('Erro', 'Usuário não encontrado. Faça login novamente.');
          router.replace('/'); 
        }
      } catch (error) {
        console.error('Erro ao buscar ID do usuário:', error);
        Alert.alert('Erro', 'Falha ao buscar usuário.');
      }
    };

    buscarUsuarioId();
  }, []);

  const handleCadastrarVeiculo = () => {
    router.push('/cadastroCarroUsuario');
  };

  const handleAbrirManutencoes = (veiculoId: number) => {
    router.push({ pathname: '/exibirManutencoes', params: { id: veiculoId.toString() } });
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('usuario_id');
      router.replace('/'); // Redireciona para a tela de login
    } catch (error) {
      Alert.alert('Erro', 'Falha ao tentar sair');
      console.error(error);
    }
  };

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Seus Veículos</Text>

    {loading ? (
      <Text>Carregando...</Text>
    ) : veiculos.length === 0 ? (
      <>
        <Text style={styles.noCarMessage}>Você não possui nenhum carro cadastrado.</Text>
        <TouchableOpacity style={styles.button} onPress={handleCadastrarVeiculo}>
          <Text style={styles.buttonText}>Cadastrar Novo Carro</Text>
        </TouchableOpacity>
      </>
    ) : (
      <>
        <ScrollView style={styles.scrollContainer}>
          {veiculos.map((veiculo) => (
            <TouchableOpacity
              key={veiculo.id}
              style={styles.carButton}
              onPress={() => handleAbrirManutencoes(veiculo.id)}
            >
              <Text style={styles.carButtonText}>
                {veiculo.marca} - {veiculo.modelo} ({veiculo.quilometragem} km)
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleCadastrarVeiculo}>
          <Text style={styles.buttonText}>Cadastrar Novo Carro</Text>
        </TouchableOpacity>
      </>
    )}

    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutButtonText}>Sair</Text>
    </TouchableOpacity>
  </View>
);
}
