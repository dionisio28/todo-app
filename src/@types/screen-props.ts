import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";

export interface ScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "Main">;
  }
  