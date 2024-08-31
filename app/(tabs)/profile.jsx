import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getUserPosts } from "../../lib/appwrite";
import useAppWrite from "../../lib/useAppwrite";
import { icons } from "../../constants";

const Profile = () => {
  const { query } = useLocalSearchParams();
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppWrite(() => getUserPosts(user.$id));

  const logout = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary-100 rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%]  h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Video Found"
            subtitle="No Video found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
