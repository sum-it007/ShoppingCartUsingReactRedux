import React from 'react';
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {items} from './items';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = (props) => {
  const addHandler = (item) => {
    props.addItem(item);
  };
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
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.listItems}>
                <TouchableOpacity onPress={() => props.addItem(item)}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
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
  addItem: (item) => dispatch({type: 'ADD_ITEM', item: item}),
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
    padding: 15,
    flexDirection: 'row',
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  itemPrice: {
    alignItems: 'center',
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
});
