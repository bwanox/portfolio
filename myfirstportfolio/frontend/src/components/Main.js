import React,{ useState ,useEffect} from 'react';
import './css/Main.css';

const Main = () => {
    const [message, setMessage] = useState('');
    const Message="Hello, welcome to my portfolio! I'm Bilal Sahili"
    useEffect(() =>{
        let i =0;
        const typing=setInterval(() =>{
            if(i < Message.length-1){
                setMessage(prevMessage=>prevMessage + Message[i]);

                i++;
            }else{
                clearInterval(typing);
            }},100);
            return ()=>clearInterval(typing);
    
        },[]);
    return (
        <div className="Main">
            <div className="head-text">
                <h1 className="text">my portfolio</h1>  
        </div>
        <div className="text-container">
        <div className="welcome-message">{message}</div>
      </div>
      </div>
    );
};
export default Main;