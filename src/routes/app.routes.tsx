import { Routes, Route, Navigate } from "react-router-dom";
import { Transactions } from "../pages/Transactions";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};