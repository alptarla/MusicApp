import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookmarksScreen from "./screens/BookmarksScreen";
import MusicListScreen from "./screens/MusicListScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="MusicList"
          component={MusicListScreen}
        />
        <Tab.Screen
          name="Bookmarks"
          component={BookmarksScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
