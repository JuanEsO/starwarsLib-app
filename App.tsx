import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from './src/Navigators/Bottomtab';
// import DetailsStack from './src/Navigators/DetailsStack';
import DetailsScreen from './src/screens/Details';
import AppWrapper from './src/components/AppWrapper';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <AppWrapper>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bottomtab" component={Bottomtab} />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </AppWrapper>
    );
}

export default App;
