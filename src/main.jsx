import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Router from "./Router/Router.jsx";
import "./index.css";
const queryClient = new QueryClient();

const stripePromise = loadStripe('pk_test_51NFr2tKPWyqKt9TkgGg99fxYn7SXev5xfLg6SmLXXQZZiQ3kbA0qs47a64ZW4ZioMgGYk97mr9ebe43FgkqNJGYk00KiHAzALI');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
