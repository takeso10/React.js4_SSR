import React from 'react'
import './Edit.css';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import {useForm,SubmitHandler} from 'react-hook-form'

function Edit(){
    const navigate = useNavigate()
    const state = useLocation().state
    const {register, handleSubmit,}=useForm<Profile>();

    
    
    type Profile = {
        inputName:string;
        inputAge:number;
        inputHobby:string;
        inputMajor:string;
        inputMessage:string;
    }

    const onSubmit:SubmitHandler<Profile>=(data)=>{
        console.log(data)
        navigate('/',{state:{data}})
    }

    return(
        <div className="self-introduction">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="header">プロフィール</h1>
                <div className='form'>
                    <p>名前</p>
                    <input 
                        type='text' 
                        {...register('inputName',{
                            required:{
                                value:true,
                                message:'入力が必須の項目です。',
                        }})}
                        className='inputName'
                        defaultValue={state.profile.inputName}
                    />
                    <p>年齢</p>
                    <input 
                        type='number'
                        className='inputAge' 
                        defaultValue={state.profile.inputAge}
                        {...register('inputAge',{
                        required:{
                            value:true,
                            message:'入力が必須の項目です。',
                        }})}>
                    </input>
                    <p>趣味</p>
                    <input 
                        type='text'
                        className='inputHobby' 
                        defaultValue={state.profile.inputHobby}
                        {...register('inputHobby',{
                            required:{
                                value:true,
                                message:'入力が必須の項目です。',
                        }})}>
                        </input>
                    <p>専攻</p>
                    <input 
                        type='text' 
                        className='inputMajor' 
                        defaultValue={state.profile.inputMajor}
                        {...register('inputMajor',{
                            required:{
                                value:true,
                                message:'入力が必須の項目です。',
                        }})}></input>
                    <h2>ひとこと</h2>
                    <textarea  
                        className='inputMessage' 
                        defaultValue={state.profile.inputMessage}
                        {...register('inputMessage',{
                            required:{
                                value:true,
                                message:'入力が必須の項目です。',
                        }})}>
                        </textarea>
                    <br/>
                    <button>更新</button>
                </div>
            </form>
        </div>
    )
}
export default Edit;