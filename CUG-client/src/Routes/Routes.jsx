import { createBrowserRouter } from "react-router-dom"
import Admin from "../Pages/Admin-dashboard/Admin";
import Home from "../Pages/Home/Home";
import Dealer from "../Pages/Dealer-dashboard/Dealer";
import Activate_Deactivate_CUG from "../Components/Dealer/Activate_Deactivate_CUG";
import App from "../App";
import Providers from "../Components/Admin/Providers";


const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/admin',
                element:<Admin/>,
                children:[
                    {
                        path:'provider',
                        element:<Providers/>
                    }
                ]
            },
            {
                path:'/dealer',
                element:<Dealer/>,
                children:[
                    {
                        path:'activate_deactivate_cug',
                        element:<Activate_Deactivate_CUG/>,
                    },
                ]
            },
            
        ]
       }
    ]);
    
    export default router;
    