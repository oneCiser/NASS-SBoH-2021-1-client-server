import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './RowTableFiles.css';
export default function RowTableFiles(props){
    const {
        titles,
        file,
        keyId,
        onClick
    } = props;
    var icon = "";
    if(file.children){
        icon = "folder";
    }
    else{
        icon = "file";
    }
    
    return(
        <>
            <tr>
                <td width="10px">
                    {
                        icon == "folder" ? (<Icon.Folder size={20}/>) : 
                        (<Icon.FileEarmark size={20}/>)
                    }
                </td>
                {
                    titles.map((title, i) => {
                        if(title == "name"){
                            return (
                                <td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']} 
                                    className="name-file">
                                    <a className="name-file-a" onClick={() => onClick(keyId, file)}>
                                        {
                                            file[title]
                                        }
                                    </a>

                                    
                                </td>)
                        }
                        return (<td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']}>
                                    {
                                        file[title]
                                    }
                                </td>)
                    })
                }
            </tr>
        </>
    );
}