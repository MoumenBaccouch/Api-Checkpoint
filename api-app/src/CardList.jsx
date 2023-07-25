import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Card from './Card'
function CardList() {
    const [persons, setpersons] = useState([])
    useEffect(() => {
        (async () => {
            try {
                let result = await axios.get("https://jsonplaceholder.typicode.com/users")
                setpersons(result.data)
            } catch(error){
                console.log(error)
            }
        })();
    },[])
    return (
        <div>
            {persons.map(el=><Card key={el.id} el={el}/>)}
        </div>
    )
}

export default CardList