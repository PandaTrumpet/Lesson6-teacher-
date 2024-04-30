import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/store";
export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  //   console.log(deposit(5));
  return (
    <div>
      <p>Balance : {balance}</p>
      {/* <input type="number" /> */}
      <button onClick={() => dispatch(deposit(5))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw credits</button>
    </div>
  );
}
