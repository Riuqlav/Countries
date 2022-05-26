import React from 'react';
import { PostCard } from './PostCard';

export const Posts = ( {posts} ) => {

    return (
        <>
          <div className="posts-container">
            {posts.map(post => {
              return (
                  <PostCard 
                    key={post.id}
                    cover={post.cover}
                    title={post.title}
                    body={post.body}
                  />
              )
            })}
          </div>
        </>
    )
}