// defining language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

//Translations
var language = {
    en: {
        homepage: "Home",
        projectspage: "Projects",
        schoolprojectspage: "School Porjects",
        blogpage: "Blog",
        soonpage: "Soon",
        aboutmepage: "About me",
        aboutmeheading: "About me",
        prjheading: "My projects:",
        schprojheading: "My school projects:",
        blogheading: "Blog",
    },
    ee: {
        homepage: "Koduleht",
        projectspage: "Projektid",
        schoolprojectspage: "Kooli projektid",
        blogpage: "Blogi",
        soonpage: "Hiljem",
        aboutmepage: "Minust",
        aboutmeheading: "Minust",
        prjheading: "Minu projektid:",
        schprojheading: "Minu kooli projektid:",
        blogheading: "Blogi"

    },
    ru: {
        homepage: "Главная",
        projectspage: "Проекты",
        schoolprojectspage: "Школьные проекты",
        blogpage: "Блог",
        soonpage: "Позже",
        aboutmepage: "Обо мне",
        aboutmeheading: "Обо мне",
        prjheading: "Мои проекты:",
        schprojheading: "Мои школьные проекты:",
        blogheading: "Блог"
    }
};

// Defining language via window hash
if (window.location.hash) {
    if (window.location.hash === "#ee") {
        home.textContent = language.ee.homepage;
        projects.textContent = language.ee.projectspage;
        schoolprojects.textContent = language.ee.schoolprojectspage;
        blog.textContent = language.ee.blogpage;
        soon.textContent = language.ee.soonpage;
        aboutme.textContent = language.ee.aboutmepage;
        if (window.location.href.match("aboutme.html")) {
            abtme.textContent = language.ee.aboutmeheading;
        }
        if (window.location.href.match("projects.html")) {
            myprojs.textContent = language.ee.prjheading;
        }
        if (window.location.href.match("schoolprojects.html")) {
            myschproj.textContent = language.ee.schprojheading;
        }
        if (window.location.href.match("blog.html")) {
            blg.textContent = language.ee.blogheading;
        }
    }
    if (window.location.hash === "#ru") {
        home.textContent = language.ru.homepage;
        projects.textContent = language.ru.projectspage;
        schoolprojects.textContent = language.ru.schoolprojectspage;
        blog.textContent = language.ru.blogpage;
        soon.textContent = language.ru.soonpage;
        aboutme.textContent = language.ru.aboutmepage;
        if (window.location.href.match("aboutme.html")) {
            abtme.textContent = language.ru.aboutmeheading;
        }
        if (window.location.href.match("projects.html")) {
            myprojs.textContent = language.ru.prjheading;
        }
        if (window.location.href.match("schoolprojects.html")) {
            myschproj.textContent = language.ru.schprojheading;
        }
        if (window.location.href.match("blog.html")) {
            blg.textContent = language.ru.blogheading;
        }
    }
}

// Defining language reload onclick illiteration
for (i = 0; i <= dataReload.length - 1; i++) {
        dataReload[i].onclick = function() {
            setTimeout(function () {
                location.reload(true);
            }, 150)
        }
    }