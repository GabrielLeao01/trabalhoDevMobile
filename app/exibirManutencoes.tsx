import carrosUsuarioRepository from '@/src/database/carrosUsuarioRepository';
import manutencoesRepository from '@/src/database/manutencoesRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../src/styles/styleExibirManutencoes";

type Manutencao = {
  carro_id?: number;
  quilometragem: number;
  prioridade: number;
  descricao: string;
};

export default function ExibirManutencoes() {
  const { id } = useLocalSearchParams();
  const [manutencoes, setManutencoes] = useState<Manutencao[]>([]);
  const [loading, setLoading] = useState(true);
  const [novaQuilometragem, setNovaQuilometragem] = useState<string>("");


  const repo = new manutencoesRepository();

  const prioridadeColor = (p: number) => {
    switch (p) {
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
      default:
        return "gray";
    }
  };
  

  useEffect(() => {
    if (!id) return;

    async function buscarManutencoes() {
      try {
        const manutencoesList = await repo.all(Number(id));
        setManutencoes(manutencoesList);
      } catch (error) {
        console.error("Erro ao buscar manutenções:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarManutencoes();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando manutenções...</Text>
      </View>
    );
  }

 const handleAtualizarQuilometragem = async () => {
    if (!novaQuilometragem || isNaN(Number(novaQuilometragem))) {
      Alert.alert("Erro", "Digite uma quilometragem válida.");
      return;
    }
    try {
      const repoCarro = new carrosUsuarioRepository();
      const carroUsuarioId = Number(id);
      const sucesso = await repoCarro.updateQuilometragem(carroUsuarioId, Number(novaQuilometragem));
      if (sucesso) {
        Alert.alert("Sucesso", "Quilometragem atualizada.");
        setNovaQuilometragem("");
        // Atualiza a lista de manutenções (ou recarrega dados)
        const manutencoesList = await repo.all(carroUsuarioId);
        setManutencoes(manutencoesList);
      } else {
        Alert.alert("Erro", "Não foi possível atualizar a quilometragem.");
      }
    } catch (error) {
      console.error("Erro ao atualizar quilometragem:", error);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar.");
    }
  };
 const handleDeletarCarro = async () => {
  try {
    const usuarioId = await AsyncStorage.getItem('usuario_id');
    if (!usuarioId) {
      Alert.alert("Erro", "Usuário não encontrado.");
      return;
    }

    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir este carro? Esta ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            const repoCarro = new carrosUsuarioRepository();
            const sucesso = await repoCarro.deleteCarro(Number(id));
            if (sucesso) {
              Alert.alert("Carro excluído com sucesso");
              router.replace('/exibeVeiculos');
            } else {
              Alert.alert("Erro", "Não foi possível excluir o carro.");
            }
          },
        },
      ]
    );
  } catch (error) {
    console.error("Erro ao deletar carro:", error);
    Alert.alert("Erro", "Ocorreu um erro ao tentar excluir o carro.");
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { color: "#fff" }]}>Manutenções do veículo</Text>
      {manutencoes.length === 0 && (
        <Text style={{ color: "#fff", fontSize: 18 }}>Não há manutenções cadastradas.</Text>
      )}
      {manutencoes.map((m, i) => (
        <View
          key={i}
          style={[styles.item, { borderColor: prioridadeColor(m.prioridade) }]}
        >
            <Text style={{ color: "#fff" }}>
            <Text style={[styles.label, { color: "#fff" }]}>Quilometragem:</Text> {m.quilometragem} km
            </Text>
            <Text style={{ color: "#fff" }}>
            <Text style={[styles.label, { color: "#fff" }]}>Descrição:</Text> {m.descricao}
          </Text>
          <Text>
            <Text style={[styles.label, { color: "#fff" }]}>Prioridade:</Text>{" "}
            <Text
              style={{
                color: prioridadeColor(m.prioridade),
                fontWeight: "bold",
              }}
            >
              {m.prioridade === 1
                ? "Alta"
                : m.prioridade === 2
                ? "Média"
                : m.prioridade === 3
                ? "Baixa"
                : "Desconhecida"}
            </Text>
          </Text>
        </View>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Nova quilometragem"
        keyboardType="numeric"
        value={novaQuilometragem}
        onChangeText={setNovaQuilometragem}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleAtualizarQuilometragem}
      >
        <Text style={styles.buttonText}>Atualizar Quilometragem</Text>
      </TouchableOpacity>
     <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
          alignItems: 'center'
        }}
        
        onPress={handleDeletarCarro}>
       <Text style={{ color: '#fff', fontWeight: 'bold' }}>Excluir Carro</Text>
     </TouchableOpacity>
      
    </ScrollView>
  );
}

