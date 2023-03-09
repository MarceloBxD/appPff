import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

import {AppProvider} from './src/contexts/contextApi';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
