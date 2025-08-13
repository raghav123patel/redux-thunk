import { fetchPostsData } from "../api/api"
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { deleteUser, updateUser } from "../api/api";

function GetData() {
    
   const queryClient = useQueryClient();
    const {isPending, error, data} = useQuery({
        queryKey: ['fetchData'],
        queryFn : fetchPostsData
    })
    
   const deleteMutation = useMutation({
         mutationFn: deleteUser,     
         onSuccess: (id) => {
         queryClient.setQueryData(['fetchData'],(oldData)=>{
            return oldData.filter((item)=>item.id!== id)
             })
               
         },      
         onError: (error) => {
            console.log("failed to delete the user", error);
         }           
   })          
   const updateMutation = useMutation({      
    mutationFn: updateUser,
    onSuccess: (updatedData, id) => {
        queryClient.setQueryData(['fetchData'], (oldData) => {
          return oldData.map((item,index) => (
            item.id === id ? updatedData : item
           ))
        }          
             
        )
    },          
    onError: (error) => {
        console.log("failed to update the data", error);
    }
   })
   const handleDelete = (id) => {
        
        deleteMutation.mutate(id);         
         
   }
   const handleUpdate = (id) => {
        
         updateMutation.mutate(id);    
   }
if(isPending) return 'Loading';
if(error) return 'an error is occured in fetching the api' + error.message;
   
return(             
    <>
    <div>   
    <h1> Fetching api data through react query</h1> 
    <h4> {data.name}</h4>                    
    <h4> {data.body}</h4>                                    

    </div>            
     <div>
        <ul> 
            
            {data.map((item,index) => (
                <li key={index}> {item.name} <br/> {item.body} <br/> <button onClick={() => handleDelete(item.id)}>Delete</button> <button onClick={() => handleUpdate(item.id)}>Update</button></li>    
                
                  
    
                
                   
            ))}
        </ul>   
     </div>  
    </>
)
}
export default GetData;