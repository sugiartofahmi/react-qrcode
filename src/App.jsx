import Router from "./router";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <MainLayout>
      <RouterProvider router={Router} />
    </MainLayout>
  );
}

export default App;
