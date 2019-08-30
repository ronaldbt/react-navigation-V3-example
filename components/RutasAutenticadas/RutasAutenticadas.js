import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Add from './Add';
import Search from './Search';
import Follow from './Follow';
import Profile from './Profile';
 
const RutasAutenticadas = createBottomTabNavigator({
 
    Home:{
        screen: Home,
    },
    Search: {
        screen: Search,
    },
    Add:{
        screen: Add,
    },
    Follow: {
        screen: Follow,
    },
    Profile:{
        screen: Profile,
    }
});
 
export default createAppContainer(RutasAutenticadas);   