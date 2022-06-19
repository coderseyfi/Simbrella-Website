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


let rounds = Array.from(document.querySelectorAll(".products__container__rounds__item"))
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1400) {
        rounds.forEach((item) => {
            item.classList.add("seem");
        });
    }
});



let submitButton = document.querySelector(".submit-true")
const inputs = Array.from(document.querySelectorAll(".input-true"));
const success = document.querySelector(".conformity__container__right__form__success")
const formInves = document.querySelector(".conformity__container__right__form__vacancy")

inputs.forEach((item, index) => {
    submitButton.addEventListener("click", (e) => {
        if (item.value.trim() == "") {
            item.classList.add("border")
            if (success && formInves) {
                success.style.display = "none";
                formInves.style.display = "block";
            }
        } else if (item.value.trim() != "") {
            item.classList.remove("border")
            if (success && formInves) {
                success.style.display = "block";
                formInves.style.display = "none";
            }
        }
    })
})



const burgerIcon = document.querySelector(".header__nav__burger")
let aside = document.querySelector(".aside")
if (burgerIcon) {
    burgerIcon.addEventListener("click", (e) => {
        aside.classList.toggle("active-menu")
        if (aside.classList.contains("active-menu")) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "unset"
        }
    })
}

let btn = $(".header__nav__burger");
if (burgerIcon) {

    btn.on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
    });
}

let teamClose = document.querySelector(".team__close")
if (teamClose) {
    teamClose.addEventListener("click", () => {
        teamPhoneExecutive.classList.toggle("show-team")
        document.body.style.overflowY = "unset"
    })
}




let menuLinks = Array.from(document.querySelectorAll(".aside__container__mobile__list__item__link"))
if (menuLinks) {

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            aside.classList.remove("active-menu")
            btn.toggleClass("not-active")
            document.body.style.overflowY = "unset"
        })

    })
}


let teamLink = document.querySelector("#team-phone") //link
let teamPhoneExecutive = document.querySelector(".team")
if (teamLink) {
    teamLink.addEventListener("click", () => {
        teamPhoneExecutive.classList.toggle("show-team");
        document.body.style.overflowY = "hidden"
    })
}


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
        text[index].classList.add("show-p")
    })
    item.addEventListener("mouseout", (e) => {
        item.classList.remove("white")
        products.forEach((product, otherIndex) => {
            if (index != otherIndex) {
                product.classList.remove("opa-me")
            }
        })
        text[index].classList.remove("show-p")

    })

})








