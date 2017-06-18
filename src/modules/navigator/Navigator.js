import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ThreadNavContainer from '../chat/chatMain/ThreadNavContainer';
import ThreadDetailViewContainer from '../chat/chatDetail/ThreadDetailViewContainer';
import ContactNavContainer from '../contacts/contactMain/ContactNavContainer';
import ContactDetailViewContainer from '../contacts/contactDetail/ContactDetailViewContainer';
import SettingsNavContainer from '../settings/SettingsNavContainer';
import ConnectNavContainer from '../connect/connectMain/ConnectNavContainer';
import ConnectDetailViewContainer from '../connect/connectDetail/ConnectDetailViewContainer';


// const headerColor = 'rgb(20,152,255)';
const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
// here roots are defined
export const MainScreenNavigator = TabNavigator({
  Chat: {screen: ConnectNavContainer},
  Connect: {screen: ThreadNavContainer},
  Contacts : {screen: ContactNavContainer},
  Settings : {screen: SettingsNavContainer}, }, {
  // Settings : {screen: SettingsNavContainer}, }, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Zuerkl',
  header: {
    titleStyle: {color: 'white'},
    style: {
      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ConnectNavContainer},
  ThreadDetailViewContainer: {screen: ThreadDetailViewContainer},
  ConnectDetail : {screen: ConnectDetailViewContainer},
  ContactDetail : {screen: ContactDetailViewContainer},
});

export default AppNavigator;
