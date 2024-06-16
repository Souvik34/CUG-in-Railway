import { createBrowserRouter } from "react-router-dom"
import Admin from "../Pages/Admin-dashboard/Admin";
import Home from "../Pages/Home/Home";
import Dealer from "../Pages/Dealer-dashboard/Dealer";
import Activate_Deactivate_CUG from "../Components/Dealer/Activate_Deactivate_CUG"
import Providers from "../Components/Admin/Providers"
import App from "../App";
import Activate_Deactivate_Report from "../Components/Admin/Activate_Deactivate_Report"
import Allocation_Wise_Report from "../Components/Admin/Allocation_Wise_Report"
import Allotment_history from "../Components/Admin/Allotment_History"
import CUG_details from "../Components/Admin/CUG_Details"
import CUG_Status_Report from "../Components/Admin/CUG_Status_Report"
import Add_New_CUG from "../Components/Admin/Add_New_CUG"
import Upload_CUG_Bill from "../Components/Admin/Upload_CUG_Bill"
import Upload_New_CUG_Nos from "../Components/Admin/Upload_New_CUG_Nos"
import Allocation_WIse_Report from "../Components/Dealer/Allocation_WIse_Report"
import Plan_Wise_Billing_Report from "../Components/Dealer/Plan_Wise_Billing_Report"
import DealerLogin from "../Pages/Login/DealerLogin"
import AdminLogin from "../Pages/Login/AdminLogin";
import AdminRegistration from "../Pages/Registration/AdminRegistration";
import DealerRegistration from "../Pages/Registration/DealerRegistration";
import Logout from "../Pages/Logout/Logout";
import AdminWelcome from "../Pages/Admin-dashboard/AdminWelcome";
import Create_Dealer from "../Components/Admin/Create_Dealer";


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
                        index: true, // This will render DefaultAdminPage when path is exactly /admin
                        element: <AdminWelcome/>, 
                      },
                      {
                        path:'create_dealer',
                        element:<Create_Dealer/>
                      },
                    {
                        path:'provider',
                        element:<Providers/>
                    },
                    {
                        path:'activate_deactivate_report',
                        element:<Activate_Deactivate_Report/>
                    },
                    {
                        path:'add_new_cug',
                        element:<Add_New_CUG/>
                    },
                    {
                        path:'allocation_wise_report',
                        element:<Allocation_Wise_Report/>
                    },
                    {
                        path:'allotment_history',
                        element:<Allotment_history/>
                    },
                    {
                        path:'cug_details',
                        element:<CUG_details/>
                    },
                    {
                        path:'cug_status_report',
                        element:<CUG_Status_Report/>
                    },
                    {
                        path:'upload_cug_bill',
                        element:<Upload_CUG_Bill/>
                    },
                    {
                        path:'upload_new_cug_nos',
                        element:<Upload_New_CUG_Nos/>
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
                    {
                        path:'allocation_wise_report',
                        element:<Allocation_WIse_Report/>,
                    },
                    {
                        path:'plan_wise_billing_report',
                        element:<Plan_Wise_Billing_Report/>,
                    },

                ]
            },
            {
                path:"/adminLogin",
                element:<AdminLogin/>
            },
            {
                path:"/dealerLogin",
                element:<DealerLogin/>
            },
            {
                path:"/adminRegistration",
                element:<AdminRegistration/>
            },
            {
                path:"/dealerRegistration",
                element:<DealerRegistration/>
            },
            {
                path:"/logout",
                element:<Logout/>
            }
        ]
       }
    ]);
    
    export default router;
    