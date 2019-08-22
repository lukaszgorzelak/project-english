// const wrapper = document.querySelector("wrapper")
// const divall = document.querySelectorAll("div")
const div = document.querySelectorAll("div .tip")
const one = document.querySelector("div .one")

const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
const h1 = document.querySelectorAll('h1')
const input = document.querySelector('input');
const form = document.querySelector("form")

const btnAdd = document.querySelector(".add")
const btnRemove = document.querySelector(".remove")

const btnRandom = document.querySelector(".random")
const spnOptions = document.querySelector("span.options")
const btnResult = document.querySelector(".result")
const textOne = document.querySelector(".textOne")
const txtTranslate = document.querySelector(".textTranslate")
const areaSecond = document.querySelector(".areaSecond")


const showList = () => {
    ul.classList.toggle("develop");
    two.classList.toggle("bordertop");
    form.classList.toggle('visible');
}

one.addEventListener("click", showList)

// dodawanie elementu div one
const addWords = (e) => {

    e.preventDefault();

    if (!textOne.value) {
        alert("Wpisz nowy zwrot")

    } else if (textOne.value) {
        const newWord = document.createElement("li")
        newWord.textContent = textOne.value;
        ul.appendChild(newWord);
        textOne.value = "";
    }
}

btnAdd.addEventListener("click", addWords);

// usuwanie elementu
const removeWords = (e) => {
    e.preventDefault();

    // if (!input.value) {
    //     alert("Najpierw wpisz nowy zwrot")

    // }

    const lastli = document.querySelector('ul>li:last-child');
    ul.removeChild(lastli);
}
btnRemove.addEventListener("click", removeWords)

// doadaj tłumaczenie

const btnaddTranslate = document.querySelector("button.addTranslate");
const writing = document.querySelector(".writing");

const addtranslateSpn = (e) => {

    e.preventDefault();
    console.log("działa");
    if (!txtTranslate.value) {
        alert("Wpisz tłumaczenie")

    }
    if (txtTranslate.value) {
        const spn = document.createElement("li")
        spn.textContent = txtTranslate.value;
        spn.classList.add("lasttranslate");
        ul.appendChild(spn);
        txtTranslate.value = "";

    }
}
btnaddTranslate.addEventListener("click", addtranslateSpn)


// Usuń tłumaczenie z klasy one

const btnremoveTranslate = document.querySelector(".removeTranslate");

const removeTranslate = (e) => {
    e.preventDefault();

    // if (!newInput.value) {
    //     alert("Wpisz tłumaczenie")
    // }

    const newSpan = document.querySelector("ul>li:last-child");

    console.log("działa")
    ul.removeChild(newSpan);
}

btnremoveTranslate.addEventListener('click', removeTranslate)



// interakcja div o klasie two

const two = document.querySelector("div.two")
const second = document.querySelector(".second")
const secondForm = document.querySelector("form.secondform")
const btnItem = document.querySelector(".addItem")
const newItem = document.querySelector(".newitem")
const removeItem = document.querySelector(".removeitem")



const showTwo = () => {
    second.classList.toggle("develop");
    secondForm.classList.toggle('visible');
}

two.addEventListener("click", showTwo)


// dodawanie nowego elementu

const addElement = (e) => {
    e.preventDefault();

    if (!areaSecond.value) {
        alert("Wpisz nowy zwrot")
    }

    if (areaSecond.value) {
        const addli = document.createElement("li")
        addli.textContent = areaSecond.value;
        second.appendChild(addli);
        areaSecond.value = "";
    }
}

newItem.addEventListener("click", addElement)

// usuwanie nowego elementu
const removeElement = (e) => {

    e.preventDefault();


    const lastli = document.querySelector('ul>li:last-child')
    second.removeChild(lastli)
}

removeItem.addEventListener("click", removeElement)

//dodawanie tłumaczenia z .two


