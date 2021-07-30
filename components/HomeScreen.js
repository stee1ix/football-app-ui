import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import cardsData from '../assets/data/cardsData';
import storiesData from '../assets/data/storiesData';

const HomeScreen = ({navigation}) => {
  const renderStoriesItem = ({item}) => {
    return (
      <Image
        source={item.image}
        style={[
          styles.storyItem,
          {marginLeft: item.title === 'messi' ? 20 : 0},
        ]}
      />
    );
  };

  const renderCardsItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item})}>
        <ImageBackground
          source={item.image}
          style={[
            styles.cardItemImage,
            {marginLeft: item.number === 10 ? 20 : 0},
          ]}
          imageStyle={{borderRadius: 20}}>
          <View style={styles.cardItemNameCountryWrapper}>
            <Image source={item.country} />
            <Text style={styles.cardItemName}>{item.title}</Text>
          </View>
          <Text style={styles.cardItemNumber}>{item.number}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Search Area */}
            <View style={styles.searchWrapper}>
              <View style={styles.chipWrapper}>
                <Image source={require('../assets/images/spain.png')} />
                <Text>Spain</Text>
                <Feather name="x" color={colors.darkGrey} />
              </View>
              <View style={[styles.chipWrapper, {width: 150}]}>
                <Image source={require('../assets/images/real-madrid.png')} />
                <Text>Real Madrid</Text>
                <Feather name="x" color={colors.darkGrey} />
              </View>
              <Feather name="search" color={colors.black} size={24} />
            </View>

            {/* Stories Area */}
            <View style={styles.storiesWrapper}>
              <FlatList
                data={storiesData}
                renderItem={renderStoriesItem}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* Player Cards Area*/}
            <View style={styles.playerCardsWrapper}>
              <Text style={styles.playerCardsWrapperTitle}>Players</Text>
              <View style={styles.playerCardsListWrapper}>
                <FlatList
                  data={cardsData}
                  keyExtractor={item => item.number}
                  renderItem={renderCardsItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>

            {/* Latest News Area */}
            <View style={styles.newsWrapper}>
              <Text style={styles.newsWrapperTitle}>Latest News</Text>
              {/* News 1 */}
              <View style={styles.newsItemWrapper}>
                <Image
                  source={require('../assets/images/news1.png')}
                  style={styles.newsItemImage}
                />
                <View style={styles.newsTextWrapper}>
                  <Text style={styles.newsTextBody}>
                    Neymar contines to perform for PSG as the qualify for the
                    Champions League Semi Fi...
                  </Text>
                  <Text style={styles.newsTextDate}>12 January, 2020</Text>
                </View>
              </View>
              {/* News 2 */}
              <View style={styles.newsItemWrapper}>
                <Image
                  source={require('../assets/images/news2.png')}
                  style={styles.newsItemImage}
                />
                <View style={styles.newsTextWrapper}>
                  <Text style={styles.newsTextBody}>
                    Real Madrid beats Juve with Cristiano Ronaldo smashing goal
                    of the...
                  </Text>
                  <Text style={styles.newsTextDate}>14 January, 2020</Text>
                </View>
              </View>
              <View style={styles.newsItemWrapper}>
                <Image
                  source={require('../assets/images/news2.png')}
                  style={styles.newsItemImage}
                />
                <View style={styles.newsTextWrapper}>
                  <Text style={styles.newsTextBody}>
                    Real Madrid beats Juve with Cristiano Ronaldo smashing goal
                    of the...
                  </Text>
                  <Text style={styles.newsTextDate}>14 January, 2020</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  chipWrapper: {
    width: 130,
    height: 35,
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  storiesWrapper: {},
  storyItem: {
    marginRight: 24,
  },
  playerCardsWrapper: {
    marginVertical: 30,
  },
  playerCardsWrapperTitle: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: 20,
    marginBottom: 20,
  },
  playerCardsListWrapper: {},
  cardItemImage: {
    width: 140,
    height: 240,
    marginRight: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardItemNameCountryWrapper: {
    marginTop: 15,
    marginLeft: 15,
  },
  cardItemName: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    width: 80,
    marginTop: 10,
  },
  cardItemNumber: {
    color: colors.white,
    fontSize: 48,
    fontFamily: 'OpenSans-Bold',
    marginLeft: 10,
  },
  newsWrapper: {},
  newsWrapperTitle: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: 20,
    marginBottom: 20,
  },
  newsItemWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  newsItemImage: {
    borderRadius: 10,
    marginRight: 20,
  },
  newsTextWrapper: {
    flex: 1,
  },
  newsTextBody: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 6,
  },
  newsTextDate: {
    fontSize: 10,
    fontFamily: 'OpenSans-Regular',
  },
});

export default HomeScreen;
