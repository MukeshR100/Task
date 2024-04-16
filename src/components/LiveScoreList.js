import {View, Text} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {colors} from '../themes';
import {moderateScale, scale} from 'react-native-size-matters';
import {useDimensions} from '../hooks/useDimensions';
import Fonts from '../themes/Fonts';

export default function LiveScoreList({item}) {
  const {screenHeight, screenWidth} = useDimensions();
  const renderScore = (teamUrl, team, teamRun, teamRunrate) => {
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Avatar.Image
          size={scale(50)}
          style={{
            backgroundColor: colors.background,
            marginRight: moderateScale(6),
          }}
          source={teamUrl}
        />
        <View style={{marginTop: moderateScale(8)}}>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.background,
              fontFamily: Fonts.semiBold,
            }}>
            {team}
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.background,
              fontFamily: Fonts.bold,
            }}>
            {teamRun}
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.background,
              fontFamily: Fonts.semiBold,
            }}>
            {teamRunrate}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        width: screenWidth * 0.5,
        height: screenHeight * 0.25,
        backgroundColor: item?.color,
        borderRadius: scale(5),
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(10),
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          marginLeft: moderateScale(20),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: colors.background,
            marginHorizontal: moderateScale(5),
          }}></View>
        <Text
          style={{
            fontSize: moderateScale(14),
            color: colors.background,
            fontFamily: Fonts.semiBold,
          }}>
          LIVE
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {renderScore(
          item?.team1Url,
          item?.team1,
          item?.team1Run,
          item?.team1Runrate,
        )}
        {renderScore(
          item?.team2Url,
          item?.team2,
          item?.team2Run,
          item?.team2Runrate,
        )}
      </View>
    </View>
  );
}
