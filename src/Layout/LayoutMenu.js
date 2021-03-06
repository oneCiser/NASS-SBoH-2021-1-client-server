import React from 'react';
import {Menu} from '../Componentes/Menu';
import {Auth} from "../Request";
export default function LayoutMenu({ component: Component, ...rest }){
    const user = Auth.getUser();
    return(
        <>
            <Menu user={user}/>
        </>
    );
}