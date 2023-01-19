import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Edit from './Edit';

const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <>
                    <Route path='/' element={<App/>}></Route>
                    <Route path='edit' element={<Edit/>}></Route>
                </>
            </Routes>
        </BrowserRouter>
    )
}
export default Router