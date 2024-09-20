import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import AppWrapper from '../Components/AppWrapper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import StatusBarr from '../Components/StatusBarr';
import Colors from '../Utils/Colors';
import ImagePath from '../Utils/ImagePath';
import VectorIcon from '../Utils/VectorIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {item} from '../Components/ContextApi';

export default function Cart({route}) {
  const navigation = useNavigation();

  let totalAmt = 0;
  const {myBag, setMyBag} = useContext(item);
  for (const i of myBag) {
    totalAmt = totalAmt + i.price;
  }
  // console.log('data....',myBag)
  // const dataGet=route?.params?.data
  // console.log('kjjj...........',dataGet)

  // const data = [
  //   {
  //     name: 'Pizza',
  //     price: 250,
  //     image: ImagePath.Splash,
  //   },
  //   {
  //     name: 'Burger',
  //     price: 250,
  //     image: ImagePath.Splash,
  //   },
  //   {
  //     name: 'Burger',
  //     price: 250,
  //     image: ImagePath.Splash,
  //   },
  //   {
  //     name: 'Dessert',
  //     price: 50,
  //     image: ImagePath.Splash,
  //   },
  //   {
  //     name: 'Dessert',
  //     price: 50,
  //     image: ImagePath.Splash,
  //   },
  // ];
  return (
    <AppWrapper>
      <View
        // showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: responsiveWidth(4),
          flex: 1,
          backgroundColor: Colors.White,
        }}>
        <StatusBarr backgroundColor={Colors.White} barStyle={'dark-content'} />
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: Colors.Black,
            fontSize: responsiveFontSize(2.4),
            fontWeight: '600',
            marginVertical: responsiveHeight(0.5),
          }}>
          {myBag.length} items in Cart
        </Text>
        <View style={{}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginTop: responsiveHeight(1),
              maxHeight: responsiveHeight(50),
              minHeight: responsiveHeight(15),
              // height:20,
              // backgroundColor: 'lightgray',
              borderRadius: responsiveWidth(3),
            }}>
            {/* {
                !myBag==myBag?:<Text>No Item in Cart..</Text>
              } */}
            {myBag.map((item, index) => (
              <View
                key={index}
                style={{
                  height: responsiveHeight(15),
                  // backgroundColor: 'red',
                  borderWidth: responsiveWidth(0.2),
                  borderColor: 'rgba(0,0,0,.1)',
                  borderRadius: responsiveWidth(3),
                  flexDirection: 'row',
                  alignItems: 'center',
                  //  marginVertical:resp
                }}>
                <View
                  style={{
                    width: '35%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80%',
                    backgroundColor: 'lightgray',
                    borderRadius: responsiveWidth(3),
                    margin: responsiveWidth(2),
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: responsiveHeight(10),
                      resizeMode: 'center',
                    }}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    padding: responsiveWidth(3),
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setMyBag(myBag.filter(val => val.name != item.name));
                    }}
                    style={{
                      zIndex: 999,
                      position: 'absolute',
                      right: responsiveWidth(3),
                      top: responsiveHeight(2),
                      padding: responsiveWidth(1),
                    }}>
                    <VectorIcon
                      name={'closecircleo'}
                      type={'AntDesign'}
                      size={20}
                      color={Colors.Primary}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: responsiveFontSize(2.3),
                      color: Colors.Black,
                    }}>
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: responsiveFontSize(1.7),
                      color: Colors.Primary,
                    }}>
                    Rs {item?.price}{' '}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: '25%',
                      height: '70%',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <VectorIcon
                        name={'pluscircle'}
                        type={'AntDesign'}
                        size={18}
                        color={Colors.Primary}
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontSize: responsiveFontSize(2.2),
                        marginHorizontal: responsiveWidth(2),
                        color: Colors.Black,
                        fontWeight: '600',
                      }}>
                      {1}
                    </Text>

                    <TouchableOpacity>
                      <VectorIcon
                        name={'minuscircle'}
                        type={'AntDesign'}
                        size={18}
                        color={Colors.Primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            marginVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(3),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.4),
              fontWeight: '600',
              color: Colors.Black,
            }}>
            Order Instructions{' '}
          </Text>
          <View
            style={{
              borderWidth: 1.5,
              borderColor: Colors.Black,
              borderRadius: responsiveWidth(5),
              height: responsiveHeight(10),
              marginVertical: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(4),
            }}>
            <TextInput
              placeholderTextColor={Colors.Grey}
              style={{
                padding: 0,
                flex: 1,
                height: '100%',
                color: Colors.Black,
                verticalAlign: 'top',
                paddingVertical: responsiveHeight(2),
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(-1.5),
            justifyContent: 'space-between',
            marginHorizontal: responsiveWidth(4),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: Colors.Black,
              fontWeight: '500',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: Colors.Black,
              fontWeight: '500',
            }}>
            Rs {totalAmt}
          </Text>
        </View>

        <View style={{marginVertical: responsiveHeight(4)}}>
          <TouchableOpacity
          onPress={()=>{
            navigation.replace('OrderPleaced')
          }}
            style={{
              backgroundColor: Colors.Primary,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: responsiveHeight(1.4),
              borderRadius: responsiveWidth(10),
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: Colors.White,
                fontSize: responsiveFontSize(2.3),
                fontWeight: '500',
                letterSpacing: 1,
              }}>
              CheckOut
            </Text>
          </TouchableOpacity>

          <Text
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              marginVertical: responsiveHeight(2),
              color: Colors.Primary,
              alignSelf: 'center',
              fontSize: responsiveFontSize(2),
              fontWeight: '500',
              textDecorationLine: 'underline',
              padding: responsiveWidth(1),
            }}>
            Back to Menu
          </Text>
        </View>
      </View>
    </AppWrapper>
  );
}

const styles = StyleSheet.create({});
