import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from "react-native";
import React, { ReactNode } from "react";
import { themeColors } from "../theme";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function CoffeeCard({ item }: any) {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: ios ? height * 0.4 : height * 0.5,
        width: width * 0.65,
        justifyContent: "center",
      }}
    >
      <Text>{item.name}</Text>
      <View>
        <View>
          <View
            style={{
              shadowColor: "black",
              shadowRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 0, height: 40 },
              shadowOpacity: 0.8,
            }}
          >
            <Image
              source={item.image}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
          <View style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
            <Text>{item.stars}</Text>
          </View>
          <View>
            <Text>Volume</Text>
            <Text> {item.volume}</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: ios ? themeColors.bgDark : "transparent",
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
        >
          <Text>$ {item.price}</Text>
        </View>
      </View>
    </View>
  );
}
