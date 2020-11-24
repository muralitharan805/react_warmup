import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafe1() {
  const [loading,setLoding]=useState(true)
  const [err,setErr]=useState('')
  const [post,setPost]=useState({})

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
      setLoding(false)
      setPost(res.data)
      setErr('')
    }).catch(
      error=>{
        setLoding(false)
      setPost({})
      setErr('Something wrong')
      }
    )
  },[])
  return (
    <div>
      {
        loading ? 'Loading...,' : post.title
      }

      {
        err ? err:null
      }
    </div>
  )
}


export default Datafe1
