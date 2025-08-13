import { useMutation, useQueryClient} from '@tanstack/react-query';

import { createUser } from '../api/api';

function PostData() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {  
            queryClient.invalidateQueries({ queryKey: ['users']});
            console.log("user is created", data);  
        },
        onError: (error) => {
            console.log("failed to create the user", error);
        } 
    })  
    const handleSubmit = (event) => {     
        event.preventDefault();  
       const formData = new FormData(event.currentTarget);
        const userData = { 
            name: formData.get('name'),
            email: formData.get('email'),                   
        };
        mutation.mutate(userData)  
        console.log(userData)     
            
    }
    return(
        <> 

        <div>
            <h1>create user</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter the name" name="name" />
            <input type="text" placeholder="enter the email" name="email" />
            <button> Submit </button>
            </form>  
        </div>    
        </>
    )
}  

export default PostData;