const newTranslate = document.querySelector(".newtranslate")
const secondTranslate = document.querySelector(".secondTranslate")


const addTranslate = (e) => {
    e.preventDefault();

    if (!secondTranslate.value) {
        alert("Wpisz tłumaczenie")

    } else if (secondTranslate.value) {
        const addli = document.createElement("li")
        addli.classList.add("lasttranslate");
        addli.innerHTML = secondTranslate.value;
        second.appendChild(addli);
        secondTranslate.value = "";
    }

}

newTranslate.addEventListener("click", addTranslate)

// Usuwanie tłumaczenia z klasy two

const endTranslate = document.querySelector(".endtranslate")


function Translate(e) {
    e.preventDefault();

    // if (!newInput.value) {
    //     alert("Wpisz tłumaczenie")
    // }
    const lastli = document.querySelector('ul>li:last-child')
    second.removeChild(lastli)

}

endTranslate.addEventListener("click", Translate)


// div klasa three

const three = document.querySelector("div .three")
const thirdForm = document.querySelector(".thirdForm")
const thirdUl = document.querySelector(".thirdUl")

const showThree = () => {
    thirdUl.classList.toggle("develop");
    thirdForm.classList.toggle('visible');
}

three.addEventListener("click", showThree)

const areaThird = document.querySelector(".areaThird")
const translateThird = document.querySelector(".translateThird")
const btnThird = document.querySelector(".addthird")
const removeThird = document.querySelector(".removethird")


// dodawanie nowego elementu

const textThird = (e) => {
    e.preventDefault();

    if (!areaThird.value) {
        alert("Wpisz nowy zwrot")
    }

    if (areaThird.value) {
        const addli = document.createElement("li")
        addli.textContent = areaThird.value;
        thirdUl.appendChild(addli);
        areaThird.value = "";
    }
}

btnThird.addEventListener("click", textThird)

// usuwanie nowego elementu
const removeThirdItem = (e) => {

    e.preventDefault();
    const lastli = document.querySelector('ul>li:last-child')
    thirdUl.removeChild(lastli)
}

removeThird.addEventListener("click", removeThirdItem)

//dodawanie tłumaczenia z .two

const btnaddtranslatethird = document.querySelector(".addtranslatethird")
const btnremovetranslatethird = document.querySelector(".removetranslatethird")



const addTranslateThird = (e) => {
    e.preventDefault();

    if (!translateThird.value) {
        alert("Wpisz tłumaczenie")

    } else if (translateThird.value) {
        const addli = document.createElement("li")
        addli.classList.add("lasttranslate");
        addli.innerHTML = translateThird.value;
        thirdUl.appendChild(addli);
        translateThird.value = "";
    }

}

btnaddtranslatethird.addEventListener("click", addTranslateThird)

// Usuwanie tłumaczenia z diva three

function removeTranslateThird(e) {
    e.preventDefault();

    // if (!newInput.value) {
    //     alert("Wpisz tłumaczenie")
    // }
    const lastli = document.querySelector('ul>li:last-child')
    thirdUl.removeChild(lastli)

}

btnremovetranslatethird.addEventListener("click", removeTranslateThird)


// div klasa fourth

const four = document.querySelector("div .four")
const fourthForm = document.querySelector(".fourthForm")
const fourthUl = document.querySelector(".fourthUl")

const showFourth = () => {
    fourthUl.classList.toggle("develop");
    fourthForm.classList.toggle('visible');
}

four.addEventListener("click", showFourth)


const areaFourth = document.querySelector(".areaFourth")
const translateFourth = document.querySelector(".translateFourth")
const btnFourth = document.querySelector(".addfourth")
const removefourth = document.querySelector(".removefourth")
const btnaddTranslateFourth = document.querySelector(".addtranslatefourth")
const btnremoveTranslateFourth = document.querySelector(".removetranslatefourth")

// dodawanie nowego elementu

