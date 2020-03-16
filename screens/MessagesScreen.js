import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Messages } from '../constants/Messages';
import { ScrollView } from 'react-native-gesture-handler';

const MessagesScreen = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                {Messages.map((user, i) => (
                    <ListItem 
                    key={i}
                    leftAvatar={{ source: user.pic, size: 'large' }}
                    title={user.title}
                    titleStyle={styles.title}
                    subtitle={user.message}
                    subtitleStyle={styles.subtitle}
                    chevron
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        color:'#3f3f3f'
    },
    subtitle:{
        color:'#a5a5a5'
    }
})

export default MessagesScreen;