import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeContainer from "../../screens/Home/HomeContainer";
import FavouritesContainer from "../../screens/Favourites/FavouritesContainer";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Photo") {
              iconName = "camera-outline";
            } else if (route.name === "Favourites") {
              iconName = "heart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Photo" component={HomeContainer} />
        <Tab.Screen name="Favourites" component={FavouritesContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
