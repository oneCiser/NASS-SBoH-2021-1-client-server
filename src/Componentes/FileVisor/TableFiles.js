import 'bootstrap/dist/css/bootstrap.min.css';
import './TableFiles.css';
import React, {useState, useEffect} from 'react';
import {
    Table
} from 'react-bootstrap';
import HeadTableFiles from './HeadTableFiles';
import BodyTableFiles from './BodyTableFiles';
export default function TableFiles(props){
    const {
        titles,
        files,
        onClick
    } = props;

    return(
        <>
        <div className="overflow-auto">
            <Table >
                <HeadTableFiles titles={titles}/>
                <BodyTableFiles
                    onClick={onClick} 
                    titles={titles} 
                    files={files} />
            </Table>
        </div>

        </>
    );
}