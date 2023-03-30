import React, {useState} from 'react';
import Auth0, {useAuth0} from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import config from '../auth0-configuration';

const AuthContext = React.createContext();

const AuthContextProvider = props => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);

  const auth0 = new Auth0({
    domain: config.domain,
    clientId: config.clientId,
  });

  const login = async () => {
    try {
      const user_auth = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      const user_details = jwtDecode(user_auth.idToken);
      setUserData(user_details);
      setLoggedIn(true);
    } catch (err) {
      alert(err + 'Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      setLoggedIn(false);
      setUserData(null);
    } catch (err) {
      alert('Error logging out');
    }
  };

  const variables = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };
  return (
    <AuthContext.Provider value={variables}>
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthContextProvider};
