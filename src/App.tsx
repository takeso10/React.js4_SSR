import {useEffect, useState} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const state = useLocation().state
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
    if(state===null){

    }else{
      setProfile(state.data)
    }
  })
  
  
  

  
  function Edit(): void {
    navigate('/React.js4_SSR/Edit', { state: { profile } });
  } 
  
  

  return (
    <div className="self-introduction">
      <h2 className="header">プロフィール</h2>
      <div className='form'>
        <h3 className="name">名前：{profile.inputName}</h3>
        <p >年齢：{profile.inputAge}</p>
        <p>趣味：{profile.inputHobby}</p>
        <p>専攻：{profile.inputMajor}</p>
        <h3>ひとこと</h3>
        <p>{profile.inputMessage}</p>
        <button type='submit' onClick={Edit}>編集</button>
      </div>
    </div>

  );
}

export default App;
