$(".application-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#applications-holder").offset().top,
    },
    1000
  );
});

$(".brainwave-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#brainwave-holder").offset().top,
    },
    1000
  );
});

$(".adam-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#adam-holder").offset().top,
    },
    1000
  );
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

window.addEventListener("load", () => {
    handleScrollAnimation();
});
