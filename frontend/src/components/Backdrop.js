/**
 * The Backdrop component is a clickable div that is only displayed when the "show" prop is true.
 * @returns The Backdrop component is being returned. Specifically, it returns a div element with the
 * class name "backdrop" and an onClick event listener that triggers the click function passed as a
 * prop, but only if the show prop is true.
 */
import "./Backdrop.css";

const Backdrop = ({ click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
