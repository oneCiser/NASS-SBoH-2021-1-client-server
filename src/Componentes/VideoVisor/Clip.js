import React, {useRef,useEffect} from 'react';


export default function Clip({ url }) {
    const videoRef = useRef();
    const previousUrl = useRef(url);
  
    useEffect(() => {
      if (previousUrl.current !== url && videoRef.current) {
        videoRef.current.load();
        previousUrl.current = url;
      }
    }, [url]);
  
    return (
      <video ref={videoRef}>
        <source src={url || ""} />
      </video>
    );
  }