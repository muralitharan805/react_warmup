import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetch() {
  const [post,setPost]= useState({})
  const [id,setId]=useState(1)
  const [buttonclick,setNuttonclick]=useState(1)
  const handleOnclick =()=>{
    setNuttonclick(id)
  }
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclick}`).then(
      res=>{
        console.log(res);
        setPost(res.data)
      }
    ).catch(error=>{
      console.log(error);
    })
  },[buttonclick])
  return (
    <div>
      <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}></input>
      <button onClick={handleOnclick}>Click</button>
      <div>
        {post.title}
      </div>
      {/* <ul>
        {
          posts.map(post=>(
            <li key={post.id}>
              {
                post.title
              }
            </li>
          ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetch
