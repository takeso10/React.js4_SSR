import {useState} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
//import'./test.css';
function Test(){
    const {register, handleSubmit,}=useForm<Profile>();
    type Profile = {
      inputName:string;
      inputAge:number;
      inputHobby:string;
      inputMajor:string;
      inputMessage:string;
    }

    const [profile,setProfile] = useState<Profile>(
        {inputName:"",
        inputAge:0,
        inputHobby:"",
        inputMajor:"",
        inputMessage:"",}
    )

    const onSubmit:SubmitHandler<Profile>=(data)=>{
      console.log(data)
      setProfile(data)
    }

    return(
        <>
        <h1>プロフィール</h1>
        <div className='form'>
          <h2 className="name">名前：{profile.inputName}</h2>
          <p >年齢：{profile.inputAge}</p>
          <p>趣味：{profile.inputHobby}</p>
          <p>専攻：{profile.inputMajor}</p>
          <h2>ひとこと</h2>
          <p>{profile.inputMessage}</p>
        </div>
        <div className="self-introduction">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="header">編集</h2>
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
                        defaultValue={profile.inputName}
                    />
                    <p>年齢</p>
                    <input 
                        type='number'
                        className='inputAge' 
                        defaultValue={profile.inputAge}
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
                        defaultValue={profile.inputHobby}
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
                        defaultValue={profile.inputMajor}
                        {...register('inputMajor',{
                            required:{
                                value:true,
                                message:'入力が必須の項目です。',
                        }})}></input>
                    <h2>ひとこと</h2>
                    <textarea  
                        className='inputMessage' 
                        defaultValue={profile.inputMessage}
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
        </>
    )
}
export default Test;