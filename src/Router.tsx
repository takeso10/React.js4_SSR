import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Edit from './Edit';

export const Router=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <>
                    <Route path='/React.js4_SSR' element={<App />}></Route>
                    <Route path='/React.js4_SSR/edit' element={<Edit />}></Route>
                </>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
