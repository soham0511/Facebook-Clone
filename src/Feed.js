import React from "react";
import MessageSender from "./MessageSender";
import "./Feed.css";
import Post from "./Post.js";
import StoryReel from "./StoryReel";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://imgr.search.brave.com/50nXxz9I0Cm2mwRQ5WwWaqcSU3Zb3o0Si2JcwJdIauE/fit/325/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/alN2eHduOTJ3dWhC/S1BjTW1RVzFRSGFL/eSZwaWQ9QXBp"
        message="YO! Let's Go!!!"
        timestamp="timestamp"
        username="ssrimany"
        image="https://imgr.search.brave.com/d4B-3eACQmHS83yjts3cZHdvHPhX2OuOVUsi9_nrrWk/fit/379/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/ZFp4MUcyejV6RzBr/cnFtUjU1ZjF3SGFK/USZwaWQ9QXBp"
      />
    </div>
  );
}

export default Feed;
