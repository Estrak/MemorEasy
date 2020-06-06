import { createAppContainer , createStackNavigator} from 'react-navigation';
import { FirstScreen } from '../screens/pageAccueil';

const StackNavigator = createStackNavigator({
  FirstScreen: {
    Screen: FirstScreen,
    navigationOptions: {
      title: "Rechercher"
    }
  }
});

export default createAppContainer(StackNavigator);
