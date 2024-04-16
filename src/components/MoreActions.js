import {View, Text, Image} from 'react-native';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../themes';
import Fonts from '../themes/Fonts';
import ImgFilePath from '../config/ImgFilePath';
import {Avatar} from 'react-native-paper';

export default function MoreActions({item}) {
  const {screenHeight, screenWidth} = useDimensions();
  return (
    <View
      style={{
        width: screenWidth * 0.45,
        height: screenHeight * 0.25,
        borderRadius: scale(5),
        marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(10),
        backgroundColor: colors.lightGray,
        borderWidth: scale(1),
        borderColor: colors.gray,
        justifyContent: 'center',
        paddingLeft: moderateScale(10),
      }}>
      <View>
        <Avatar.Icon
          size={scale(40)}
          icon="check"
          color={colors.background}
          style={{
            backgroundColor: colors.primary,
            // marginHorizontal: moderateScale(5),
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: Fonts.medium,
          color: colors.secondary,
          fontSize: moderateScale(14),
        }}>
        {item?.action}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: moderateScale(-10),
        }}>
        <Image style={{width: 60, height: 60}} source={item?.team1Url1} />
        <Text
          style={{
            color: colors.black,
            fontSize: moderateScale(14),
            fontFamily: Fonts.medium,
          }}>
          {item?.team1}
        </Text>
        {item?.team1Status && <Text style={{}}>{item?.team1Status}</Text>}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: moderateScale(-10),
        }}>
        <Image style={{width: 60, height: 60}} source={item?.team1Url2} />
        <Text
          style={{
            color: colors.black,
            fontSize: moderateScale(14),
            fontFamily: Fonts.medium,
          }}>
          {item?.team2}
        </Text>
      </View>
    </View>
  );
}
