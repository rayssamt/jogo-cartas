import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { getCards } from "../../services/axiosClient";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";



const Game = ({ route }) => {

  const navigation = useNavigation();

  const { deckId } = route.params;
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const get = async () => {
      const deck = await getCards(deckId, 3);
      setCards(deck);

      //console.log(deck)
    };
    get();
  }, []);

  const verificar = () => {
    {
      cards && cards.cards.map((card) => {

        if (card.value === "KING" && card.value === "ACE") {
          return alert("You almost tricked me! But you lost!")
        } //não está funcionando 
        
        if (card.value === "KING") {
          return alert("Victory! You are the King now!")
        }

        if (card.value === "ACE") {
          return alert("HAHAHA Got you!")
        }
     
      })

    }
  }

  const nav = () => {
    navigation.navigate("Home");
  }

  setTimeout(function () {
    nav()
  }, 3000);


  return (
    <View style={style.viewCartas}>
      {cards && cards.cards.map((card, index) => <Image key={index} source={{ uri: card.image }} style={style.cartas} />)}
      {verificar()}
    </View>
  );
};

export default Game;