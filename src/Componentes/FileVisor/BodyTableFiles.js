import 'bootstrap/dist/css/bootstrap.min.css';
import RowTableFiles from './RowTableFiles';

export default function BodyTableFiles(props){
    const {
        titles,
        files,
        onClick
    } = props;
    return(
        // <>
            <tbody>
                {
                    files.map((file, i) => {
                        return (
                            <RowTableFiles 
                                onClick={onClick}
                                keyId={i} 
                                key={i+"-BodyTableFiles-"+file['_id']} 
                                name={i} 
                                titles={titles} 
                                file={file} />
                                )
                    })
                }
            </tbody>
        // </>
    );
}