import React from 'react';
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {items} from './items';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {addITEM} from '../redux/actions';

const HomeScreen = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.username}>Hey {props.user}</Text>
        <View>
          {props.totalItems == 0 ? null : (
            <View style={styles.totalItems}>
              <Text> {props.totalItems} </Text>
            </View>
          )}
          <FontAwesome
            name="shopping-cart"
            size={35}
            onPress={() => props.navigation.navigate('Cart')}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.items}>
                <TouchableOpacity onPress={() => props.addItem(item)}>
                  <View style={styles.listItems}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      {'\u20B9'}
                      {item.price}
                    </Text>
                  </View>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={styles.itemImage}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  totalItems: state.totalItems,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addITEM(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  listItems: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  items: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 2,
  },
  itemPrice: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    flexDirection: 'row',
  },
  totalItems: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'yellowgreen',
    alignSelf: 'center',
    marginBottom: -15,
    marginLeft: 15,
    zIndex: 2,
    fontSize: 15,
    borderRadius: 20,
  },
  itemImage: {
    height: 300,
    width: '100%',
  },
});
