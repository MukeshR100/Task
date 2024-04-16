import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {colors} from '../themes';
import {moderateScale, scale} from 'react-native-size-matters';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import UpCominngEventsList from '../components/UpCominngEventsList';
import LiveScoreList from '../components/LiveScoreList';
import Fonts from '../themes/Fonts';
import PollsList from '../components/PollsList';
import PlaceToEatList from '../components/PlaceToEatList';
import StaticData from '../config/StaticData';
import ImgFilePath from '../config/ImgFilePath';
import MoreActions from '../components/MoreActions';

export default function OverView() {
  const {screenHeight, screenWidth} = useDimensions();

  const renderNotification = () => {
    return (
      <View style={{alignItems: 'center', marginVertical: moderateScale(15)}}>
        <TouchableOpacity
          style={[
            Styles.notificationContainer,
            {
              height: screenHeight * 0.09,
              width: screenWidth * 0.92,
            },
          ]}>
          <Avatar.Icon
            size={scale(30)}
            icon="arrow-bottom-left"
            color={colors.green}
            style={{backgroundColor: colors.background}}
          />
          <Text
            style={{
              color: colors.background,
              fontSize: moderateScale(14),
              fontFamily: Fonts.regular,
            }}>
            You have 2 new requests from clubs
          </Text>
          <Icon
            name={'chevron-forward-outline'}
            size={scale(22)}
            color={colors.background}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHeaderText = (title, action) => {
    return (
      <View style={Styles.headerTxtContainer}>
        <Text
          style={{
            fontSize: moderateScale(14),
            color: colors.black,
            fontFamily: Fonts.bold,
          }}>
          {title}
        </Text>
        {action && (
          <TouchableOpacity onPress={action}>
            <Text
              style={{
                fontSize: moderateScale(14),
                color: colors.primary,
                fontFamily: Fonts.regular,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const upcomingEvents = ({item}) => {
    return <UpCominngEventsList item={item} />;
  };

  const liveScore = ({item}) => {
    return <LiveScoreList item={item} />;
  };

  const placeToEat = ({item}) => {
    return <PlaceToEatList item={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView>
        {renderNotification()}
        {renderHeaderText('Upcoming Events', () =>
          console.log('See all pressed'),
        )}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={StaticData?.upComingEventsData}
            keyExtractor={item => item.id}
            renderItem={upcomingEvents}
          />
        </View>

        {renderHeaderText('Live Score', () => console.log('See all pressed'))}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={StaticData?.liveScoreData}
            keyExtractor={item => item.id}
            renderItem={liveScore}
          />
        </View>

        {renderHeaderText('Polls', () => console.log('See all pressed'))}
        <PollsList />

        {renderHeaderText('Places To Eat', () =>
          console.log('See all pressed'),
        )}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={StaticData?.placeToEatData}
            keyExtractor={item => item.id}
            renderItem={placeToEat}
          />
        </View>

        {/* {renderHeaderText('More Actions')} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: colors.green,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerTxtContainer: {
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
