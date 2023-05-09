const minuteOutput = document.querySelector(".minute");
const secondOutput = document.querySelector(".second");
const tiersOutput = document.querySelector(".tiers");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const themeToggler = document.getElementById("themeToggler");

let isPaused = true;


themeToggler.onclick = function (ev) {
    ev.preventDefault();
    let theme = document.documentElement.dataset.theme;

    document.querySelector("#themeToggler .input").classList.toggle("checked");

    console.log(theme);
    if(theme === "Dark") {
        document.documentElement.dataset.theme = "Light"
    } else {
        document.documentElement.dataset.theme = "Dark"
    }
};

startBtn.onclick = function () {
    isPaused = false;
    startBtn.classList.add("disabled");
    pauseBtn.classList.remove("disabled");
};

pauseBtn.onclick = function () {
    isPaused = true;
    startBtn.classList.remove("disabled");
    pauseBtn.classList.add("disabled");
};

resetBtn.onclick = function () {
    clock.reset();
    isPaused = true;
    clock.display(minuteOutput , secondOutput , tiersOutput);
    startBtn.classList.remove("disabled");
    pauseBtn.classList.add("disabled");
}

const clock = {
    minute: 0,
    second:0,
    tiers : 0,

    reset() {
        this.minute = 0;
        this.second = 0;
        this.tiers = 0;
    },

    tic() {
      this.tiers++;
      if(this.tiers === 60) {
          this.second++;
          this.tiers =0;
      }
      if(this.second === 60) {
          this.minute++;
          this.second = 0
      }
    },

    display(minuteOutput , secondOutput , tiersOutput ) {
        minuteOutput.textContent = this.minute.toString().padStart(2, '0');
        secondOutput.textContent = this.second.toString().padStart(2, '0');
        tiersOutput.textContent = this.tiers.toString().padStart(2, '0');
    }
}

setInterval(function () {
   if(!isPaused) {
       clock.tic();
       clock.display(minuteOutput , secondOutput , tiersOutput);
   }
} , 20)

