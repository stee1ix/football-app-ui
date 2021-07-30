import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="black" />
      <View style={styles.container}>
        {/* Details Area */}
        <SafeAreaView>
          <View style={styles.backgroundImageWrapper}>
            <View style={styles.topBarWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" color={colors.white} size={32} />
              </TouchableOpacity>
              <Image source={require('../assets/images/options.png')} />
            </View>

            <Image source={item.detailsImg} style={styles.detailsImg} />
            <Text style={styles.detailsName}>{item.title}</Text>
            <View style={styles.detailsGames}>
              <Text style={styles.detailsStatsText}>{item.games}</Text>
              <Text style={styles.detailsStatName}>Games</Text>
            </View>
            <View style={styles.detailsGoals}>
              <Text style={styles.detailsStatsText}>{item.goals}</Text>
              <Text style={styles.detailsStatName}>Goals</Text>
            </View>
            <Text style={styles.detailsNumber}>{item.number}</Text>
          </View>
        </SafeAreaView>

        {/* Bio Area */}
        <View style={styles.bioWrapper}>
          <Text style={styles.bioTitle}>Bio</Text>
          <Text style={styles.bioText}>{item.bio}</Text>
          <View style={styles.bioButtonsWrapper}>
            <TouchableOpacity
              onPress={() => alert(`${item.title} is one of the worlds best!`)}>
              <View style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.arrowButton}>
                <Ionicons
                  name="arrow-redo-sharp"
                  size={24}
                  color={colors.darkGrey}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageWrapper: {
    height: height * 0.65,
    backgroundColor: colors.black,
  },
  topBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  detailsImg: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  detailsName: {
    color: colors.white,
    position: 'absolute',
    fontSize: 26,
    fontFamily: 'OpenSans-Bold',
    width: 135,
    top: 80,
    left: 30,
  },
  detailsGames: {
    position: 'absolute',
    top: 200,
    left: 30,
    alignItems: 'center',
  },
  detailsGoals: {
    position: 'absolute',
    top: 200,
    right: 30,
    alignItems: 'center',
  },
  detailsNumber: {
    color: colors.white,
    position: 'absolute',
    fontSize: 60,
    fontFamily: 'OpenSans-Bold',
    bottom: 30,
    left: 30,
  },
  detailsStatsText: {
    color: colors.white,
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
  },
  detailsStatName: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  bioWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bioTitle: {
    fontSize: 22,
    fontFamily: 'OpenSans-SemiBold',
  },
  bioText: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    marginVertical: 20,
  },
  bioButtonsWrapper: {
    flexDirection: 'row',
  },
  readMoreButton: {
    backgroundColor: colors.red,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    marginRight: 10,
  },
  readMoreText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  arrowButton: {
    width: 52,
    height: 52,
    borderColor: colors.grey,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
