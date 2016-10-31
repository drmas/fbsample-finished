/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    ActivityIndicator,
    View,
    TextInput
} from 'react-native';

import {Actions} from 'react-native-router-flux'

import {getRepos} from '../Api/github';
import Item from '../Components/Item'

export default class Home extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            state: ''
        };
    }

    search(username) {
        getRepos(username)
            .then(repos => {
                this.setState({
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(repos),
                    state: ''
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.search} 
                    placeholder ="Search ..."
                    onChangeText={text => this.search(text)}
                    />
                 {
                     this.state.state =='loading' ?
                        <ActivityIndicator/>
                        :
                        <ListView
                            style={styles.list}
                            dataSource={this.state.dataSource}
                            enableEmptySections={true}
                            renderRow={(rowData) => <Item
                            data={rowData}
                            onItemPress={Actions
                            .details
                            .bind(this, rowData)}/>}/>
                 }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 64,
        flex: 1
    },
    list: {
        flex: 1,
        alignSelf: 'stretch'
    },
    search: {
        alignSelf: 'stretch',
        height: 40,
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 2,
        margin: 6,
        padding: 10
    }
});
