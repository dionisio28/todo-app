import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from ".";

export interface IScreen {
    navigation: NativeStackNavigationProp<RootStackParamList, "Main">;
  }
  