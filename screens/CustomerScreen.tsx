import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamsList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: "#59C1CC",
      }}
    >
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
    </ScrollView>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({});
