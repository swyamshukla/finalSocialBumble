import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { MyStore } from "./store/MyStore.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let queryClient = new QueryClient(); // create a client new leads to object

createRoot(document.getElementById("root")).render(
  <Provider store={MyStore}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </Provider>
);
