import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import ListItems from '../components/ListItems';

import { getProducts } from '../domain/Shop';



function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then(setData)
            .catch((error) => console.error(error))
    }, [])
    
    return <div>
        <Cart />
        <ListItems items={data} />
    </div>
}

export default Home;