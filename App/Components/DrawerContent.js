import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>My Name</Title>
              </View>
            </View>

            {
              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    80
                  </Paragraph>
                  <Caption style={styles.caption}>Reward Points</Caption>
                </View>
                {/*  <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    100
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View> */}
              </View>
            }
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('myprofile');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="file" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('About Us');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="bookmark" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('Promo Code');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="history" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Account History');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
});
