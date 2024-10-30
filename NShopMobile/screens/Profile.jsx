import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './profile.style'
import { COLORS } from '../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = ({navigation}) => {
  const [useData, setUseData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);
  
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Logout", onPress: () => navigation.navigate('Login') },
        // { defaultIndex: 1 }
      ]
    )
  }

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all data on your device?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Continue", onPress: () => console.log("Clear Cache Pressed") },
        // { defaultIndex: 1 }
      ]
    )
  }

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Continue", onPress: () => console.log("Delete Account Pressed") },
        // { defaultIndex: 1 }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profile}
          />
          <Text style={styles.name}> 
            {/* {userLogin === true ? useData.name : 'Please login into your account'} */}
            {userLogin === true ? "username" : 'Please login into your account'}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N     </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>username@email.com     </Text>
            </View>
          )}

          {userLogin === false ? (
            <View style={styles.loginBtn}>
            </View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="heart-outline" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="truck-delivery-outline" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons name="bag" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="cached" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="deleteuser" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile
