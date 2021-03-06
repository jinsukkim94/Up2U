import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
  logo: {
    fontFamily: "Damion-Regular",
    fontSize: 70,
    color: "#efffee",
    shadowColor: "#44ff47",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo2: {
    shadowColor: "#44ff47",
    shadowOpacity: 0.8,
    shadowRadius: 0.1,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo5: {
    shadowColor: "#44ff47",
    shadowOpacity: 0.8,
    shadowRadius: 0.5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  },
  logo3: {
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 10
    }
  }
});
export default ({ name, onPress, children, size = 70 }) => {
  return (
    <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
      <View style={style.logo3}>
        <View style={style.logo2}>
          <View style={style.logo5}>
            <Text style={{ ...style.logo, fontSize: size }}>{name} </Text>
            {children}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
