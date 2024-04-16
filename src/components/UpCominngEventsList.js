import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {colors} from '../themes';
import {moderateScale, scale} from 'react-native-size-matters';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ImgFilePath from '../config/ImgFilePath';
import Fonts from '../themes/Fonts';

export default function UpCominngEventsList({item}) {
  const {screenHeight, screenWidth} = useDimensions();

  const renderTeam = (teamUrl, team) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: moderateScale(5),
        }}>
        <Image style={{width: 60, height: 60}} source={teamUrl} />
        <Text
          style={{
            width: screenWidth * 0.3,
            color: colors.black,
            fontSize: moderateScale(14),
            fontFamily: Fonts.medium,
          }}>
          {team}
        </Text>
      </View>
    );
  };

  const seperator = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 1,
            backgroundColor: '#E5E7E9',
            width: screenWidth * 0.8,
          }}></View>
      </View>
    );
  };

  return (
    <View
      style={[
        Styles.upcomingEventsContainer,
        {
          width: screenWidth * 0.9,
          height: screenHeight * 0.35,
        },
      ]}>
      <View style={{marginHorizontal: moderateScale(16), flex: 1}}>
        <View style={{flex: 0.75}}>
          <View
            style={{
              flex: 0.75,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: moderateScale(-20),
            }}>
            <View
              style={{
                width: screenWidth * 0.28,
                height: screenHeight * 0.15,
                borderWidth: 1,
                borderColor: '#E5E7E9',
                borderRadius: scale(5),
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(18),
                    color: colors.label,
                    fontFamily: Fonts.semiBold,
                  }}>
                  {item?.month}
                </Text>
                <Avatar.Image
                  size={scale(35)}
                  style={{backgroundColor: colors.background}}
                  source={ImgFilePath.image.Cricket}
                />
              </View>
              <Text
                style={{
                  fontSize: moderateScale(28),
                  marginLeft: moderateScale(10),
                  color: colors.label,
                  fontFamily: Fonts.bold,
                }}>
                {item?.day}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(18),
                  marginLeft: moderateScale(10),
                  color: colors.label,
                  fontFamily: Fonts.semiBold,
                }}>
                {item?.time}
              </Text>
            </View>
            <View>
              {renderTeam(item?.team1Url, item?.team1)}
              {renderTeam(item?.team2Url, item?.team2)}
            </View>
          </View>
          <View
            style={{
              flex: 0.25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={Styles.sessionCnt}>Net Session</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={'location-outline'}
                size={scale(20)}
                color={colors.primary}
              />
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: colors.primary,
                  fontFamily: Fonts.regular,
                }}>
                {item?.location}
              </Text>
            </View>
          </View>
        </View>
        {seperator()}
        <View style={{flex: 0.25, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: moderateScale(14), fontFamily: Fonts.medium}}>
              Status:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                padding: moderateScale(6),
                backgroundColor: colors.background,
                borderRadius: scale(5),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: colors.label,
                  fontFamily: Fonts.medium,
                }}>
                Playing
              </Text>
              <Avatar.Icon
                size={scale(18)}
                icon="check"
                color={colors.background}
                style={{
                  backgroundColor: colors.green,
                  marginHorizontal: moderateScale(5),
                }}
              />
              <Icon
                name={'chevron-down-outline'}
                size={scale(20)}
                color={colors.secondary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  upcomingEventsContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: scale(5),
    borderWidth: scale(1),
    borderColor: colors.gray,
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(10),
  },
  sessionCnt: {
    padding: scale(6),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#C8E8EF',
    backgroundColor: '#E0F8FD',
    fontFamily: Fonts.medium,
  },
});
