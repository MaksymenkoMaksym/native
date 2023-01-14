import * as Font from 'expo-font'
//LOAD FONTS
import * as SplashScreen from 'expo-splash-screen'
import Entypo from '@expo/vector-icons/Entypo'
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()
//== END LOAD FONTS
import { StatusBar } from 'expo-status-bar'

import { useCallback, useEffect, useState } from 'react'
import {
  StyleSheet, // create object with styles & can be outside of file APP.js
  Text, // same as <p></p> in html
  View, // same as <div></div> in htmlVG
  TextInput, // same as <input></input> in html
  KeyboardAvoidingView, // component which solve the problem overview keyboard above input
  Platform, // component which know on which platform open application  IOS or Android
  TouchableWithoutFeedback, //close keyboard on click anywhere outside of keyboard
  Keyboard,
  Alert, // make notification
  Button, // work as submit button
  ImageBackground, // load img as background
} from 'react-native'
import { BigButton } from '../components/BigButton/BigButton'

export default function LoginScreen() {
  const [loaded, error] = Font.useFonts({
    'Montserrat-Regulat': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
  })
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const [isSecured, setIsSecured] = useState(true)

  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false)
  const passwordHandler = (text) => setPassword(text)
  const mailHandler = (text) => setMail(text)
  const showSecuredData = () => {
    setIsSecured(!isSecured)
  }
  const onLogin = () => {
    console.log('Credentials', { mail, password })
  }
  const hideKeyBoard = () => {
    setIsOpenKeyboard(false)
    Keyboard.dismiss()
  }
  ////==FONTS
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  //==============

  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <View style={container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <ImageBackground
          style={background}
          source={require('../assets/bgReg.png')}
        >
          <View
            style={{ ...wrapperReg, paddingBottom: isOpenKeyboard ? 10 : 144 }}
          >
            <Text style={title}>Войти</Text>
            <View style={form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              >
                <TextInput
                  value={mail}
                  onChangeText={mailHandler}
                  onFocus={() => {
                    setIsOpenKeyboard(true)
                  }}
                  placeholder="Адрес электронной почты"
                  style={[input.input, input.space]}
                />

                <View
                  style={{
                    ...label.label,
                    marginBottom: isOpenKeyboard ? 16 : 43,
                  }}
                >
                  <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    onFocus={() => {
                      setIsOpenKeyboard(true)
                    }}
                    secureTextEntry={isSecured}
                    placeholder="Пароль"
                    style={input.input}
                  />
                  <Text style={label.text} onPress={showSecuredData}>
                    {isSecured ? 'Показать' : 'Спрятать'}
                  </Text>
                </View>

                <BigButton title={'Войти'} onPress={onLogin} />
              </KeyboardAvoidingView>
            </View>
            <Text style={login}>Нет аккаунта? Зарегистрироваться</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const container = StyleSheet.create({
  flex: 1,
  ...Platform.select({
    ios: {
      backgroundColor: '#efefef',
    },
    android: {
      backgroundColor: '#ededed',
    },
  }),
})
const background = StyleSheet.create({
  flex: 1,
  resizeMode: 'cover',
  alignItems: 'center',
  justifyContent: 'center',
})

const wrapperReg = StyleSheet.create({
  position: 'relative',

  backgroundColor: '#ffffff',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  width: '100%',

  paddingTop: 32,
  // paddingBottom: 66,
  marginTop: 'auto',

  alignItems: 'center',

  // paddingRight: 16,
  // paddingRight: 16,
  // maxHeight: 549,
  // flex: 0,
  // justifyContent: 'center',
})

const login = StyleSheet.create({
  width: 266,
  height: 19,

  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 16,
  lineHeight: 19,
  textAlign: 'center',

  color: '#1B4371',
})

const form = StyleSheet.create({})
const input = StyleSheet.create({
  // width: '100%',
  input: {
    width: 343,

    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 15,

    // marginHorizontal: 16,

    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#F6F6F6',
    borderColor: '#F6F6F6',
    borderRadius: 8,
    color: '#BDBDBD',
    // marginBottom: 16,
  },
  space: {
    marginBottom: 16,
  },
})

const title = StyleSheet.create({
  // width: 184,
  // height: 35,

  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: 30,
  lineHeight: 35,
  textAlign: 'center',
  letterSpacing: 0.16,
  color: '#212121',

  marginBottom: 33,
})

const label = StyleSheet.create({
  label: {
    position: 'relative',
    marginBottom: 43,
  },
  text: {
    position: 'absolute',
    top: 16,
    right: 16,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
})
