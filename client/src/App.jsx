import { RouterProvider,createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Layout from "./Layout";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import { makeRequest } from "./axios";

const queryClient = new QueryClient();

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const { user,loginUser } = useAuth();

  useEffect(() => {
    if (!user) {
      async function fetchData(){
        try {
          const res = await makeRequest.get(`/users/refetch`);
          loginUser(res.data)
        } catch (error) {
          console.log(error);
          if(error.response.status === 401) navigate('/');
        }
      }
      fetchData();
    }
  }, [user, navigate]);

  // Render children only if the user is logged in
  return user ? children : null;
}

const router = createBrowserRouter([
  {
    path:'/',
    index:true,
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {  
  path:'/home',
  element:(
    <ProtectedRoute>
      <Layout>

      </Layout>
   </ProtectedRoute>),
  children:[
    {
      index:true,
      element:<Home/>
    }
  ]
},
  {  
  path:'/profile/',
  element:(
    <ProtectedRoute>
      <Layout>

      </Layout>
   </ProtectedRoute>),
  children:[
    {
      path:':userId',
      element:<Profile/>
    }
  ]
}
])

function App() {
  return (
     <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
     </QueryClientProvider>
  );
}

export default App;