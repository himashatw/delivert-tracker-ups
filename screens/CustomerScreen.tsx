import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const CustomerScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Hello Tailwind
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({});
