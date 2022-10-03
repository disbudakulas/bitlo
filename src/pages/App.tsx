import React, {useEffect, useState} from 'react';

//Third Party
import auth from '@react-native-firebase/auth';

//Routes
import RootNavigaiton from '@routes/rootNavigation';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <RootNavigaiton auth={user} />;
};

export default App;
