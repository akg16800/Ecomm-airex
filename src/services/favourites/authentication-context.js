import React, { createContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export const AuthenticationContext = createContext();

// r

export const AuthenticationContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [message, setMessage] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "117880214700-ues8lsphvmi0rm6apg3mgkl8bfre8818.apps.googleusercontent.com",
    webClientId:
      "117880214700-d5cmqlvpieaic80ophin8k5adhdn1pb4.apps.googleusercontent.com",
    expoClientId:
      "117880214700-4r76n91t6km0f439ohf8timdcg3t1ftq.apps.googleusercontent.com",
  });

  useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      const { authentication } = response;
      setAccessToken(authentication.accessToken);

      console.log(authentication);
    }
    getUserData();
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
      console.log(userInfo);
    });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        userInfo,
        promptAsync,
        isLogged: !!userInfo,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
