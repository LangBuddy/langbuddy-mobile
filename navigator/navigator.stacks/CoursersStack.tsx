import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorData } from "../navigator.constants";
import { NavigatorElements } from "../navigator.elements";
import { theme } from "styles/theme";

const Stack = createNativeStackNavigator();

export const CoursersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorData.CoursersScreen}
      screenOptions={{
        headerStyle: { backgroundColor: theme.darkViolet },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name={NavigatorData.CoursersScreen}
        component={NavigatorElements[NavigatorData.CoursersScreen]}
        options={{ title: "Курсы" }}
      />
    </Stack.Navigator>
  );
};
