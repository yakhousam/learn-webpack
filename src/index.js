import "./main.css";
import { sum } from "./modules/sum";

const btn = document.getElementById("btn_sum");

btn.addEventListener("click", calculate);

function calculate() {
  const a = input_a.value;
  const b = input_b.value;
  const result = sum(a, b);
  console.log("result =", result);
  result_id.textContent = result;
}
