import { hydrateRoot } from 'react-dom/client';
//import App from './App';
//import Router from './Router';
import Test from './test';
import './index.css';


const container = document.getElementById("root");
hydrateRoot(container!, <Test/>);
