import axios from 'axios';
import URL from '../configuration/enviroment';
class File{
    constructor(){
        this.URL = URL.base + URL.file;
    }
}