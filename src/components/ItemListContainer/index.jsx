import React, {useState, useEffect} from "react";
import Title from "../Title";
import ItemCount from "../itemCount";
import ItemList from '../ItemList'

const periferics = [
    {id: 1, image: "https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-teclado-hyperx-alloy-core-8404-2732.jpg",
    title: "Teclado"},
    {id: 2, image: "https://spacegamer.com.ar/img/Public/1058-producto-surge-8975.jpg", title: "Mouse"},
    {id:3, image: "https://spacegamer.com.ar/img/Public/1058-producto-gsc-113131168-540696-1-6084.jpg" , title:"Joystick"}
]

export const ItemListContainer = ({texto}) =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
                resolve(periferics)
            },3000) ;
        });
        getData.then(res => setData(res));


    },[])

    const onAdd = (quantity) =>{
        console.log (`compraste ${quantity} unidades`)
    }

    return(
        <>
        <Title greeting={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data ={data}/>
        </>
    );
}

export default ItemListContainer;