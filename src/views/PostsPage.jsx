import React, { useState, useEffect } from 'react';

import { Search } from "../components/Search"
import { Posts } from "../components/Posts"
import { loadPosts } from "../utils/loadPosts"

function PostsPage() {
    var   [count, setCount]   = useState(3)
    const [isDesabled, setIsDisabled] = useState(false)
    const [posts, setPosts]   = useState([])
    const [search, setSearch] = useState("")

    const onChange = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    useEffect(() => {
        load()
    })

    const load = async () => {
        const postsAndPhotos = await loadPosts()

        const filtedPosts = postsAndPhotos.slice(0, count)
        if(count >= postsAndPhotos.length) {
            setIsDisabled(true)
        }
        setPosts(filtedPosts)
        
    }
    const loadMore = () => {
       setCount(count = count + 3)
    }

    const filter = posts.filter(post => {
        return post.title.toLowerCase()
                   .includes(search.toLowerCase())
    })
       
  return (
    <>
     <h2>Exemplo: pagina com posts</h2>
     <Search 
       value={search}
       onChange={onChange}
     />
     {search ? <Posts posts={filter}/> : <Posts posts={posts} />}
     <button onClick={loadMore} disabled={isDesabled}>Carregar mais posts</button>
    </>
  );
}

export default PostsPage;