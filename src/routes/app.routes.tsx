import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Statistics } from '../screens/Statistics';
import { DetailsMeal } from '../screens/DetailsMeal';
import { EditMeal } from '../screens/EditMeal';
import { RegisterMeal } from '../screens/RegisterMeal';
import { SuccessRegister } from '../screens/SuccessRegister';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="DetailsMeal" component={DetailsMeal} />
      <Screen name="EditMeal" component={EditMeal} />
      <Screen name="RegisterMeal" component={RegisterMeal} />
      <Screen name="SuccessRegister" component={SuccessRegister} />
    </Navigator>
  )
}