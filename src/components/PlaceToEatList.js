import {View, Text, Image} from 'react-native';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../themes';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../themes/Fonts';

export default function PlaceToEatList({item}) {
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
      }}>
      <View style={{flex: 0.65}}>
        <Image
          style={{
            width: screenWidth * 0.45,
            height: screenHeight * 0.17,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
          // resizeMode="cover"
          source={item?.placeUrl}
        />
      </View>
      <View
        style={{
          flex: 0.35,
          justifyContent: 'center',
          paddingLeft: moderateScale(10),
        }}>
        <Text
          style={{
            fontFamily: Fonts.medium,
            fontSize: moderateScale(14),
            color: colors.black,
            marginLeft: moderateScale(4),
          }}>
          {item?.hotelName}
        </Text>
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
  );
}
