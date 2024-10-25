// import { useState } from 'react'
// import { BiCommentDetail } from "react-icons/bi"
// import { FcLike } from "react-icons/fc"
// import { IoMdShareAlt } from "react-icons/io"
// import { SlOptions } from "react-icons/sl"
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { RiHome2Line } from "react-icons/ri";
// import { PiVideoLight } from "react-icons/pi";
// import { HiUserGroup } from "react-icons/hi";
// import { FaFacebookF } from "react-icons/fa";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div className="navbar">
//       {}
//       <div className="navbar-logo"><FaFacebookF /></div>

//       {}
//       <div className="navbar-links">
//         <a href="#"><RiHome2Line /></a>
//         <a href="#"><PiVideoLight /></a>
//         <a href="#"><HiUserGroup /></a>
//         <a href="#"><IoIosNotificationsOutline /></a>
//       </div>

//       {}
//       <div className="navbar-profile">
//         <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" alt="Profile" />
//       </div>
//     </div>
//     function post() {
      
   
// <div className='main'> 
//        <div className="post-container">
//       <div className="post-header">
//        <div className="post-user-detail">
//         <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" 
//         alt="shayan haq"
//         className="dp"
//         id="my-id"/>
//         <div>
//           <h3>Shayan Haq</h3>
//           <span>1 min ago</span>

//         </div>
//        </div>
//        <SlOptions/>
//       </div>
//      <p>
//      Tranquilo✨

//      </p>
//      <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" alt="" className="post-photo " id="my-id"/>
//      <div className='react'>
//       <FcLike/>Like 
//       <BiCommentDetail/> Comment
//       <IoMdShareAlt/>Share
//      </div>
//      </div>
//           </div>
    
//   )
// }  
// function App() {
//   return (
//   <> <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//       <Post />
//     </div>
    
//   );
// }
// </>

// export default App;


import { useState } from 'react';
import { BiCommentDetail } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { IoMdShareAlt } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import './App.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo"><FaFacebookF /></div>

      <div className="navbar-links">
        <a href="#"><RiHome2Line /></a>
        <a href="#"><PiVideoLight /></a>
        <a href="#"><HiUserGroup /></a>
        <a href="#"><IoIosNotificationsOutline /></a>
      </div>

      <div className="navbar-profile">
        <img 
          src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" 
          alt="Profile" 
        />
      </div>
    </div>
  );
}


function Post() {
  return (
    <div className='main'>
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img 
            src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" 
            alt="Shayan Haq"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>Shayan Haq</h3>
            <span>1 min ago</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>Tranquilo✨</p>

      <img 
        src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=GlU2T5jiRXQQ7kNvgH3TRMM&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A2zZCgpbBsVlhMS-97WebRm&oh=00_AYDJzZkCnHvl3AF_QFx0LtcaPMYVzI3n0uVTQdY1yOhnfw&oe=672166E5" 
        alt="Post" 
        className="post-photo" 
        id="my-id"
      />

      <div className="react">
        <FcLike /> Like
        <BiCommentDetail /> Comment
        <IoMdShareAlt /> Share
      </div>
    </div></div>
  );
}


function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default App;
