import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorData } from "../navigator.constants";
import { NavigatorElements } from "../navigator.elements";
import { theme } from "styles/theme";

const Stack = createNativeStackNavigator();

export const ForumStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorData.ForumScreen}
      screenOptions={{
        headerStyle: { backgroundColor: theme.darkViolet },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name={NavigatorData.ForumScreen}
        component={NavigatorElements[NavigatorData.ForumScreen]}
        options={{ title: "Форум" }}
      />
    </Stack.Navigator>
  );
};
