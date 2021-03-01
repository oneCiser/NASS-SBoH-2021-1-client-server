import React, {useState ,useEffect} from 'react';
import {Toast} from 'react-bootstrap';
import './Toasts.css';


export default function Alertas(props) {
    var { toastList, position } = props;
    const [list, setList] = useState(toastList);
    const [showToasts, setShowToasts] = useState({arrayToasts:[]})
    let startToasts = () => {
        var arrayToasts = [];
        toastList.map((toast, i) => {
            arrayToasts.push(true);
            
        })
        setShowToasts({arrayToasts});
    }


    let toggleShow = (event) => {
        //var tempArray = [...showToasts.arrayToasts];
        var tempArray = JSON.parse(JSON.stringify(showToasts.arrayToasts))
        tempArray[parseInt(event.currentTarget.name)] = false;
        setShowToasts({arrayToasts:tempArray});
        
        
    }
    useEffect(() => {
        
        console.log('eefect',toastList)
        setList(toastList)
        startToasts()
        
    }, [toastList]);
    
    return(
        <>
            <div className={`toasts-container  ${position}`}>
                {
                    list.map((toast, i) =>{
                        return (<Toast show={showToasts.arrayToasts[i]}
                            style={{backgroundColor:toast.backgroundColor}}
                            name={i} 
                            key={i} 
                            className={`${position}`}>
                            <Toast.Header 
                                closeButton={false}>
                                <img src={toast.icon} className="rounded mr-2" alt="" />
                                
                                <strong className="mr-auto">{toast.title}</strong>
                                <button name={i} onClick={toggleShow}
                                     type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </Toast.Header>
                            <Toast.Body>{toast.description}</Toast.Body>
                        </Toast>)
                    })
                }
            </div>
        </>
    );
    
} 