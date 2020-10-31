import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Map from './Map'
import App from './App'
const AppNavigator = createStackNavigator(
    {
        App,
        Map, 
    },

    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            header: null,
            headerForceInset: {top: 'never', bottom: 'never'}
        }
    }

);

export default createAppContainer(AppNavigator)