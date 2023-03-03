
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Diseases } from './component/diseases';
import { Heart } from './component/heart';
import { Pressure } from './component/pressure';
import { Diabetes } from './component/diabetes';
import { Hepatitis } from './component/hepatitis';
import { Kidney } from './component/kidney';
import { StyleSheet } from 'react-native';
import { Products } from './component/products';
import { Fruits } from './component/fruits';
import { Herbles } from './component/herbles';
import { Meats } from './component/meats';
import { Milks } from './component/milks';
import { Vegetable } from './component/vegetables';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    

      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Fruits" component={Fruits}/>
        <Stack.Screen name="Herbles" component={Herbles} />
        <Stack.Screen name="Meats" component={Meats} />
        <Stack.Screen name="Milks" component={Milks} />
        <Stack.Screen name="Vegetable" component={Vegetable}/>


          <Stack.Screen name="Diseases" component={Diseases} />
          <Stack.Screen name="Heart" component={Heart} />
          <Stack.Screen name="Pressure" component={Pressure} />
          <Stack.Screen name="Diabetes" component={Diabetes} />
          <Stack.Screen name="Hepatitis C" component={Hepatitis} />
          <Stack.Screen name="Kidney" component={Kidney} />
          
        </Stack.Navigator>
      </NavigationContainer>
     




   
  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:"white"
  },


});
