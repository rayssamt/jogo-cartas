import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { getDeckId } from "../../services/axiosClient";


const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    navigation.navigate("Game", {
      deckId: idDeck,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KINGSLAYER</Text>
      <Text style={styles.texto}>REGRAS DO JOGO: Ao iniciar a partida, você tira 3 cartas.
        Se você tirar King, você vence, se tirar Ás, você perde.</Text>

      <Image source={require('../../imagens/king.jpg')} style={{ width: "110%", height: "50%", marginBottom: "15%" }} />

      <TouchableOpacity style={styles.button} onPress={inciarPartida}><Text>Iniciar Partida</Text></TouchableOpacity>

    </View>
  );
};

export default Home;