import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const periferic = {id: 1, image: "https://spacegamer.com.ar/img/Public/1058-producto-1019-producto-teclado-hyperx-alloy-core-8404-2732.jpg",
title: "Teclado"}

export const ItemDetailContainer = () =>{

    const [data,setData] = useState ({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(periferic)
            }, 3000);
        });

        getData.then(res=> setData(res));
    }, [])

    

return(
<ItemDetail data={data}/>
);
}

export default ItemDetailContainer;