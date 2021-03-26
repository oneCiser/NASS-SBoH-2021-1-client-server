import 'bootstrap/dist/css/bootstrap.min.css';
import RowTableFiles from './RowTableFiles';

export default function BodyTableFiles(props){
    const {
        titles,
        deleteFile,
        renameFile,
        files,
        onClick
    } = props;
    return(
        // <>
            <tbody className="overflow-auto">
                {
                    files.map((file, i) => {
                        return (
                            <RowTableFiles 
                                onClick={onClick}
                                keyId={i} 
                                key={i+"-BodyTableFiles-"+file['_id']} 
                                name={i} 
                                titles={titles} 
                                deleteFile={deleteFile}
                                renameFile={renameFile}
                                file={file} />
                                )
                    })
                }
            </tbody>
        // </>
    );
}