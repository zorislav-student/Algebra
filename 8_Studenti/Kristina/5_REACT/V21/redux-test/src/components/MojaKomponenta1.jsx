import { useSelector, useDispatch } from "react-redux";

export default function MojaKomponenta1() {
  const brojac = useSelector((skl) => skl.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Moja komponenta 1</h2>
      <p>Moja komonenta koristi Redux store: {brojac}</p>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
