import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import "./index.scss";
import { Suspense } from "react";
import { LazyAboutPage } from "@/pages/about/about.lazy";
import { LazyShopPage } from "@/pages/shop/shop.lazy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading...."}>
            <LazyAboutPage />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading...."}>
            <LazyShopPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
