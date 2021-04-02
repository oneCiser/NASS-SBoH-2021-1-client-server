import React, {useState, useEffect} from 'react';
import HeadTableVideo from './HeadTableVideo';
import BodyTableVideo from './BodyTableVideo';
import {
    Table
} from 'react-bootstrap';
export default function TableVideo(props){
    const {
        videos,
        titles,
        onClick
    } = props;
    return(
        <>{videos &&
            <Table >
                <HeadTableVideo 
                    titles={titles}/>
                <BodyTableVideo 
                    videos={videos} 
                    titles={titles}
                    onClick={onClick}/>
            </Table>
            }        
        </>
    );
}