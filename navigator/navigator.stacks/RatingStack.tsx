import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorData } from "../navigator.constants";
import { NavigatorElements } from "../navigator.elements";
import { theme } from "styles/theme";

const Stack = createNativeStackNavigator();

export const RatingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorData.RatingScreen}
      screenOptions={{
        headerStyle: { backgroundColor: theme.darkViolet },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name={NavigatorData.RatingScreen}
        component={NavigatorElements[NavigatorData.RatingScreen]}
        options={{ title: "Рэйтинг" }}
      />
    </Stack.Navigator>
  );
};
