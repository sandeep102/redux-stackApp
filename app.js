import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducer';
import {Header} from './src/component/common'
import LibraryList from './src/component/LibraryList'

const App = () =>{
    return(
        <Provider store={createStore(reducers)}>

            <View style={{flex:1}}>
                <Header headerText="Book Stack" />
                <LibraryList />
            </View>
        </Provider>
    )
}


export default App