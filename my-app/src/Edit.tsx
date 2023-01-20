import React ,{useState} from 'react'
import './Edit.css';
import {useNavigate} from 'react-router-dom'

function Edit(){
    const [inputName,setInputName]=useState('')
    const [inputAge,setInputAge]=useState(0)
    const [inputHobby,setInputHobby]=useState('')
    const [inputMajor,setInputMajor]=useState('')
    const [inputMessage,setInputMessage]=useState('')
    const navigate = useNavigate()
    const [profile,setProfile] = useState<Profile>()
    
    type Profile = {
        inputName:string;
        inputAge:number;
        inputHobby:string;
        inputMajor:string;
        inputMessage:string;
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const newProfile : Profile = {
            inputName:inputName,
            inputAge:inputAge,
            inputHobby:inputHobby,
            inputMajor:inputMajor,
            inputMessage:inputMessage,
        }
        setProfile(newProfile)
        console.log(newProfile)
    }

    return(
        <div className="self-introduction">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>プロフィール</h1>
                <p>名前</p>
                <input type='text' onChange={(e)=>{setInputName(e.target.value)}} className='inputName'></input>
                <p>年齢</p>
                <input type='number'onChange={(e)=>{setInputAge(e.target.valueAsNumber)}} className='inputAge'></input>
                <p>趣味</p>
                <input type='text'onChange={(e)=>{setInputHobby(e.target.value)}} className='inputHobby'></input>
                <p>専攻</p>
                <input type='text'onChange={(e)=>{setInputMajor(e.target.value)}} className='inputMajor'></input>
                <h2>ひとこと</h2>
                <textarea onChange={(e)=>{setInputMessage(e.target.value)}} className='inputMessage'></textarea>
                <button type='submit' onClick={()=>{navigate('/',{state:{profile}})}}>更新</button>
            </form>
        </div>
    )
}
export default Edit;