import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Item extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onItemPress}
                underlayColor="#eaeaea">
                <View style={styles.container}>
                    <Image source={{uri: this.props.data.owner.avatar_url}} style={styles.avatar} />
                    <Text style={styles.name}>{this.props.data.name}</Text>
                    <Icon name="chevron-right" size={10} color="gray" />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        color: 'black',
        flex: 1
    },
    avatar: {
        width: 20,
        height: 20,
        marginRight: 10
    }
})