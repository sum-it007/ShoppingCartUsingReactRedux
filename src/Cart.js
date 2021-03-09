import React from 'react'
import {FlatList, Text,TouchableOpacity,View} from 'react-native'
import { connect } from 'react-redux'

const Cart = (props) => {
    return ( 
        <View>
        <Text>{props.user}'s Cart</Text>
        <Text>Total Items in the Cart : {props.totalItems}</Text>
        <Text>Items in the cart are : </Text>
        <Text>Total Price : {props.totalPrice}</Text>
        
        <FlatList
        data={props.items}
        keyExtractor={(item,index)=>index}
        renderItem={({item})=>{
            return(
                <Text>{item}</Text>
            )
        }}
        />
        </View>
    )
}

const mapStateToProps = (state) => ({
    user : state.user,
    totalItems : state.totalItems,
    items : state.items,
    totalPrice : state.totalPrice
})

export default connect(mapStateToProps)(Cart)