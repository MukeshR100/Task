import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {moderateScale, scale} from 'react-native-size-matters';
import ImgFilePath from '../config/ImgFilePath';
import {colors} from '../themes';
import {Avatar} from 'react-native-paper';
import Center from '../config/Center';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../themes/Fonts';

export default function DashboardHeader() {
  const {screenHeight, screenWidth} = useDimensions();
  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight * 0.09,
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <View style={{marginHorizontal: moderateScale(16), flexDirection: 'row'}}>
        <Avatar.Image
          size={scale(45)}
          source={ImgFilePath.image.ProfileImage}
        />
        <View
          style={{
            flexDirection: 'column',
            flex: 0.8,
            marginLeft: moderateScale(8),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: moderateScale(20),
              color: colors.black,
              fontFamily: Fonts.bold,
            }}>
            Marnus
          </Text>
          <Text
            style={{fontSize: moderateScale(14), fontFamily: Fonts.regular}}>
            Right hand batsman, Leeds
          </Text>
        </View>
        <View
          style={[
            Center,
            {
              flex: 0.2,
            },
          ]}>
          <View>
            <Icon
              name={'notifications-outline'}
              size={scale(30)}
              color={colors.black}
            />
            <View style={Styles.notificationBadge}>
              <Text style={{color: colors.white, paddingBottom: 3}}>10</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  notificationBadge: {
    position: 'absolute',
    top: scale(-4),
    right: scale(-3),
    height: scale(15),
    width: scale(20),
    borderRadius: scale(10),
    backgroundColor: colors.red,
    alignItems: 'center',
  },
});
