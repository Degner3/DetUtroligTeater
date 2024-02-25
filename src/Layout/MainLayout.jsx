import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer"
import style from "./MainLayout.module.scss"
import { Navigation } from "../Components/Navigation/Navigation";

export const MainLayout = () => {
  return (
    <div className={style.layout}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
