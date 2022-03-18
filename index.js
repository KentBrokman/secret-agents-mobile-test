/**
 * @format
 */
import React from 'react';
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import { InitScreen } from './src/screens/Init/InitScreen';
import { LoginScreen } from "./src/screens/LogIn/LoginScreen";
import { NewsItemScreen } from './src/screens/NewsItem/NewsItem';
import { NewsScreen } from './src/screens/News/NewsScreen';
import { Settings } from "./src/Settings";
import { store, persistor } from './src/store/store'

Navigation.registerComponent('Init',
    () => (props) => (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <InitScreen {...props} />
            </PersistGate>
        </Provider>
    ),
    () => InitScreen);
Navigation.registerComponent('Login',
    () => (props) => (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoginScreen {...props} />
            </PersistGate>
        </Provider>
    ),
    () => LoginScreen);
Navigation.registerComponent('News',
    () => (props) => 
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NewsScreen {...props} />
            </PersistGate>
        </Provider>
    ,
    () => NewsScreen);
Navigation.registerComponent('NewsItemScreen', () => NewsItemScreen);

export const initRoot = {
    root: {
        component: {
            name: 'Init'
        }
    }
};

export const loginRoot = {
    root: {
        component: {
            name: 'Login'
        }
    }
};
export const mainRoot = {
    root: {
        stack: {
            id: 'NEWS_SCREEN',
            children: [
                {
                    component: {
                        // id: 'NEWS_SCREEN',
                        name: 'News',
                        options: {
                            topBar: { visible: false },
                        }
                    },
                }
            ],
        }
    }
}
Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(initRoot);
});
