import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { TopPicksScreenPics } from '../constants/Pics';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Tile } from 'react-native-elements'

const TopPicksScreen = () => {
    return(
        <SafeAreaView>
            <ScrollView>
              <Text h2 h2Style={styles.header1Style}>Top Picks</Text>
                <Text h4 h4Style={styles.header2Style}> Featured profiles of the day, picked just for you </Text>
                  <View style={styles.grid}>
                    {TopPicksScreenPics.map(({ pic, title, caption }, i) => (
                      <Tile
                            imageSrc={pic}
                            activeOpacity={0.9}
                            title={title}
                            titleStyle={styles.title}
                            caption={caption}
                            captionStyle={styles.caption}
                            featured
                            key={title}
                        />
                        ))}
          </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header1Style: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
      },
      header2Style: {
        textAlign: 'center',
        color: '#757575',
      },
      grid: {
        marginTop: 20,
        marginBottom: 20,
      },
      title: {
        position: 'absolute',
        left: 10,
        bottom: 50,
        backgroundColor: 'black',
        marginBottom: -2,
        padding: 10,
      },
      caption: {
        position: 'absolute',
        left: 10,
        bottom: 0,
        backgroundColor: 'black',
        marginTop: 10,
        padding: 10,
      },
})
export default TopPicksScreen;