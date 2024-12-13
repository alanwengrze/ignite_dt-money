import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../contexts/AuthContext";
import { TransactionsProvider } from "../contexts/TransactionsContext";

export const Routes = () => {
  const { data } = useAuth();
  return (
    <BrowserRouter>
    {
      data.user ? 
      (
        <TransactionsProvider>
          <AppRoutes />
        </TransactionsProvider>
      ) 
      : 
      (<AuthRoutes />)
    }
    </BrowserRouter>
  );
};