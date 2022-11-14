import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Navbar } from "./components";
import { IndexPage, ViewPage } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "view",
      element: <ViewPage />,
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
