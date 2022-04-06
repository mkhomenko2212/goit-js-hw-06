const refs = {
    valueEl: document.querySelector("#value"),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const onDekrementCounterValue = () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
};

const onIncrementCounterValue = () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
};

refs.incrementBtn.addEventListener("click", onIncrementCounterValue);
refs.decrementBtn.addEventListener("click", onDekrementCounterValue);