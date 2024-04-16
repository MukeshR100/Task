import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDimensions} from '../hooks/useDimensions';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors} from '../themes';
import Fonts from '../themes/Fonts';
import {Button, RadioButton} from 'react-native-paper';

export default function PollsList() {
  const {screenHeight, screenWidth} = useDimensions();
  const [value, setValue] = useState('first');
  return (
    <View
      style={{
        width: screenWidth * 0.9,
        height: screenHeight * 0.35,
        backgroundColor: colors.lightGray,
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: colors.gray,
        marginLeft: moderateScale(10),
        marginVertical: moderateScale(10),
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{marginHorizontal: moderateScale(16), flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: moderateScale(10),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontSize: moderateScale(13),
              color: colors.primary,
            }}>
            11 Vote
          </Text>
          <Text
            style={{
              padding: scale(6),
              borderRadius: scale(12),
              borderWidth: 1,
              borderColor: '#C8E8EF',
              backgroundColor: '#E0F8FD',
              fontFamily: Fonts.medium,
            }}>
            End of the session
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: Fonts.medium,
              color: colors.black,
              fontSize: moderateScale(14),
            }}>
            Who will be the man of the match for upcoming leeds club vs KKR
            match?
          </Text>
        </View>
        <View style={{marginVertical: moderateScale(10)}}>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="first" />
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: colors.label,
                  fontSize: moderateScale(14),
                }}>
                Sam Billings
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="second" />
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: colors.label,
                  fontSize: moderateScale(14),
                }}>
                MS Dhoni
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton value="third" />
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: colors.label,
                  fontSize: moderateScale(14),
                }}>
                Joe Root
              </Text>
            </View>
          </RadioButton.Group>
        </View>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{
            backgroundColor: colors.background,
            borderColor: '#C8E8EF',
            borderWidth: 1,
            borderRadius: scale(8),
          }}
          labelStyle={{
            fontFamily: Fonts.semiBold,
            color: colors.primary,
            fontSize: moderateScale(14),
          }}>
          Vote
        </Button>
      </View>
    </View>
  );
}
