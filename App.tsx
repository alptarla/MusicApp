import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksScreen from "./screens/BookmarksScreen";
import MusicListScreen from "./screens/MusicListScreen";
import Icon from "@expo/vector-icons/MaterialIcons";
import MusicProvider from "./context/MusicProvider";

const Tab = createBottomTabNavigator();

const renderIcon = (iconName: any) => {
  return ({ size, color }: { size: number; color: string }) => (
    <Icon
      name={iconName}
      size={size}
      color={color}
    />
  );
};

const App = () => {
  return (
    <MusicProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: renderIcon("music-video"),
              tabBarLabel: "Music List",
            }}
            name="MusicList"
            component={MusicListScreen}
          />
          <Tab.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{
              tabBarIcon: renderIcon("collections-bookmark"),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MusicProvider>
  );
};

export default App;
