import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Main from "../Pages/Main";


const routes = [
    {
      path: '/',
      element: <Main/>,
      errerElement: <div></div>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },


      ]
    },
  ]


export default routes