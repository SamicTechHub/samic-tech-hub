import Style from "../styles/loading.module.css";
export default function Loader() {
  return (
    <div className={Style.loader}>
      <div className={Style.spinner}></div>
      <p className={Style.para}>Loading Samic Tech Hub...</p>
    </div>
  );
}