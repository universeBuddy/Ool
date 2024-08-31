import React, { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";




const SerachInput = ({initialQuery}) => {

  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');


  return (
    <View className="border-2 border-black-200 w-full h-14 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Serach for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SerachInput;
