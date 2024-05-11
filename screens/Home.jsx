// import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  // const [isMenuPressed, setIsMenuPressed] = useState(false);
  // const navigation = useNavigation();

  // const handleMenuPress = () => {
  //   setIsMenuPressed(!isMenuPressed);
  //   navigation.navigate("Menu");
  // };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            {/* <Pressable onPress={handleMenuPress}>
              <Ionicons
                name="menu"
                size={40}
                color={isMenuPressed ? COLORS.lightWhite : COLORS.gray2}
              />
            </Pressable> */}
            <Text style={styles.titleStyle}>ދިރިއުޅުން</Text>
          </View>
        </View>
      </View>
     <View style={styles.homeContent}>
     <ScrollView>
        <Carousel />
      </ScrollView>
      <ScrollView>
        <Welcome />
      </ScrollView>
     </View>
    </SafeAreaView>
  );
};

export default Home;
