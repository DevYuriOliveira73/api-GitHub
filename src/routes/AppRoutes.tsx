import { Route, Routes } from "react-router-dom";
import Search from "../pages/Search";
import DevProfile from "../pages/DevProfile";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/dev-profile" element={<DevProfile />} />
      </Routes>
    </>
  );
}