let Madagascar = document.querySelector("#MG");
let circleMadagascar = document.querySelector('circle[data-city="MG"]');
let gCircleMG = document.querySelector('g circle[data-city="MG"] ');
const flag_img = document.querySelector(".map__wrapper__container__flags__img");
const flag_name = document.querySelector(".map__wrapper__container__flags__text");
let flags = document.querySelector(".map__wrapper__container__flags");
if (Madagascar) {
    Madagascar.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "590.299px";
        flags.style.left = "744.594px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/MG.png";
        flag_name.textContent = "Madagascar";
        this.style.fill = "#FF931E";
        circleMadagascar.style.fill = "white";
        gCircleMG.style.fill = "white";
    });
    Madagascar.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleMadagascar.style.fill = "#FF931E";
        gCircleMG.style.fill = "#FF931E";
    });
    circleMadagascar.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "590.299px";
        flags.style.left = "744.594px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/MG.png";
        flag_name.textContent = "Madagascar";
        Madagascar.style.fill = "#FF931E";
        circleMadagascar.style.fill = "white";
        gCircleMG.style.fill = "white";
    });
    circleMadagascar.addEventListener("mouseout", function() {
        flags.style.display = "none";
        Madagascar.style.fill = "#E5E9F4";
        circleMadagascar.style.fill = "#FF931E";
        gCircleMG.style.fill = "#FF931E";
    });
    //botswana

    let botswana = document.querySelector("#BW");
    let circleBostswana = document.querySelector('circle[data-city="BW"]');
    let gcircleBW = document.querySelector('g circle[data-city="BW"] ');

    botswana.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "599.853px";
        flags.style.left = "666.034px";
        this.style.fill = "#FF931E";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/BW.png";
        flag_name.textContent = "Botswana";
        circleBostswana.style.fill = "white";
        gcircleBW.style.fill = "white";
    });
    botswana.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleBostswana.style.fill = "#FF931E";
        gcircleBW.style.fill = "#FF931E";
    });

    circleBostswana.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "599.853px";
        flags.style.left = "666.034px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/BW.png";
        flag_name.textContent = "Botswana";
        botswana.style.fill = "#FF931E";
        circleBostswana.style.fill = "white";
        gcircleBW.style.fill = "white";
    });
    circleBostswana.addEventListener("mouseout", function() {
        flags.style.display = "none";
        botswana.style.fill = "#E5E9F4";
        circleBostswana.style.fill = "#FF931E";
        gcircleBW.style.fill = "#FF931E";
    });
    //uaganda
    let uganda = document.querySelector("#UG");
    let circleUG = document.querySelector('circle[data-city="UG"]');
    let gcircleUG = document.querySelector('g circle[data-city="UG"] ');

    uganda.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "518.108px";
        flags.style.left = "695.759px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/UG.png";
        flag_name.textContent = "Uganda";
        this.style.fill = "#FF931E";
        circleUG.style.fill = "white";
        gcircleUG.style.fill = "white";
    });
    uganda.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleUG.style.fill = "#FF931E";
        gcircleUG.style.fill = "#FF931E";
    });

    circleUG.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "518.108px";
        flags.style.left = "695.759px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/UG.png";
        flag_name.textContent = "Uganda";
        uganda.style.fill = "#FF931E";
        circleUG.style.fill = "white";
        gcircleUG.style.fill = "white";
    });
    circleUG.addEventListener("mouseout", function() {
        flags.style.display = "none";
        uganda.style.fill = "#E5E9F4";
        circleUG.style.fill = "#FF931E";
        gcircleUG.style.fill = "#FF931E";
    });
    //ethiopiya

    let ethiopiya = document.querySelector("#ET");
    let circleET = document.querySelector('circle[data-city="ET"]');
    let gcircleET = document.querySelector('g circle[data-city="ET"] ');

    ethiopiya.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "493.69px";
        flags.style.left = "718.053px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/ET.png";
        flag_name.textContent = "Ethiopiya";
        this.style.fill = "#FF931E";
        circleET.style.fill = "white";
        gcircleET.style.fill = "white";
    });
    ethiopiya.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleET.style.fill = "#FF931E";
        gcircleET.style.fill = "#FF931E";
    });
    circleET.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "493.69px";
        flags.style.left = "718.053px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/ET.png";
        flag_name.textContent = "Ethiopiya";
        ethiopiya.style.fill = "#FF931E";
        circleET.style.fill = "white";
        gcircleET.style.fill = "white";
    });
    circleET.addEventListener("mouseout", function() {
        flags.style.display = "none";
        ethiopiya.style.fill = "#E5E9F4";
        circleET.style.fill = "#FF931E";
        gcircleET.style.fill = "#FF931E";
    });
    //senegal

    let senegal = document.querySelector("#SN");
    let circleSN = document.querySelector('circle[data-city="SN"]');
    let gcircleSN = document.querySelector('g circle[data-city="SN"] ');

    senegal.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "472.458px";
        flags.style.left = "531.207px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/SN.png";
        flag_name.textContent = "Senegal";
        this.style.fill = "#FF931E";
        circleSN.style.fill = "white";
        gcircleSN.style.fill = "white";
    });
    senegal.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleSN.style.fill = "#FF931E";
        gcircleSN.style.fill = "#FF931E";
    });
    circleSN.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "472.458px";
        flags.style.left = "531.207px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/SN.png";
        flag_name.textContent = "Senegal";
        senegal.style.fill = "#FF931E";
        circleSN.style.fill = "white";
        gcircleSN.style.fill = "white";
    });
    circleSN.addEventListener("mouseout", function() {
        flags.style.display = "none";
        senegal.style.fill = "#E5E9F4";
        circleSN.style.fill = "#FF931E";
        gcircleSN.style.fill = "#FF931E";
    });
    //panama
    let panama = document.querySelector("#PA");
    let circlePN = document.querySelector('circle[data-city="PA"]');
    let gcirclePN = document.querySelector('g circle[data-city="PA"] ');

    panama.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "492.629px";
        flags.style.left = "301.896px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/PA.png";
        flag_name.textContent = "Panama";
        this.style.fill = "#FF931E";
        circlePN.style.fill = "white";
        gcirclePN.style.fill = "white";
    });
    panama.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circlePN.style.fill = "#FF931E";
        gcirclePN.style.fill = "#FF931E";
    });

    circlePN.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "492.629px";
        flags.style.left = "301.896px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/PA.png";
        flag_name.textContent = "Panama";
        panama.style.fill = "#FF931E";
        circlePN.style.fill = "white";
        gcirclePN.style.fill = "white";
    });
    circlePN.addEventListener("mouseout", function() {
        flags.style.display = "none";
        panama.style.fill = "#E5E9F4";
        circlePN.style.fill = "#FF931E";
        gcirclePN.style.fill = "#FF931E";
    });
    //Ecvator
    let ecvator = document.querySelector("#EC");
    let circleEC = document.querySelector('circle[data-city="EC"]');
    let gcircleEC = document.querySelector('g circle[data-city="EC"] ');

    ecvator.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "528.724px";
        flags.style.left = "312.512px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/EC.png";
        flag_name.textContent = "Ecuador";
        this.style.fill = "#FF931E";
        circleEC.style.fill = "white";
        gcircleEC.style.fill = "white";
    });
    ecvator.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleEC.style.fill = "#FF931E";
        gcircleEC.style.fill = "#FF931E";
    });

    circleEC.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "528.724px";
        flags.style.left = "312.512px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/EC.png";
        flag_name.textContent = "Ecuador";
        ecvator.style.fill = "#FF931E";
        circleEC.style.fill = "white";
        gcircleEC.style.fill = "white";
    });
    circleEC.addEventListener("mouseout", function() {
        flags.style.display = "none";
        ecvator.style.fill = "#E5E9F4";
        circleEC.style.fill = "#FF931E";
        gcircleEC.style.fill = "#FF931E";
    });

    //sari goyler

    //aze

    let AZERB = document.querySelector("#AZ");
    let circleAZE = document.querySelector('circle[data-city="AZ"]');
    let halfcircleAZE = document.querySelector('path.half[data-city="AZ"]');
    let halfsAZ = document.querySelectorAll('path.half[data-city="AZ"]');
    let gcircleAZ = document.querySelector('g circle[data-city="AZ"] ');

    AZERB.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "371.603px";
        flags.style.left = "754.149px";
        this.style.fill = "#2D3192";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/AZ.png";
        flag_name.textContent = "Azerbaijan";
        circleAZE.style.fill = "white";
        gcircleAZ.style.fill = "white";
        halfcircleAZE.style.fill = "#fff";
        halfsAZ[1].style.fill = "white";
    });
    AZERB.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleAZE.style.fill = "#2D3192";
        gcircleAZ.style.fill = "#2D3192";
        halfcircleAZE.style.fill = "#FF931E";
        halfsAZ[1].style.fill = "#FF931E";
    });

    circleAZE.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "371.603px";
        flags.style.left = "754.149px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/AZ.png";
        flag_name.textContent = "Azerbaijan";
        AZERB.style.fill = "#2D3192";
        circleAZE.style.fill = "white";
        gcircleAZ.style.fill = "white";
        halfcircleAZE.style.fill = "#fff";
        halfsAZ[1].style.fill = "white";
    });
    circleAZE.addEventListener("mouseout", function() {
        flags.style.display = "none";
        AZERB.style.fill = "#E5E9F4";
        circleAZE.style.fill = "#2D3192";
        gcircleAZ.style.fill = "#2D3192";
        halfcircleAZE.style.fill = "#FF931E";
        halfsAZ[1].style.fill = "#FF931E";
    });
    //zambia

    let zambia = document.querySelector("#ZM");
    let circleZM = document.querySelector('circle[data-city="ZM"]');
    let halfcircleZM = document.querySelector('path.half[data-city="ZM"]');
    let halfsZM = document.querySelectorAll('path.half[data-city="ZM"]');
    let gcircleZM = document.querySelector('g circle[data-city="ZM"] ');

    zambia.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "571.189px";
        flags.style.left = "677.712px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/ZM.png";
        flag_name.textContent = "Zambia";
        this.style.fill = "#2D3192";
        circleZM.style.fill = "white";
        gcircleZM.style.fill = "white";
        halfcircleZM.style.fill = "#fff";
        halfsZM[1].style.fill = "white";
    });
    zambia.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleZM.style.fill = "#2D3192";
        gcircleZM.style.fill = "#2D3192";
        halfcircleZM.style.fill = "#FF931E";
        halfsZM[1].style.fill = "#FF931E";
    });

    circleZM.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "571.189px";
        flags.style.left = "677.712px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/ZM.png";
        flag_name.textContent = "Zambia";
        zambia.style.fill = "#2D3192";
        circleZM.style.fill = "white";
        gcircleZM.style.fill = "white";
        halfcircleZM.style.fill = "#fff";
        halfsZM[1].style.fill = "white";
    });
    circleZM.addEventListener("mouseout", function() {
        flags.style.display = "none";
        zambia.style.fill = "#E5E9F4";
        circleZM.style.fill = "#2D3192";
        gcircleZM.style.fill = "#2D3192";
        halfcircleZM.style.fill = "#FF931E";
        halfsZM[1].style.fill = "#FF931E";
    });

    //nigerya

    let nigerya = document.querySelector("#NG");
    let circleNG = document.querySelector('circle[data-city="NG"]');
    let halfcircleNG = document.querySelector('path.half[data-city="NG"]');
    let haflsNG = document.querySelectorAll('path.half[data-city="NG"]');
    let gcircleNG = document.querySelector('g circle[data-city="NG"] ');

    nigerya.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "492.629px";
        flags.style.left = "609.767px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/NG.png";
        flag_name.textContent = "Nigeria";
        this.style.fill = "#2D3192";
        circleNG.style.fill = "white";
        gcircleNG.style.fill = "white";
        halfcircleNG.style.fill = "#fff";
        haflsNG[1].style.fill = "white";
    });
    nigerya.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleNG.style.fill = "#2D3192";
        gcircleNG.style.fill = "#2D3192";
        halfcircleNG.style.fill = "#FF931E";
        haflsNG[1].style.fill = "#FF931E";
    });

    circleNG.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "492.629px";
        flags.style.left = "609.767px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/NG.png";
        flag_name.textContent = "Nigeria";
        nigerya.style.fill = "#2D3192";
        circleNG.style.fill = "white";
        gcircleNG.style.fill = "white";
        halfcircleNG.style.fill = "#fff";
        haflsNG[1].style.fill = "white";
    });
    circleNG.addEventListener("mouseout", function() {
        flags.style.display = "none";
        nigerya.style.fill = "#E5E9F4";
        circleNG.style.fill = "#2D3192";
        gcircleNG.style.fill = "#2D3192";
        halfcircleNG.style.fill = "#FF931E";
        haflsNG[1].style.fill = "#FF931E";
    });

    //Ghana

    let ghana = document.querySelector("#GH");
    let circleGH = document.querySelector('circle[data-city="GH"]');
    let halfcircleGH = document.querySelector('path.half[data-city="GH"]');
    let halfsGH = document.querySelectorAll('path.half[data-city="GH"]');
    let gcircleGH = document.querySelector('g circle[data-city="GH"] ');

    ghana.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "490.506px";
        flags.style.left = "581.104px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/GH.png";
        flag_name.textContent = "Ghana";
        this.style.fill = "#2D3192";
        circleGH.style.fill = "white";
        gcircleGH.style.fill = "white";
        halfcircleGH.style.fill = "#fff";
        halfsGH[1].style.fill = "white";
    });
    ghana.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleGH.style.fill = "#2D3192";
        gcircleGH.style.fill = "#2D3192";
        halfcircleGH.style.fill = "#FF931E";
        halfsGH[1].style.fill = "#FF931E";
    });

    circleGH.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "490.506px";
        flags.style.left = "581.104px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/GH.png";
        flag_name.textContent = "Ghana";
        ghana.style.fill = "#2D3192";
        circleGH.style.fill = "white";
        gcircleGH.style.fill = "white";
        halfcircleGH.style.fill = "#fff";
        halfsGH[1].style.fill = "white";
    });
    circleGH.addEventListener("mouseout", function() {
        flags.style.display = "none";
        ghana.style.fill = "#E5E9F4";
        circleGH.style.fill = "#2D3192";
        gcircleGH.style.fill = "#2D3192";
        halfcircleGH.style.fill = "#FF931E";
        halfsGH[1].style.fill = "#FF931E";
    });

    //CI

    let cote = document.querySelector("#CI");
    let circleCI = document.querySelector('circle[data-city="CI"]');
    let halfcircleCI = document.querySelector('path.half[data-city="CI"]');
    let halfsCI = document.querySelectorAll('path.half[data-city="CI"]');
    let gcircleCI = document.querySelector('g circle[data-city="CI"] ');

    cote.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "496.875px";
        flags.style.left = "565.179px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/CI.png";
        flag_name.textContent = "Côte d'Ivoire";
        this.style.fill = "#2D3192";
        circleCI.style.fill = "white";
        gcircleCI.style.fill = "white";
        halfcircleCI.style.fill = "#fff";
        halfsCI[1].style.fill = "white";
    });
    cote.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleCI.style.fill = "#2D3192";
        gcircleCI.style.fill = "#2D3192";
        halfcircleCI.style.fill = "#FF931E";
        halfsCI[1].style.fill = "#FF931E";
    });

    circleCI.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "496.875px";
        flags.style.left = "565.179px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/CI.png";
        flag_name.textContent = "Côte d'Ivoire";
        cote.style.fill = "#2D3192";
        circleCI.style.fill = "white";
        gcircleCI.style.fill = "white";
        halfcircleCI.style.fill = "#fff";
        halfsCI[1].style.fill = "white";
    });
    circleCI.addEventListener("mouseout", function() {
        flags.style.display = "none";
        cote.style.fill = "#E5E9F4";
        circleCI.style.fill = "#2D3192";
        gcircleCI.style.fill = "#2D3192";
        halfcircleCI.style.fill = "#FF931E";
        halfsCI[1].style.fill = "#FF931E";
    });

    //SL

    let SL = document.querySelector("#SL");
    let circleSL = document.querySelector('circle[data-city="SL"]');
    let halfcircleSL = document.querySelector('path.half[data-city="SL"]');
    let halfsSL = document.querySelectorAll('path.half[data-city="SL"]');
    let gcircleSL = document.querySelector('g circle[data-city="SL"] ');

    SL.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "493.69px";
        flags.style.left = "542.885px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/SL.png";
        flag_name.textContent = "Sierra Leone";
        this.style.fill = "#2D3192";
        circleSL.style.fill = "white";
        gcircleSL.style.fill = "white";
        halfcircleSL.style.fill = "#fff";
        halfsSL[1].style.fill = "white";
    });
    SL.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleSL.style.fill = "#2D3192";
        gcircleSL.style.fill = "#2D3192";
        halfcircleSL.style.fill = "#FF931E";
        halfsSL[1].style.fill = "#FF931E";
    });

    circleSL.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "493.69px";
        flags.style.left = "542.885px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/SL.png";
        flag_name.textContent = "Sierra Leone";
        SL.style.fill = "#2D3192";
        circleSL.style.fill = "white";
        gcircleSL.style.fill = "white";
        halfcircleSL.style.fill = "#fff";
        halfsSL[1].style.fill = "white";
    });
    circleSL.addEventListener("mouseout", function() {
        flags.style.display = "none";
        SL.style.fill = "#E5E9F4";
        circleSL.style.fill = "#2D3192";
        gcircleSL.style.fill = "#2D3192";
        halfcircleSL.style.fill = "#FF931E";
        halfsSL[1].style.fill = "#FF931E";
    });
    //goyler
    //UKraniya
    let ukraniya = document.querySelector("#UA");
    let circleUK = document.querySelector('circle[data-city="UA"]');
    let gcircleUK = document.querySelector('g circle[data-city="UA"] ');


    ukraniya.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.display = "flex";
        flags.style.top = "329.138px";
        flags.style.left = "692.574px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/UA.png";
        flag_name.textContent = "Ukraine";
        this.style.fill = "#2D3192";
        circleUK.style.fill = "white";
        gcircleUK.style.fill = "white";
    });
    ukraniya.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleUK.style.fill = "#2D3192";
        gcircleUK.style.fill = "#2D3192";
    });
    circleUK.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.display = "flex";
        flags.style.top = "329.138px";
        flags.style.left = "692.574px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/UA.png";
        flag_name.textContent = "Ukraine";
        ukraniya.style.fill = "#2D3192";
        circleUK.style.fill = "white";
        gcircleUK.style.fill = "white";
    });
    circleUK.addEventListener("mouseout", function() {
        flags.style.display = "none";
        ukraniya.style.fill = "#E5E9F4";
        circleUK.style.fill = "#2D3192";
        gcircleUK.style.fill = "#2D3192";
    });

    //bangladesh

    let bangladesh = document.querySelector("#BD");
    let circleBD = document.querySelector('circle[data-city="BD"]');
    let gcircleBD = document.querySelector('g circle[data-city="BD"] ');

    bangladesh.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "437.424px";
        flags.style.left = "893.222px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/BD.png";
        flag_name.textContent = "Bangladesh";
        this.style.fill = "#2D3192";
        circleBD.style.fill = "white";
        gcircleBD.style.fill = "white";
    });
    bangladesh.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleBD.style.fill = "#2D3192";
        gcircleBD.style.fill = "#2D3192";
    });
    circleBD.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "437.424px";
        flags.style.left = "893.222px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/BD.png";
        flag_name.textContent = "Bangladesh";
        bangladesh.style.fill = "#2D3192";
        circleBD.style.fill = "white";
        gcircleBD.style.fill = "white";
    });
    circleBD.addEventListener("mouseout", function() {
        flags.style.display = "none";
        bangladesh.style.fill = "#E5E9F4";
        circleBD.style.fill = "#2D3192";
        gcircleBD.style.fill = "#2D3192";
    });

    //lanka

    let lanka = document.querySelector("#LK");
    let circleLK = document.querySelector('circle[data-city="LK"]');
    let gcricleLK = document.querySelector('g circle[data-city="LK"] ');

    lanka.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "496.875px";
        flags.style.left = "862.435px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/LK.png";
        flag_name.textContent = "Shri Lanka";
        this.style.fill = "#2D3192";
        circleLK.style.fill = "white";
        gcricleLK.style.fill = "white";
    });
    lanka.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleLK.style.fill = "#2D3192";
        gcricleLK.style.fill = "#2D3192";
    });
    circleLK.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "496.875px";
        flags.style.left = "862.435px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/LK.png";
        flag_name.textContent = "Shri Lanka";
        lanka.style.fill = "#2D3192";
        circleLK.style.fill = "white";
        gcricleLK.style.fill = "white";
    });
    circleLK.addEventListener("mouseout", function() {
        flags.style.display = "none";
        lanka.style.fill = "#E5E9F4";
        circleLK.style.fill = "#2D3192";
        gcricleLK.style.fill = "#2D3192";
    });

    //tanzaniya

    let tanzaniya = document.querySelector("#TZ");
    let circleTZ = document.querySelector('circle[data-city="TZ"]');
    let gcircleTZ = document.querySelector('g circle[data-city="TZ"]');

    tanzaniya.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "543.587px";
        flags.style.left = "704.252px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/TZ.png";
        flag_name.textContent = "Tanzaniya";
        this.style.fill = "#2D3192";
        circleTZ.style.fill = "white";
        gcircleTZ.style.fill = "white";
    });
    tanzaniya.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleTZ.style.fill = "#2D3192";
        gcircleTZ.style.fill = "#2D3192";
    });
    circleTZ.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "543.587px";
        flags.style.left = "704.252px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/TZ.png";
        flag_name.textContent = "Tanzaniya";
        tanzaniya.style.fill = "#2D3192";
        circleTZ.style.fill = "white";
        gcircleTZ.style.fill = "white";
    });
    circleTZ.addEventListener("mouseout", function() {
        flags.style.display = "none";
        tanzaniya.style.fill = "#E5E9F4";
        circleTZ.style.fill = "#2D3192";
        gcircleTZ.style.fill = "#2D3192";
    });

    //congo

    let congo = document.querySelector("#CD");
    let circleCD = document.querySelector('circle[data-city="CD"]');
    let gcircleCD = document.querySelector('g circle[data-city="CD"] ');

    congo.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "530.847px";
        flags.style.left = "632.062px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/CD.png";
        flag_name.textContent = "Republic of Congo";
        this.style.fill = "#2D3192";
        circleCD.style.fill = "white";
        gcircleCD.style.fill = "white";
    });
    congo.addEventListener("mouseout", function() {
        flags.style.display = "none";
        this.style.fill = "#E5E9F4";
        circleCD.style.fill = "#2D3192";
        gcircleCD.style.fill = "#2D3192";
    });

    circleCD.addEventListener("mouseover", function() {
        flags.style.display = "flex";
        flags.style.top = "530.847px";
        flags.style.left = "632.062px";
        flag_img.src = "https://www.simbrella.com/site/templates/img/flags/CD.png";
        flag_name.textContent = "Republic of Congo";
        congo.style.fill = "#2D3192";
        circleCD.style.fill = "white";
        gcircleCD.style.fill = "white";
    });
    circleCD.addEventListener("mouseout", function() {
        flags.style.display = "none";
        congo.style.fill = "#E5E9F4";
        circleCD.style.fill = "#2D3192";
        gcircleCD.style.fill = "#2D3192";
    });
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 667 && window.pageYOffset < 1320) {
        navs[0].style.color = "#FF931e";
    }
    if (window.pageYOffset >= 1320 && window.pageYOffset < 5000) {
        navs[1].style.color = "#FF931e";
    }
    if (window.pageYOffset >= 5000 && window.pageYOffset < 6850) {
        navs[2].style.color = "#FF931e";
    }
    if (window.pageYOffset >= 6850 && window.pageYOffset < 7550) {
        navs[3].style.color = "#FF931e";
    }
    if (window.pageYOffset >= 7550 && window.pageYOffset < 8210) {
        navs[4].style.color = "#FF931e";
    }
    if (window.pageYOffset >= 8210) {
        navs[5].style.color = "#FF931e";
    }
})