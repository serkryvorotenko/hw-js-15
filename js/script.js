const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const showButton = document.getElementById('show');
const resultParagraph = document.getElementById('result');

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        return(this.step);
    }
};

// ladder.up().up().down().showStep();


plusButton.addEventListener("click", function () {
    ladder.up().up();
    resultParagraph.innerText=ladder.showStep();
})
minusButton.addEventListener("click", function () {
    ladder.down().down();
    resultParagraph.innerText=ladder.showStep();
})
showButton.addEventListener("click", function () {
    alert(ladder.showStep());
})


