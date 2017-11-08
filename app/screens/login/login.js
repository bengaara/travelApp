import React from 'react';
import {
  View,
  Image,
  Keyboard,
  FlatList,
  Text
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/';
import {RkTheme} from 'react-native-ui-kitten';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';

export class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
    };

    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType='logo h0'>Travel App</RkText>
          <RkText rkType='light h1'>see the world</RkText>
          
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Email or Phone'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
            <GradientButton style={styles.save} rkType='large' text='LOGIN' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
          <View style={styles.textRow}>
              <RkText rkType='primary3'>Or sign in with:</RkText>
            </View>
          <FlatList horizontal={true} contentContainerStyle={styles.buttons}
        data={[
          <RkButton key='a' style={styles.button} rkType='social'>
             <RkText rkType='awesome hero accentColor'>{FontAwesome.twitter}</RkText>
           </RkButton>,
            <RkButton key='b' style={styles.button} rkType='social'>
            <RkText rkType='awesome hero accentColor'>{FontAwesome.google}</RkText>
          </RkButton>,
            <RkButton key='c' style={styles.button} rkType='social'>
            <RkText rkType='awesome hero accentColor'>{FontAwesome.facebook}</RkText>
          </RkButton>,
          <RkButton key='d' style={styles.button} rkType='social'>
          <RkText rkType='awesome hero accentColor'>{FontAwesome.instagram}</RkText>
        </RkButton>
         ]}
  renderItem={({item}) => item}
/>
    

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>@otosolutions 2017</RkText>
              <RkButton rkType='clear' >
                <RkText rkType='header6'>  </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: theme.colors.border.solid,
    marginHorizontal: 5
  },
  footer: {}
}));