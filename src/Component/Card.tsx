import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { coffeeItems } from "../data";
import CoffeeCard from "./coffeeCard";
const { width, height } = Dimensions.get("window");

const CardScreen = () => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}
    >
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={coffeeItems}
        renderItem={({ item }) => <CoffeeCard item={item} />}
        firstItem={1}
        loop={true}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        sliderWidth={width}
        loopClonesPerSide={8}
        itemWidth={width * 0.63}
        slideStyle={{
          display: "flex",
          alignItems: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({});
