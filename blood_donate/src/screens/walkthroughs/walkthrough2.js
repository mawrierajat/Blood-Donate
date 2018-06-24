import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Walkthrough2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {width} = Dimensions.get('window');
    let image = RkTheme.current.name === 'light'
      ? <Image style={{width}} source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}/>
      : <Image style={{width}} source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}/>;

    return (
      <View style={styles.screen}>
        {image}
        <RkText rkType='header2' style={styles.text}>Walkthrough 2nd Page</RkText>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 30
  }
}));