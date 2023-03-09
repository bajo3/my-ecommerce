import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) =>{
    return (
        data.map(periferic => <Item key={periferic.id} info={periferic}/>)
    );
}

export default ItemList;