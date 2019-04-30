import React, { Component, useState, useEffect } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Orientation from "react-native-orientation";
export default (Reveal = ({ navigation }) => {
  const message = navigation.getParam("msg");
  const winner = navigation.getParam("winner");
  const [cards, setCards] = useState(message.split(" "));
  const [swipedAll, setSwipedAll] = useState(false);

  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card}</Text>
      </View>
    );
  };

  const onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  return (
    <View style={styles.container}>
      <Text>Final Winner is {winner.name}</Text>
      <Image borderRadius={100} source={winner.photo} />

      {swipedAll || (
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => onSwiped("general")}
          backgroundColor="black"
          onSwipedLeft={() => onSwiped("left")}
          onSwipedRight={() => onSwiped("right")}
          onSwipedTop={() => onSwiped("top")}
          onSwipedBottom={() => onSwiped("bottom")}
          onSwipedAll={() => setSwipedAll(true)}
          cards={cards}
          cardVerticalMargin={80}
          renderCard={renderCard}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    height: 500,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent"
  }
});