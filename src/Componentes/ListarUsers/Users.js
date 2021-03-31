import Admin from '../../Request/admin';


async function usersProcess(){
    var user=[];
    await Admin.getUser()
    .then((res)=>{
        console.log(res);
    })

}
export default usersProcess;