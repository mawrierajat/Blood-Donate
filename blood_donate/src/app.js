import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
//import {AppRoutes} from './config/navigation/routesBuilder';
import * as Screens from './screens';
//import {bootstrap} from './config/bootstrap';
//import track from './config/analytics';
import {data} from './data';
//import {AppLoading, Font} from 'expo';
import {View, Text,StyleSheet} from "react-native";

//bootstrap();
//data.populateData();

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}
//
//let SideMenu = withRkTheme(Screens.SideMenu);
const KittenApp = StackNavigator({
  First: {
    screen: Screens.WalkthroughScreen
  }
//  ,
//  Home: {
//    screen: DrawerNavigator({
//        ...AppRoutes,
//      },
//      {
//        drawerOpenRoute: 'DrawerOpen',
//        drawerCloseRoute: 'DrawerClose',
//        drawerToggleRoute: 'DrawerToggle',
//        contentComponent: (props) => <SideMenu {...props}/>
//      })
//  }
}, {
  headerMode: 'none',
});
//
export default class App extends React.Component {
//  state = {
//    loaded: false
//  };
//
//  componentWillMount() {
//    this._loadAssets();
//  }
//
//  _loadAssets = async() => {
//    await Font.loadAsync({
//      'fontawesome': require('./assets/fonts/fontawesome.ttf'),
//      'icomoon': require('./assets/fonts/icomoon.ttf'),
//      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
//      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
//    });
//    this.setState({loaded: true});
//  };

  render() {
//    if (!this.state.loaded) {
//      return <AppLoading />;
//    }

    return (
       <View style={{flex: 1}}>
               <KittenApp
                 onNavigationStateChange={(prevState, currentState) => {
                   const currentScreen = getCurrentRouteName(currentState);
                   const prevScreen = getCurrentRouteName(prevState);}}/>
             </View>

//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit App.js
//        </Text>
//      </View>

//     <View style={styles.screen}>
//        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
//          <Walkthrough1/>
//          <Walkthrough2/>
//        </Walkthrough>
//        <PaginationIndicator length={2} current={this.state.index}/>
//        <GradientButton
//          rkType='large'
//          style={styles.button}
//          text="GET STARTED"
//          onPress={() => {
//            this.props.navigation.goBack()
//          }}/>
//      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//let styles = RkStyleSheet.create(theme => ({
//  screen: {
//    backgroundColor: theme.colors.screen.base,
//    paddingVertical: 28,
//    alignItems: 'center',
//    flex: 1,
//  },
//  button: {
//    marginTop: 25,
//    marginHorizontal: 16,
//  }
//}));

//Expo.registerRootComponent(App);
