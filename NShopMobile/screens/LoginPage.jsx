import { ScrollView, Text, View, TouchableOpacity, Image, TextInput, Alert, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import styles from './login.style'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Provide a valid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
})

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  // this field is for login with api
  const login = async (values) => {
    setLoader(true);

    try {
      const data = values;
      const response = await axios.post('http://10.0.2.2:3000/api/login', data);

      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData));
        await AsyncStorage.setItem('id', JSON.stringify(responseData._id));
        navigation.replace('Bottom Navigation');
      } else {
        Alert.alert(
          "Error logging in",
          "Please provide valid credentials",
          [
            // { text: "Cancel", onPress: () => {} },
            { text: "Continue", onPress: () => { } },
            // { defaultIndex: 1 }
          ]
        )
      }
    } catch (error) {
      Alert.alert(
        "Error ",
        "Error logging in, please try again",
        [
          // { text: "Cancel", onPress: () => {} },
          { text: "Continue", onPress: () => { } },
          // { defaultIndex: 1 }
        ]
      )
    } finally {
      setLoader(false);
    }
  }

  // const [responseData, setResponseData] = useState(null);
  // const [isLogin, setIsLogin] = useState(true);

  // const handleLoginGoogle = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://mynshop.nicewave-381a57d9.japaneast.azurecontainerapps.io/api/v1/auth/login?redirect=test'
  //     );

  //     // Handle successful response here
  //     if (response.status === 200) {
  //       // console.log('Login successful:', response.request.responseURL);
  //       if (isLogin === false) {
  //         await Linking.openURL("https://mynshop.nicewave-381a57d9.japaneast.azurecontainerapps.io/api/v1/auth/login?redirect=test");
  //         setIsLogin(true);
  //       } else {
  //         console.log('You are already logged in');
  //       }
  //     } else {
  //       console.log('Invalid or missing redirect URL in response data.');
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // }

  // const handle = async () => {
  //   try {
      
  //     const response = await axios.get("https://mynshop.nicewave-381a57d9.japaneast.azurecontainerapps.io/api/v1/auth/login?redirect=test");
     
  //     if (response.status >= 300 && response.status < 400 || response.status === 200) {
  //       const redirectUrl = response.headers.location;
  //       console.log(redirectUrl);
        
  //       const redirectedResponse = await axios.get(redirectUrl);
  //       console.log(redirectedResponse.data.access_token);
  //       console.log(redirectedResponse.data.access_token_exp);
  //     } else {
  //       console.log(response.status); // Handle non-redirect response if needed
  //     }
  //     // console.log(response.data.access_token);
  //     // console.log(response.data.access_token_exp);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // handle();


  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const config = {
    androidClientId: '627534193940-dr3unenb7a3f86catsnlglj1jm7j1pc9.apps.googleusercontent.com',
    // webClientId: '627534193940-4hinpjdbi0jkrqjngue3h2lm9r6kfll4.apps.googleusercontent.com',
    // redirectUri:
    //   AuthSession.makeRedirectUri({
    //         scheme: 'my-scheme',
    //         path: 'redirect',
    //       }),
    responseType: 'code',
    ...{useProxy: false}
  };

  const [request, response, promptAsync] = Google.useAuthRequest(config);
  
  WebBrowser.maybeCompleteAuthSession();
  
  useEffect(() => {
    console.log("response: ", response);
    if (response?.type === 'success') {
      setAccessToken(response.params.access_Token);
      console.log("access token: ", response.authentication.accessToken, response.params.access_Token);
    }
  }, [response]);

  const getUserData = async () => {
    let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  getUserData();

  // console.log("user info: ", userInfo);
  


  //console.log the access token and access token expiration
  // console.log("access token: ", response?.authentication?.accessToken);
  // console.log("access token exp: ", response?.authentication?.accessTokenExpirationDate);

  // const getUserInfo = async (token) => {
  //   //absent token
  //   if (!token) return;
  //   //present token
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     const user = await response.json();
  //     //store user information  in Asyncstorage
  //     await AsyncStorage.setItem("user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {
  //     console.error(
  //       "Failed to fetch user data:",
  //       response.status,
  //       response.statusText
  //     );
  //   }
  // };

  // const signInWithGoogle = async () => {
  //   try {
  //     // Attempt to retrieve user information from AsyncStorage
  //     const userJSON = await AsyncStorage.getItem("user");
  
  //     if (userJSON) {
  //       // If user information is found in AsyncStorage, parse it and set it in the state
  //       setUserInfo(JSON.parse(userJSON));
  //     } else if (response?.type === "success") {
  //       // If no user information is found and the response type is "success" (assuming response is defined),
  //       // call getUserInfo with the access token from the response
  //       getUserInfo(response.authentication.accessToken);
  //     }
  //   } catch (error) {
  //     // Handle any errors that occur during AsyncStorage retrieval or other operations
  //     console.error("Error retrieving user data from AsyncStorage:", error);
  //   }
  // };
  
  // //add it to a useEffect with response as a dependency 
  // useEffect(() => {
  //   signInWithGoogle();
  // }, [response]);
  
  // //log the userInfo to see user details
  // console.log(JSON.stringify(userInfo));

  const inValidForm = () => {
    Alert.alert(
      "Invalid Form",
      "Please provide all required fields",
      [
        // { text: "Cancel", onPress: () => {} },
        { text: "Continue", onPress: () => {} },
        // { defaultIndex: 1 }
      ]
    )
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()}/>

          <Image
            source={require('../assets/images/bk.png')}
            style={styles.cover}
          />

          <Text style={styles.title}>Unlimited Electric Components</Text>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
                    <MaterialCommunityIcons
                      name='email-outline'
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput 
                      placeholder='Enter your email'
                      onFocus={() => setFieldTouched('email')}
                      onBlur={() => setFieldTouched('email', '')}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>

                  {touched.email && errors.email && <Text style={styles.errorMessage}>{errors.email}</Text>}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
                    <MaterialCommunityIcons
                      name='lock-outline'
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />

                    <TextInput 
                      secureTextEntry={obsecureText}
                      placeholder='Password'
                      onFocus={() => setFieldTouched('password')}
                      onBlur={() => setFieldTouched('password', '')}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
                      <MaterialCommunityIcons
                        name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                        size={20}
                        color={COLORS.gray}
                      />
                    </TouchableOpacity>

                  </View>

                  {touched.password && errors.password && <Text style={styles.errorMessage}>{errors.password}</Text>}
                </View>

                <Button loader={loader} title={"LOGIN"} onPress={isValid ? handleSubmit : inValidForm } isValid={isValid}/>
              </View>
            )}
          </Formik>

          {/* <Button title={"LOGIN WITH GOOGLE"} onPress={() => handleLoginGoogle()} isValid={true} /> */}

          <Button loader={false} title={"LOGIN WITH GOOGLE"} onPress={() => promptAsync()} isValid={true} />
          
          <Text style={styles.registration} onPress={() => navigation.navigate('SignUp')}>Register</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage