import React from "react";

export const PostCard = ({ title, cover, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />

      <div className="post-texts">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
