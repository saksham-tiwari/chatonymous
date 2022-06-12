import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React , { useEffect, useState }from 'react'
import { db } from '../firebase/clientApp'

const Fire = () => {

    const [messages, setMessages] = useState([])
    useEffect(()=>{

        messages.forEach(element => {
            console.log(element)
        });

        const coll = collection(db,"messages")

        const q = query(coll , orderBy("time"));
        const unsub = onSnapshot(q,(querySnapshot)=>{
            setMessages(querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id,time:doc.data().time?.toDate().getTime()})))
        });
        return unsub;

        
    },[messages])

    
  return (
    <div>
        
    </div>
  )
}

export default Fire