import React, { useEffect, useState } from 'react';
import axios from 'axios';


import phoneImg from "../assets/phone.svg";
import woman from "../assets/woman.svg";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import growingMan from "../assets/growing-up-man.svg";
import growingWoman from "../assets/growing-up-woman.svg";
import Tables from './Tables';


const Card = () => {

    const api = "https://randomuser.me/api/";
    const [user, setUser] = useState([]);
    const [userTitle, setUserTitle] = useState("My Name Is");
    const [userInfo, setUserInfo] = useState("");

    
    const userData = async() => {const dataFirst = await axios(api).then(res => (res.data.results[0]))
        .catch((err) => console.log(err));   
        console.log(dataFirst);
        const {
            name:{title, first, last},
            dob:{age},
            location:{city, country},
            phone,
            picture:{large},
            email,
            gender,
            login:{password}
        } = dataFirst;

        setUser({
            title, first, last, age, city, country, phone, large, email, gender, password 
        });
    };
    const{title, first, last, age, city, country, phone, large, email, gender, password} = user;
    console.log(title);
    useEffect(() => userData(), []);
    
    const addTable = () => {
        console.log("addTable");
    }
   
    return (
        <div className='card-container'>
            <div>
                <img className='personImg' src={large} alt="" />
            </div>
            <div className='topInfo'>
                <p>{userTitle}</p>
                <span>{userInfo}</span>
            </div>
            <div className='infoIcon'>
                <div onMouseEnter={()=>{
                    setUserTitle("My Name Is");
                    setUserInfo(title+" "+first+" "+last);
                }}>
                <img src={gender === "male" ? man : woman} alt="" /></div>

                <div onMouseEnter={()=>{
                    setUserTitle("My Email Is");
                    setUserInfo(email)
                }}><img src={mail} alt="" /></div>

                <div onMouseEnter={()=>{
                    setUserTitle("My Age Is");
                    setUserInfo(age);
                }}><img src={gender === "male" ? growingMan : growingWoman} alt="" /></div>

                <div onMouseEnter={()=>{
                    setUserTitle("My Location Is");
                    setUserInfo(city+" "+country);}}>
                <img src={map} alt="" /></div>

                <div onMouseEnter={()=>{
                    setUserTitle("My Phone Number Is");
                    setUserInfo(phone);}}>
                <img src={phoneImg} alt="" /></div>

                <div onMouseEnter={()=>{
                    setUserTitle("My Password Is");
                    setUserInfo(password);}}>
                <img src={padlock} alt="" /></div>
            </div>
            <div className='buttons'>
                <button onClick={userData}>NEW USER</button>
                <button onClick={addTable}>ADD USER</button>
            </div> <br />
            <Tables {...user} addTable={addTable}/>
        </div>
    )
}

export default Card;
