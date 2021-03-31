import Admin from '../../Request/admin';


async function usersProcess(){
    var user=[];
    await Admin.getUser()
    .then((res)=>{
        let arr = [];
        console.log(res);
        
    })}
  /*  .then(async (data)=>{

        
        for (let i = 0; i < data.length; i++) {
          
          let res = await File.getUser(data[i].__id);
        dato.id
        dato.username
        dato.email
        dato.name
        dato.type_user
        dato.maxsize
        
          arr.push(user)
        }
        return arr
      }) 
      .then(arr => user = arr)
      
      console.log('user: ',user)
      return user;

}*/ 
export default usersProcess;