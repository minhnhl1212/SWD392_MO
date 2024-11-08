import { ScrollView, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import styles from './login.style'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Provide a valid email address').required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    location: Yup.string().min(3, 'Provide a valid location address').required('Required'),
    username: Yup.string().min(3, 'Provide a valid username address').required('Required'),
})

const SignUp = () => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsecureText] = useState(false);

    const registerUser = async (values) => {
        setLoader(true);

        try {
            const data = values;
            const response = await axios.post('http://10.0.2.2:3000/api/register', data);

            if(response.status === 201) {
                navigation.replace('Login');
            }
        }
        catch (error) {
            console.log('Error registering user: ', error);
        } finally {
            setLoader(false);
        }
    }

    const inValidForm = () => {
        Alert.alert(
            "Invalid Form",
            "Please provide all required fields",
            [
                // { text: "Cancel", onPress: () => {} },
                { text: "Continue", onPress: () => { } },
                // { defaultIndex: 1 }
            ]
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ marginHorizontal: 20 }}>
                <View>
                    <BackBtn onPress={() => navigation.goBack()} />

                    <Image
                        source={require('../assets/images/bk.png')}
                        style={{ height: SIZES.height/5,
                            width: SIZES.width-60,
                            resizeMode: 'contain',
                            marginBottom: SIZES.xxLarge }}
                    />

                    <Text style={styles.title}>Unlimited Electric Components</Text>

                    <Formik
                        initialValues={{ email: '', password: '', location: '', username: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            registerUser(values);
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched, touched }) => (
                            <View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Username</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons
                                            name='face-man-profile'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.iconStyle}
                                        />

                                        <TextInput
                                            placeholder='Username'
                                            onFocus={() => setFieldTouched('username')}
                                            onBlur={() => setFieldTouched('username', '')}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ flex: 1 }}
                                        />
                                    </View>

                                    {touched.username && errors.username && <Text style={styles.errorMessage}>{errors.username}</Text>}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
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
                                    <Text style={styles.label}>Location</Text>
                                    <View style={styles.inputWrapper(touched.location ? COLORS.secondary : COLORS.offwhite)}>
                                        <Ionicons
                                            name='location-outline'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.iconStyle}
                                        />

                                        <TextInput
                                            placeholder='Enter your location'
                                            onFocus={() => setFieldTouched('location')}
                                            onBlur={() => setFieldTouched('location', '')}
                                            value={values.location}
                                            onChangeText={handleChange('location')}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ flex: 1 }}
                                        />
                                    </View>

                                    {touched.location && errors.location && <Text style={styles.errorMessage}>{errors.location}</Text>}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Password</Text>
                                    <View style={styles.inputWrapper(touched.password ? COLORS.secondary : COLORS.offwhite)}>
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

                                <Button loader={loader} title={"SIGN UP"} onPress={isValid ? handleSubmit : inValidForm} isValid={isValid} />
                            </View>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp