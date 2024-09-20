import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import AppWrapper from '../Components/AppWrapper';
import Colors from '../Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ImagePath from '../Utils/ImagePath';
import VectorIcon from '../Utils/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import { item } from '../Components/ContextApi';

export default function Details({route}) {
  const {myBag, setMyBag}=useContext(item)
  const navigation=useNavigation()
  const data = route?.params?.data;
  // console.log('data....',data)

  const addOneData = [
    {
      id: 1,
      image: ImagePath.Splash,
      name: 'Mango',
    },
    {
      id: 2,
      image: ImagePath.Splash,
      name: 'Pizze',
    },
    {
      id: 3,
      image: ImagePath.Splash,
      name: 'Burger',
    },
    {
      id: 4,
      image: ImagePath.Splash,
      name: 'Fruties',
    },
    {
      id: 5,
      image: ImagePath.Splash,
      name: 'Vagitables',
    },
    {
      id: 6,
      image: ImagePath.Splash,
      name: 'Burger',
    },
  ];
  return (
    <AppWrapper>
      <ScrollView
        style={{backgroundColor: Colors.White}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: Colors.Primary,
            height: responsiveHeight(42),
          }}>
          <Image
            source={ImagePath.Splash}
            style={{
              alignSelf: 'center',
              width: responsiveWidth(100),
              height: responsiveHeight(35),
              resizeMode: 'center',
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: Colors.White,
            minHeight: responsiveHeight(70),
            borderTopLeftRadius: responsiveWidth(10),
            borderTopStartRadius: responsiveWidth(10),
            marginTop: responsiveHeight(-5),
            paddingVertical: responsiveFontSize(2),
            paddingHorizontal: responsiveWidth(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: responsiveWidth(20),
                backgroundColor: Colors.Primary,
                height: responsiveHeight(4),
                borderRadius: responsiveWidth(10),
                margin: responsiveWidth(2),
              }}>
              <VectorIcon
                name={'star'}
                type={'FontAwesome'}
                size={19}
                color={'yellow'}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: 'yellow',
                  fontWeight: '600',
                }}>
                {' '}
                {4.5}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.Primary,
                  fontSize: responsiveFontSize(2.2),
                  fontWeight: 'bold',
                }}>
                {data?.price} Rs
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: responsiveHeight(2),
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: Colors.Primary,
                fontWeight: '700',
              }}>
              {' '}
              {data?.name}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{padding: responsiveScreenWidth(2)}}>
                <VectorIcon
                  name={'pluscircle'}
                  type={'AntDesign'}
                  color={Colors.Primary}
                  size={20}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: Colors.Primary,
                  fontSize: responsiveFontSize(2.2),
                  fontWeight: 'bold',
                  padding: responsiveScreenWidth(1),
                }}>
                1
              </Text>
              <TouchableOpacity style={{paddingLeft: responsiveScreenWidth(2)}}>
                <VectorIcon
                  name={'minuscircle'}
                  type={'AntDesign'}
                  color={Colors.Primary}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              textAlign: 'justify',
              fontSize: responsiveFontSize(1.8),
              color: 'grey',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text
            style={{
              color: Colors.Black,
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
              marginVertical: responsiveHeight(2),
            }}>
            Add One
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* ##################### */}

            <FlatList
              data={addOneData}
              horizontal
              ItemSeparatorComponent={() => (
                <View style={{width: responsiveWidth(4)}}></View>
              )}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View
                      style={{
                        backgroundColor: Colors.Primary,
                        width: responsiveWidth(25),
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: responsiveWidth(20),
                        borderRadius: responsiveWidth(5),
                      }}>
                      <Image
                        source={data.image}
                        style={{
                          width: '100%',
                          height: responsiveHeight(8),
                          resizeMode: 'center',
                          paddingHorizontal: responsiveWidth(6),
                        }}
                      />
                      <Text
                        style={{
                          left: responsiveWidth(11),
                          backgroundColor: Colors.White,
                          borderRadius: responsiveWidth(10),
                        }}>
                        <VectorIcon
                          name={'pluscircle'}
                          type={'AntDesign'}
                          size={20}
                          color={'green'}
                        />
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: Colors.Primary,
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: responsiveFontSize(2),
                      }}>
                      {data.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
{
  myBag.includes(data)?
  <TouchableOpacity
       
            onPress={()=>{
              // navigation.navigate('Cart'
              //   // , {data:data}
              // )
              // setMyBag([...myBag,data])
              // // setMyBag([data])

                Alert.alert('Alrady in your Bag')
            }}
          style={{
            borderRadius: responsiveWidth(10),
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            backgroundColor:'red',
            paddingVertical: responsiveHeight(2),
            marginVertical: responsiveHeight(2),
          }}>
          <Text
            style={{
              color: Colors.White,
              fontWeight: '500',
              fontSize: responsiveFontSize(2.2),
            }}>
            Added to Card
          </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
       
            onPress={()=>{
              navigation.navigate('Cart'
                // , {data:data}
              )
              setMyBag([...myBag,data])
              // setMyBag([data])

            }}
          style={{
            borderRadius: responsiveWidth(10),
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            backgroundColor: Colors.Primary,
            paddingVertical: responsiveHeight(2),
            marginVertical: responsiveHeight(2),
          }}>
          <Text
            style={{
              color: Colors.White,
              fontWeight: '500',
              fontSize: responsiveFontSize(2.2),
            }}>
            Add to Card
          </Text>
        </TouchableOpacity>
}
        
      </ScrollView>
    </AppWrapper>
  );
}

const styles = StyleSheet.create({});
