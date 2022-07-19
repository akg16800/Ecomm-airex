import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
// import { Button } from "react-native-paper";
import axios from "axios";
import { AuthenticationContext } from "../../services/favourites/authentication-context";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState();

  const [message, setMessage] = useState();
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  const { userInfo, isLogged, promptAsync } = useContext(AuthenticationContext);

  // console.log(userInfo);

  const google = async () => {
    await axios
      .get("http://192.168.0.198:3000/auth")
      .then((r) => {
        console.log(r.data);
        // window.location.href = r.data;
        Linking.openURL(r.data);
      })
      .catch((err) => console.log(err));
  };
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "117880214700-ues8lsphvmi0rm6apg3mgkl8bfre8818.apps.googleusercontent.com",
  //   webClientId:
  //     "117880214700-d5cmqlvpieaic80ophin8k5adhdn1pb4.apps.googleusercontent.com",
  //   expoClientId:
  //     "117880214700-4r76n91t6km0f439ohf8timdcg3t1ftq.apps.googleusercontent.com",
  // });

  useEffect(() => {
    // GoogleSignin.configure({
    //   scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    //   webClientId:
    //     "117880214700-d5cmqlvpieaic80ophin8k5adhdn1pb4.apps.googleusercontent.com",
    // });
    // _isSignedIn();
  }, []);

  // const _isSignedIn = async () => {
  //   const _isSignedIn = await GoogleSignin.isSignedIn();

  //   if (_isSignedIn) {
  //     alert("user already signed in");
  //     _getCurrentUserInfo();
  //   } else {
  //     console.log("please login");
  //   }
  //   setGettingLoginStatus(false);
  // };

  // const _getCurrentUserInfo = async () => {
  //   try {
  //     let info = await GoogleSignin.signInSilently();
  //     console.log("user info---->", info);
  //     setUserInfo(info);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       alert("User has not signed in yet");
  //       console.log("User has not signed in yet");
  //     } else {
  //       alert("Unable to get user's info");
  //       console.log("Unable to get user's info");
  //     }
  //   }
  // };
  // const _signIn = async () => {
  //   try {
  //     // await GoogleSignin.hasPlayServices({
  //     //   showPlayServicesUpdateDialog: true,
  //     // });
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("User Info --> ", userInfo);
  //     setUserInfo(userInfo);
  //   } catch (error) {
  //     console.log("Message", JSON.stringify(error));
  //     // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //     //   alert("User Cancelled the Login Flow");
  //     // }
  //     if (error.code === statusCodes.IN_PROGRESS) {
  //       alert("Signing in");
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert("Play Services Not Available or Outdated");
  //     } else {
  //       alert(error.message);
  //     }
  //   }
  // };
  // const _signOut = async () => {
  //   setGettingLoginStatus(true);
  //   // Remove user session from the device.
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     // Removing user Info
  //     setUserInfo(null);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setGettingLoginStatus(false);
  // };

  return (
    <View>
      <View>
        <TextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <TextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />
        {/* <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button> */}
        {/* <Button
          onPress={() => {
            promptAsync();
          }}
        >
          Google Sign in
        </Button> */}
        <Button
          title={accessToken ? "Get User Data" : "Google Login"}
          onPress={
            accessToken
              ? getUserData
              : () => {
                  promptAsync();
                }
          }
        />

        {/* <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          // onPress={_signIn}
        /> */}
      </View>
    </View>
  );
};
