import React from 'react'
import './Edit.css';
import {useNavigate} from 'react-router-dom'

function Edit(){
    const navigate = useNavigate()

    return(
        <div className="self-introduction">
            <form onSubmit={()=>{}}>
                <h1>プロフィール</h1>
                <p>名前</p>
                <input type='text' onChange={()=>{}} className='inputName'></input>
                <p>年齢</p>
                <input type='text'onChange={()=>{}} className='inputAge'></input>
                <p>趣味</p>
                <input type='text'onChange={()=>{}} className='inputHobby'></input>
                <p>専攻</p>
                <input type='text'onChange={()=>{}} className='inputMajor'></input>
                <h2>ひとこと</h2>
                <textarea onChange={()=>{}} className='inputMessage'></textarea>
                <button type='submit' onClick={()=>{navigate('/')}}>更新</button>
            </form>
        </div>
    )
}
export default Edit;