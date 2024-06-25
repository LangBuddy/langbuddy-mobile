import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CoursersStack,
  ForumStack,
  ProfileStack,
  RatingStack,
} from "./navigator.stacks";
import { theme } from "styles/theme";

const Tab = createBottomTabNavigator();
export function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarInactiveBackgroundColor: theme.darkViolet,
          tabBarActiveBackgroundColor: theme.darkViolet,
          tabBarInactiveTintColor: theme.white,
          tabBarActiveTintColor: theme.paleMagenta,
        }}
      >
        <Tab.Screen
          name="CoursersStack"
          component={CoursersStack}
          options={{
            tabBarLabel: "Курсы",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="RatingStack"
          component={RatingStack}
          options={{
            tabBarLabel: "Рэйтинг",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ForumStack"
          component={ForumStack}
          options={{
            tabBarLabel: "Форум",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: "Профиль",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
