import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NavigationGraph from './src/navigation/NavigationGraph';
import SplashScreen from 'react-native-splash-screen';
import {isLogged} from './src/auth/AuthStorage';

const App = () => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean | null>(null);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    const processLogin = async () => {
      const isLogin = await isLogged();
      setIsLoggingIn(isLogin);
    };
    processLogin().catch(console.error);
    SplashScreen.hide();
  }, []);

  if (isLoggingIn === null) {
    return <View />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationGraph isLoggingIn={isLoggingIn} />
    </SafeAreaView>
  );
};

export default App;
