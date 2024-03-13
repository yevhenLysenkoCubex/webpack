import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@/assets/home.svg";
import classes from "./app.module.scss";

export default function App() {
  return (
    <div data-testid="hello">
      <div>{__PLATFORM__}</div>
      cdvdsfdscsdsadsadsaddasdsdasdsadsadas
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      <HomeIcon fill="pink" height={50} width={50} />
      <span className={classes.value}>CLick</span>
      <button type="button" className={classes.button}>
        Click
      </button>
      <Outlet />
    </div>
  );
}
