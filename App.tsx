import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from './screens/PokedexScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} options={{ title: 'Detalhes do Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}