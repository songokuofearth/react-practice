import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import About from './Components/AboutUs.jsx';
import Contact from './Components/Contact.jsx';
import { Github, gitHubInfoLoader } from './Components/Github.jsx';
import { User } from './Components/User.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children:[{
//       path:"",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     },{
//       path:"github",
//       element:<Github/>
//     }]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} loader={gitHubInfoLoader} /> {/* Use loader here */}
        <Route path="user/:userid" element={<User />} />
    </Route>
));

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
