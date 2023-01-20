import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const state = useLocation().state

  return (
    <div className="self-introduction">
      <h1>プロフィール</h1>
      <h2>名前：{state}</h2>
      <p>年齢：</p>
      <p>趣味：</p>
      <p>専攻：</p>
      <h2>ひとこと</h2>
      <p></p>
      <button type='submit' onClick={()=>{navigate('/Edit')}}>編集</button>
    </div>

  );
}

export default App;