const textFourth = (e) => {
    e.preventDefault();

    if (!areaFourth.value) {
        alert("Wpisz nowy zwrot")
    }

    if (areaFourth.value) {
        const addli = document.createElement("li")
        addli.textContent = areaFourth.value;
        fourthUl.appendChild(addli);
        areaFourth.value = "";
    }
}
btnFourth.addEventListener("click", textFourth)

// usuwanie nowego elementu
const removeFourthItem = (e) => {

    e.preventDefault();
    const lastli = document.querySelector('ul>li:last-child')
    fourthUl.removeChild(lastli)
}

removefourth.addEventListener("click", removeFourthItem)

//dodawanie tłumaczenia z diva four

const addTranslateFourth = (e) => {
    e.preventDefault();

    if (!translateFourth.value) {
        alert("Wpisz tłumaczenie")

    } else if (translateFourth.value) {
        const addli = document.createElement("li")
        addli.classList.add("lasttranslate");
        addli.innerHTML = translateFourth.value;
        fourthUl.appendChild(addli);
        translateFourth.value = "";
    }

}

btnaddTranslateFourth.addEventListener("click", addTranslateFourth)

function removeTranslateFourth(e) {
    e.preventDefault();

    const lastli = document.querySelector('ul>li:last-child')
    fourthUl.removeChild(lastli)
}

btnremoveTranslateFourth.addEventListener("click", removeTranslateFourth)


// samopiszący się napis
const title = document.querySelector(".title")
let index = 0

const startTyping = (text) => {
    const interval = setInterval(function () {
        if (text.length > index) {
            title.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 200)
}

startTyping('English for Travel');


// hamburger

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")


const showMenu = () => {
    menu.classList.toggle('menulist');

}

hamburger.addEventListener("click", showMenu)



// zakładka QUIZ

const divFive = document.querySelector("div.five")
const divSix = document.querySelector("div.six")

const showContent = () => {
    divSix.classList.toggle("sixvisibility");
}

divFive.addEventListener("click", showContent);


const showOptions = () => {
    const indexAdvice = Math.floor(Math.random() * itemsQuiz.length);
    spnOptions.textContent = `${itemsQuiz[indexAdvice]}`;
    choice.style.display = 'none';
    answear.value = "";

}

btnRandom.addEventListener("click", showOptions)


const answear = document.querySelector(".answear")
const choice = document.querySelector(".choice")
const results = document.querySelector(" button.results")
const score = document.querySelector(".score")
const options = document.querySelector(".options")


const itemsQuiz = ["Excuse me, I'm trying to find the Green Hostel.", 'Przepraszam, próbuję znaleźć Green Hostel?', "How much are the tickets?", "Ile kosztują bilety?", "I would like to hire a car.", "Chciałbym wypożyczyć samochód.", "What time is it?", "Która jest godzina?"];



answear.addEventListener("input", function () {

    if (answear.value === itemsQuiz[1] && options.textContent === itemsQuiz[0] || options.textContent === itemsQuiz[1] && answear.value === itemsQuiz[0] || answear.value === itemsQuiz[2] && options.textContent === itemsQuiz[3] || options.textContent === itemsQuiz[2] && answear.value === itemsQuiz[3] || answear.value === itemsQuiz[4] && options.textContent === itemsQuiz[5] || options.textContent === itemsQuiz[4] && answear.value === itemsQuiz[5] || answear.value === itemsQuiz[6] && options.textContent === itemsQuiz[7] || options.textContent === itemsQuiz[6] && answear.value === itemsQuiz[7]) {

        console.log("działa")
        results.addEventListener("click", showValue = () => {
            choice.style.display = "flex";
            choice.innerHTML = "Dobrze!!!";
            choice.style.color = "Green";
        })

    } else {
        console.log("nie działa")
        score.addEventListener("click", badAnswear = () => {
            choice.style.display = "flex";
            choice.innerHTML = "Źle!!!";
            choice.style.color = "Red";
        })
    }
})