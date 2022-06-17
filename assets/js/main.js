//header stat 
const header = document.querySelector(".header")
const white_img = document.querySelector("#white-img")
const blue_img = document.querySelector("#blue-img")
const navs = Array.from(document.querySelectorAll(".header__nav__right__list__list-item__link"))
const burgerLine = Array.from(document.querySelectorAll(".header__nav__burger__menu__line"))
let sticky = header.offsetTop;
blue_img.style.display = "none";
window.addEventListener('scroll', () => {

    if (navs) {
        navs.forEach(element => {
            if (window.pageYOffset - 140 > sticky) {
                burgerLine.forEach((item) => {
                    item.classList.add("line-blue")
                })
                header.classList.add("sticky")
                white_img.style.display = "none"
                blue_img.style.display = "block"
                element.style.color = "black"

                element.addEventListener('mouseover', () => {
                    element.style.color = "#FF931e";
                })
                element.addEventListener('mouseout', () => {
                    element.style.color = "black";
                })
            } else {
                burgerLine.forEach((item) => {
                    item.classList.remove("line-blue")
                })
                header.classList.remove("sticky");
                element.style.color = "#eee"
                white_img.style.display = "block"
                blue_img.style.display = "none"
                element.addEventListener('mouseover', () => {
                    element.style.color = "#FF931e";
                })
                element.addEventListener('mouseout', () => {
                    element.style.color = "#eee";
                })
            }
        });
    } else if (header) {
        header.forEach(element => {
            if (window.pageYOffset - 140 > sticky) {
                header.classList.add("sticky")
                white_img.style.display = "none"
                blue_img.style.display = "block"
                element.style.color = "black"

            } else {
                header.classList.remove("sticky");
                element.style.color = "#eee"
                white_img.style.display = "block"
                blue_img.style.display = "none"

            }
        });
    }

})

//when scroll and change color
// $(document).ready(function() {
//     $(window).scroll(function() {
//         let scroll = $(window).scrollTop();
//         if (scroll > 670) {
//             $(".header__nav__right__list__list-item__link").css("color", "#FF931e");
//         } else {
//             $(".header__nav__right__list__list-item__link").css("color", "black");
//         }
//     })
// })

let btn = $('.header__nav__burger');

btn.on('click', function() {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});


const burgerIcon = document.querySelector(".header__nav__burger")
let aside = document.querySelector(".aside")
burgerIcon.addEventListener("click", (e) => {
    aside.classList.toggle("active-menu")
    if (aside.classList.contains("active-menu")) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "unset"

    }
})


// const img = Array.from(document.querySelectorAll(".news__container__bottom__card__link"))
const links = [...document.getElementsByClassName('news__container__bottom__card')]

links.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.querySelector(".news__container__bottom__card__img__pic").classList.add("zoom")
    })
    item.addEventListener('mouseleave', (e) => {
        e.target.querySelector(".news__container__bottom__card__img__pic").classList.remove("zoom")
    })

})




const tabs = document.querySelectorAll(".footer__container__upper__right__header__nav__list__list-item__link"),
    lists = document.querySelectorAll(".footer__container__upper__right__address__list")

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        lists.forEach((list) => {
            list.classList.remove("active")
        })
        tabs.forEach((tab) => {
            tab.classList.remove("active")
            tab.classList.remove("color")
        })

        lists[index].classList.add("active")
        tabs[index].classList.add("active")

        tabs[index].classList.add("color")
    })
})

const submitButton = document.querySelector(".submit-true")
const inputs = [...document.querySelectorAll(".input-true")];




inputs.forEach((item) => {
    submitButton.addEventListener("click", () => {
        if (item.value.trim() == "") {
            item.classList.add("border")
        } else {

        }
    })

})


const textsArray = [
        "Using variety of accessible data, decision is made on eligibility of any given individual independent on whether they have or not credit history. Complex product system is built with scoring engine and loan management platform as core components.",
        "Enabling embedded finance to all credit-invisible customer segments of a bank – via using sophisticated scoring engine and state-of-the-art loan management platform. Our solution greatly reduces cost of the lending process as well as efficiently managing risks of the same.",
        "Enabling embedded finance to all customer segments of a mobile wallet passing through creditworthiness assessment based on AI/ML driven scoring algorithms. Loan servicing module presents as well.",
        "Buy Now Pay Later solution technically integrated into any ecosystem featuring e-commerce, marketplace etc. for transparent access allowing the end-users to take advantage of making installment-based purchases.",
        "Lending an airtime to MNO customers on the premise that they will pay back with a bit of premium. Built-in machine learning system provides for maximum profitability of the business model.",
        "While scoring engine and set of algorithms are core of all Simbrella’s solutions, it is possible to implement scoring as a standalone component should such a need arise at any of our potential clients – banks, MNO’s, mobile wallets etc.",
        "Worried about protection of sensitive data? We created data anonymizer solution for this particular purpose – it’ll help to carry on all scoring and lending activities in any customer base without disclosing actual customer information."
    ]
    //our products



let products = [...document.querySelectorAll(".products__container__rounds__item__link")]
let text = [...document.querySelectorAll(".products__container__rounds__wrapper__text")]

products.forEach((item, index) => {
    item.addEventListener("mouseover", (e) => {
        item.classList.add("white")
        products.forEach((product, otherIndex) => {
            if (index != otherIndex) {
                product.classList.add("opa-me")
            }
        })
        if (item.classList.contains("products__container__rounds__item__link--1")) {
            text[0].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--2")) {
            text[1].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--3")) {
            text[2].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--4")) {
            text[3].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--5")) {
            text[4].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--6")) {
            text[5].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--7")) {
            text[6].classList.add("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--8")) {
            text[7].classList.add("show-p")
        }
    })
    item.addEventListener("mouseout", (e) => {
        item.classList.remove("white")
        products.forEach((product, otherIndex) => {
            if (index != otherIndex) {
                product.classList.remove("opa-me")
            }
        })
        if (item.classList.contains("products__container__rounds__item__link--1")) {
            text[0].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--2")) {
            text[1].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--3")) {
            text[2].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--4")) {
            text[3].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--5")) {
            text[4].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--6")) {
            text[5].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--7")) {
            text[6].classList.remove("show-p")
        }
        if (item.classList.contains("products__container__rounds__item__link--8")) {
            text[7].classList.remove("show-p")
        }
    })


    // item.addEventListener("mouseover", (e) => {
    //     // text.innertText = textsArray[index];
    //     // console.log("salam");
    // })
    // item.addEventListener("mouseout", (e) => {
    //     // text.innertText = "";
    // })

})





// let item_link = document.querySelectorAll(".products__container__rounds__item__link")
// let text = document.querySelector(".products__container__rounds__wrapper__text")
// item_link.forEach((item, index) => {
//     item.addEventListener("mouseover", (e) => {
//         text.innertText = textsArray[index];
//         console.log("salam");
//     })
//     item.addEventListener("mouseout", (e) => {
//         text.innertText = "";
//     })
// })

let menuLinks = Array.from(document.querySelectorAll(".aside__container__mobile__list__item__link"))
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {

        aside.classList.remove("active-menu")
        btn.toggleClass("not-active")
        document.body.style.overflow = "unset"
    })
})