import MainMenu from "pages/MainPage/MainMenu";
import { Route } from "react-router-dom";

export const MainPage = () => {
  return <Route path="/" element={<MainMenu />} />;
};
