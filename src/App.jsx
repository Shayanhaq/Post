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
        <button><RiHome2Line /></button>
        <button><PiVideoLight /></button>
        <button><HiUserGroup /></button>
        <button><IoIosNotificationsOutline /></button>
      </div>

      <div className="navbar-profile">
        <img 
          src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/393357790_3644106222502514_9176325849097779353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFrSVX9unn2AkSYrdMTN78PrOvwexmTxwWs6_B7GZPHBTMjIoHm6pj7EXwHTIj7k46wQqe9AsWkmgqJyzvjS3vz&_nc_ohc=1rI-QGy3eQIQ7kNvgEdY4BI&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AXSazHTDoI5cMnKQF9Td7pm&oh=00_AYBWtPiD9B8PiYrazDWaMLjZTF3aIMsEh0tu9hGm0rVRUw&oe=67255177" 
          alt="Profile" 
        />
      </div>
    </div>
  );
}

function Post(props) {
  console.log("Props: ", props);
  
  return (
    <div className="main">
      <div className="post-container">
        <div className="post-header">
          <div className="post-user-detail">
            <img 
              src={props.profilePhoto} 
              alt="Profile" 
              className="dp" 
              id="my-id" 
            />
            <div>
              <h3>{props.name}</h3>
              <span>1 min ago</span>
            </div>
          </div>
          <SlOptions />
        </div>

        <p>{props.postCaption}</p>

        {props.postImage ? 
          <img 
            src={props.postImage} 
            alt="Post" 
            className="post-photo" 
            id="my-id" 
          />: null
        }

        <div className="react">
          <FcLike /> Like
          <BiCommentDetail /> Comment
          <IoMdShareAlt /> Share
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post 
          name="Shayan Haq"
          profilePhoto="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/393357790_3644106222502514_9176325849097779353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFrSVX9unn2AkSYrdMTN78PrOvwexmTxwWs6_B7GZPHBTMjIoHm6pj7EXwHTIj7k46wQqe9AsWkmgqJyzvjS3vz&_nc_ohc=1rI-QGy3eQIQ7kNvgEdY4BI&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AXSazHTDoI5cMnKQF9Td7pm&oh=00_AYBWtPiD9B8PiYrazDWaMLjZTF3aIMsEh0tu9hGm0rVRUw&oe=67255177"
          postCaption="Tranquilo✨"
          postImage="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/463781803_3921922948054172_4500723885268983320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-U4-iUKFyhsH5Lws9ZK5qO3eiWUWLwnA7d6JZRYvCcHQGUTw5EYsXb9Za0sVh9o6SYFq2MzGN8Ewn_zqw-9ME&_nc_ohc=l4sYmhs6LdsQ7kNvgH1vTMa&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=APO5XfBrdNU5jwDXQBQB18G&oh=00_AYBh1Wa0TUq-Bt-ETYpNJrD4qk6fRVL9hy9cVPXgO8dLsQ&oe=67255B65"
        />
        <Post 
          name="Angle Priya"
          profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRzVEuohggxivBi3YpjpyKApAQs1I9ffpPQ&s"
          postCaption="Fāsle aise bhī hoñge ye kabhī sochā na thā 
                        Sāmne baiThā thā mere or vo merā na thā
"
          postImage=""
        />
       
        <Post 
          name="Chahat Fatah Ali Khan"
          profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2i30yG-O1SkuQ2Ydu4NfGb0ed0YC_wW2Ng&s"
          postCaption="Bado-Badi🤡"
          postImage="https://ih1.redbubble.net/image.5109944986.7611/st,small,507x507-pad,600x600,f8f8f8.jpg"
        />
        <Post 
          name="Shahbaz Shareef"
          profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFh7k2iZHW8_Wo709cKo7BXy7T32raosg6g&s"
          postCaption="Dekhain.! Main Yahn Maangny Nh Aya😝 "
          postImage="https://images.moneycontrol.com/static-mcnews/2022/04/pjimage-2-2.jpg"
        />
        <Post 
          name="Cutie piee"
          profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjn9frBfz_L05gV3wiDUShGPrkiV3AkRXHWg&s"
          postCaption="Maiñ Ne Har Baar Tujh Se Milte Waqt
                       Tujh Se Milne Kī Aarzū Kī Hai.😶😑😥 
                       Tere Jaane Ke Ba.ad Bhī Maiñ Ne
                       Terī Ḳhushbū Se Guftugū Kī Hai☹️😑"
          
        />
        <Post 
          name="Fakhar Zaman "
          profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV1Ye_PsHL4GA1kHYDbsRk7ArejtCTWQYAQ&s"
          postCaption="Retairment💔😞"
          postImage="https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/r6yewwuow0i6t2nkoou7"
        />
        <Post 
          name="Shayan haq"
          profilePhoto="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/393357790_3644106222502514_9176325849097779353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFrSVX9unn2AkSYrdMTN78PrOvwexmTxwWs6_B7GZPHBTMjIoHm6pj7EXwHTIj7k46wQqe9AsWkmgqJyzvjS3vz&_nc_ohc=1rI-QGy3eQIQ7kNvgEdY4BI&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AXSazHTDoI5cMnKQF9Td7pm&oh=00_AYBWtPiD9B8PiYrazDWaMLjZTF3aIMsEh0tu9hGm0rVRUw&oe=67255177"
          postCaption="Pehla-Pyar😍"
          postImage="https://img.freepik.com/premium-photo/collection-musical-instruments-including-musical-instrument_1074212-53262.jpg?w=740"
        />
        <Post 
          name="Ahmad Faraz"
          profilePhoto="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/ahmad-faraz.png "
          postCaption="Ranjish hī sahī dil hī dukhāne ke liye aa 
                       a phir se mujhe chore ke jaane ke liye a"
          
        />
        <Post 
          name="Jaun Elia"
          profilePhoto="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/jaun-eliya.png"
          postCaption="Kaun Is Ghar Kī Dekh-Bhāl Kare Roz Ik Chez TuuT Jaatī Hai💔😞"
          
        />
      </div>
    </>
  );
}

export default App;
