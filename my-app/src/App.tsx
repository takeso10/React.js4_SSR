import React ,{useEffect, useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const state = useLocation().state
  console.log(state.data.inputName)
  const [profile,setProfile] = useState<Profile>(
    {inputName:"",
    inputAge:0,
    inputHobby:"",
    inputMajor:"",
    inputMessage:"",}
  )
  type Profile = {
    inputName:string;
    inputAge:number;
    inputHobby:string;
    inputMajor:string;
    inputMessage:string;
  }

  useEffect(()=>{
    setProfile(state.data)
  })

  function Edit(): void {
    navigate('/Edit', { state: { profile } });
  } 

  return (
    <div className="self-introduction">
      <h1 className="header">プロフィール</h1>
      <div className='form'>
        <h2 className="name">名前：{profile.inputName}</h2>
        <p >年齢：{profile.inputAge}</p>
        <p>趣味：{profile.inputHobby}</p>
        <p>専攻：{profile.inputMajor}</p>
        <h2>ひとこと</h2>
        <p>{profile.inputMessage}</p>
        <button type='submit' onClick={Edit}>編集</button>
      </div>
    </div>

  );
}

export default App;
