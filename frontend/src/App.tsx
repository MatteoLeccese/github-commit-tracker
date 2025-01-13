import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;