import { View, Text, Image } from "react-native";
import React from "react";
import CustomButtom from './CustomButton'

import { images } from "../constants";
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty} 
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-1xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>


     <CustomButtom title="Create Video "
     handlePress={()=>router.push('/create')}
     containerStyles="w-full my-5" ></CustomButtom>
    </View>
  );
};

export default EmptyState;
