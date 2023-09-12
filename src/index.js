
import ReactDOM from 'react-dom/client';
import Img from './img';
import './index.css';


const colorstyle={
    backgroundColor:'aqua',
    height:'200px',
    width:'700px',
    borderRadius:'5px',
    border:'2px solid black ',
    paddingLeft:'10px',


}
function Rani(props){
    
    return(
        <>
        <div style={colorstyle}> 
        <h1><b>usign document css</b></h1>
        <h1>hello i am {props.name} ,and i am {props.age} years old.</h1>
        </div>
        </>
    )
}
// destructuring 
function Anjole({name,age}){
    
    return(<>
    <div className='maincontainer'>
        <h1><b>using external css</b></h1>
        <h1>hello i am {name} i am {age} years old</h1></div>

    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className='inligelemtn'>
 <Rani name='rani' age='20'/>
 <Anjole name='harshali' age='21'/>
 </div>
 </>
);


