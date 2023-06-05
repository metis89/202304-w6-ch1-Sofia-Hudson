import { Display } from "./display";

export function Actions() {
  return (
    <div className="actions">
      <Display></Display>
      <a href="#" className="call activo">
        Call
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
}
