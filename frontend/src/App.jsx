import "./App.css";
import Adduser from "./components/Adduser";
import User from "./components/getUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdatUser from "./components/updatUser";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <User /> },
    {
      index: true,
      path: "/add",
      element: <Adduser />,
    },
    { path:"/updatuser/:id",
      element:<UpdatUser/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
