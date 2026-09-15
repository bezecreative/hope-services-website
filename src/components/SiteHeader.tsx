import Nav from "@/components/Nav";
import s from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={s.header}>
      <div className="container">
        <Nav />
      </div>
    </header>
  );
}
