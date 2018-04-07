import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
//screens
import AuthScreen from './src/screen/Auth/Auth';
import SharePlaceScreen from './src/screen/SharePlace/ShaerPlace';
import FindPlaceScreen from './src/screen/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screen/PlaceDetails/PlaceDetail';
//redux
import configureStore from './src/store/configureStore';

const store = configureStore();

//register screens
//if need redux, put store, provider second and third parameter
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen:'awesome-places.AuthScreen',
    title: 'Login'
  }
})