/* =========================================================
   PORTFOLIO DASHBOARD
   MULTILINGUAL VERSION
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    /* =====================================================
       HUNGARIAN
    ===================================================== */

    hu: {

        htmlLang: "hu",

        logo: "Vissza az oldal tetejére",

        nav: {
            home: "Főoldal",
            projects: "Projektek",
            cv: "CV",
            dashboard: "Dashboard"
        },

        hero: {
            online: "Online",
            eyebrow: "Weboldal",
            description:
                "Ez az én személyes oldalam, ahol mindent leírok magamról és főbb érdeklődési köreimről."
        },

        buttons: {
            projects: "Projektek",
            cv: "CV"
        },

        clock: {
            localTime: "HELYI IDŐ"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuális információk"
        },

        weather: {
            label: "IDŐJÁRÁS",
            wind: "💨 Szél",
            humidity: "💧 Páratartalom",
            refresh: "↻ Időjárás frissítése",
            loading: "Időjárási adatok betöltése...",
            unavailable: "Az időjárási adatok nem érhetők el.",
            location: "Helymeghatározás..."
        },

        calendar: {
            label: "NAPTÁR",
            mon: "H",
            tue: "K",
            wed: "Sze",
            thu: "Cs",
            fri: "P",
            sat: "Szo",
            sun: "V"
        },

        quick: {
            label: "GYORS INFÓ",
            date: "Mai dátum",
            timezone: "Időzóna",
            device: "Eszköz",
            browser: "Böngésző",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Asztali"
        },

        exchange: {
            label: "ÁRFOLYAMOK",
            title: "Devizák",
            loading: "Árfolyamok betöltése...",
            unavailable: "Az árfolyamok nem érhetők el.",
            updated: "Frissítve"
        },

        currency: {
            eur: "Euro",
            usd: "Amerikai dollár",
            gbp: "Angol font",
            chf: "Svájci frank"
        },

        projects: {
            eyebrow: "MUNKÁIM",
            title: "Projektek"
        },

        project: {
            category: "BSc szakdolgozati projekt",
            description: "Jelenleg még fejlesztés alatt áll.",
            view: "Megtekintés →"
        },

        cv: {

            eyebrow: "RÓLAM",

            title: "Curriculum Vitae",

            print: "CV nyomtatása",

            position: "Junior Cloud Engineer",

            profile: {

                title: "Profil",

                text:
                    "Programtervező informatikus BSc diplomával rendelkezem az SZTE-ről, DevOps specializációval. A szakdolgozatom leginkább egy gyakorlati probléma megoldásához vezetett, melynek megvalósítása során DevOps és Cloud technológiákat alkalmaztam. Mindezek mellett KodeKloud - DevOps Pro tanúsítvánnyal rendelkezem. Nyelveket tekintve angolul középfokon (B2), németül felsőfokon (C1) és szlovénül szintén felsőfokon (C1) tudok magabiztosan kommunikálni. Szakmailag tudásomat a DevOps területén szeretném a továbbiakban elmélyíteni és fejleszteni."

            },

            experience: {

                title: "Tapasztalat",

                current: {

                    date: "2026 — jelenleg",

                    title: "Pozíció / Munkahely",

                    text: "Még nincsen. Dolgozunk rajta."

                },

                previous: {

                    title: "Korábbi pozíció",

                    text: "Még nincsen. Dolgozunk rajta."

                }

            },

            education: {

                title: "Tanulmányok",

                school:
                    "SZTE - Szegedi Tudományegyetem Természettudományi és Informatikai Kar",

                degree:
                    "Programtervező informatikus BSc nappali képzés",

                specialization:
                    "Specializáció: DevOps területén"

            },

            /* =================================================
               LANGUAGES
            ================================================= */

            languages: {

                title: "Nyelvtudás",

                hungarian: {

                    name: "Magyar",

                    level: "Anyanyelvi szint (C2)"

                },

                english: {

                    name: "Angol",

                    level: "Középfok (B2)"

                },

                german: {

                    name: "Német",

                    level: "Felsőfok (C1)"

                },

                slovenian: {

                    name: "Szlovén",

                    level: "Felsőfok (C1)"

                }

            },

            /* =================================================
               CERTIFICATIONS
            ================================================= */

            certifications: {

                title:
                    "Tanúsítványok és egyéb képesítések",

                devopsPro: {

                    title:
                        "KodeKloud DevOps Pro",

                    description:
                        "DevOps Pro tanúsítvány"

                }

            },

            skills: {

                title: "Készségek"

            }

        },

        footer: {

            rights: "Minden jog fenntartva."

        },

        weatherCodes: {

            0: "Derült égbolt",
            1: "Túlnyomóan derült",
            2: "Részben felhős",
            3: "Borult",
            45: "Köd",
            48: "Zúzmarás köd",
            51: "Gyenge szitálás",
            53: "Szitálás",
            55: "Erős szitálás",
            61: "Gyenge eső",
            63: "Eső",
            65: "Erős eső",
            71: "Gyenge havazás",
            73: "Havazás",
            75: "Erős havazás",
            80: "Zápor",
            81: "Záporok",
            82: "Erős zápor",
            95: "Zivatar",
            96: "Zivatar jégesővel",
            99: "Erős zivatar"

        }

    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        htmlLang: "en",

        logo: "Back to top",

        nav: {
            home: "Home",
            projects: "Projects",
            cv: "CV",
            dashboard: "Dashboard"
        },

        hero: {
            online: "Online",
            eyebrow: "Website",
            description:
                "This is my personal website where I share information about myself and my main areas of interest."
        },

        buttons: {
            projects: "Projects",
            cv: "CV"
        },

        clock: {
            localTime: "LOCAL TIME"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Current information"
        },

        weather: {
            label: "WEATHER",
            wind: "💨 Wind",
            humidity: "💧 Humidity",
            refresh: "↻ Refresh weather",
            loading: "Loading weather data...",
            unavailable: "Weather data is unavailable.",
            location: "Finding location..."
        },

        calendar: {
            label: "CALENDAR",
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat",
            sun: "Sun"
        },

        quick: {
            label: "QUICK INFO",
            date: "Today's date",
            timezone: "Timezone",
            device: "Device",
            browser: "Browser",
            mobile: "Mobile",
            tablet: "Tablet",
            desktop: "Desktop"
        },

        exchange: {
            label: "EXCHANGE RATES",
            title: "Currencies",
            loading: "Loading exchange rates...",
            unavailable: "Exchange rates are unavailable.",
            updated: "Updated"
        },

        currency: {
            eur: "Euro",
            usd: "US Dollar",
            gbp: "British Pound",
            chf: "Swiss Franc"
        },

        projects: {
            eyebrow: "MY WORK",
            title: "Projects"
        },

        project: {
            category: "BSc Thesis Project",
            description: "Currently under development.",
            view: "View project →"
        },

        cv: {

            eyebrow: "ABOUT ME",

            title: "Curriculum Vitae",

            print: "Print CV",

            position: "Junior Cloud Engineer",

            profile: {

                title: "Profile",

                text:
                    "I hold a BSc degree in Computer Science from the University of Szeged, with a specialization in DevOps. My thesis focused on solving a practical problem using DevOps and Cloud technologies. I also hold the KodeKloud DevOps Pro certification. Regarding languages, I communicate confidently in English at B2 level, German at C1 level and Slovenian at C1 level. Professionally, I would like to further deepen and develop my knowledge in the field of DevOps."

            },

            experience: {

                title: "Experience",

                current: {

                    date: "2026 — present",

                    title: "Position / Workplace",

                    text: "Not yet. We are working on it."

                },

                previous: {

                    title: "Previous position",

                    text: "Not yet. We are working on it."

                }

            },

            education: {

                title: "Education",

                school:
                    "University of Szeged - Faculty of Science and Informatics",

                degree:
                    "BSc in Computer Science, full-time",

                specialization:
                    "Specialization: DevOps"

            },

            /* =================================================
               LANGUAGES
            ================================================= */

            languages: {

                title: "Languages",

                hungarian: {

                    name: "Hungarian",

                    level: "Native proficiency (C2)"

                },

                english: {

                    name: "English",

                    level: "Upper-intermediate (B2)"

                },

                german: {

                    name: "German",

                    level: "Advanced (C1)"

                },

                slovenian: {

                    name: "Slovenian",

                    level: "Advanced (C1)"

                }

            },

            /* =================================================
               CERTIFICATIONS
            ================================================= */

            certifications: {

                title:
                    "Certifications & Qualifications",

                devopsPro: {

                    title:
                        "KodeKloud DevOps Pro",

                    description:
                        "DevOps Pro certification"

                }

            },

            skills: {

                title: "Skills"

            }

        },

        footer: {

            rights: "All rights reserved."

        },

        weatherCodes: {

            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Drizzle",
            55: "Heavy drizzle",
            61: "Light rain",
            63: "Rain",
            65: "Heavy rain",
            71: "Light snow",
            73: "Snow",
            75: "Heavy snow",
            80: "Rain showers",
            81: "Rain showers",
            82: "Heavy rain showers",
            95: "Thunderstorm",
            96: "Thunderstorm with hail",
            99: "Heavy thunderstorm"

        }

    },


    /* =====================================================
       GERMAN
    ===================================================== */

    de: {

        htmlLang: "de",

        logo: "Zurück nach oben",

        nav: {
            home: "Startseite",
            projects: "Projekte",
            cv: "Lebenslauf",
            dashboard: "Dashboard"
        },

        hero: {
            online: "Online",
            eyebrow: "Webseite",
            description:
                "Dies ist meine persönliche Webseite, auf der ich Informationen über mich und meine wichtigsten Interessen teile."
        },

        buttons: {
            projects: "Projekte",
            cv: "Lebenslauf"
        },

        clock: {
            localTime: "LOKALE ZEIT"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuelle Informationen"
        },

        weather: {
            label: "WETTER",
            wind: "💨 Wind",
            humidity: "💧 Luftfeuchtigkeit",
            refresh: "↻ Wetter aktualisieren",
            loading: "Wetterdaten werden geladen...",
            unavailable: "Wetterdaten sind nicht verfügbar.",
            location: "Standort wird ermittelt..."
        },

        calendar: {
            label: "KALENDER",
            mon: "Mo",
            tue: "Di",
            wed: "Mi",
            thu: "Do",
            fri: "Fr",
            sat: "Sa",
            sun: "So"
        },

        quick: {
            label: "SCHNELLINFO",
            date: "Heutiges Datum",
            timezone: "Zeitzone",
            device: "Gerät",
            browser: "Browser",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Desktop"
        },

        exchange: {
            label: "WECHSELKURSE",
            title: "Währungen",
            loading: "Wechselkurse werden geladen...",
            unavailable: "Wechselkurse sind nicht verfügbar.",
            updated: "Aktualisiert"
        },

        currency: {
            eur: "Euro",
            usd: "US-Dollar",
            gbp: "Britisches Pfund",
            chf: "Schweizer Franken"
        },

        projects: {
            eyebrow: "MEINE ARBEIT",
            title: "Projekte"
        },

        project: {
            category: "BSc-Abschlussprojekt",
            description: "Derzeit in Entwicklung.",
            view: "Projekt ansehen →"
        },

        cv: {

            eyebrow: "ÜBER MICH",

            title: "Lebenslauf",

            print: "Lebenslauf drucken",

            position: "Junior Cloud Engineer",

            profile: {

                title: "Profil",

                text:
                    "Ich habe einen BSc-Abschluss in Informatik an der Universität Szeged mit Spezialisierung auf DevOps. Meine Abschlussarbeit konzentrierte sich auf die Lösung eines praktischen Problems unter Einsatz von DevOps- und Cloud-Technologien. Außerdem besitze ich die KodeKloud DevOps Pro Zertifizierung. Sprachlich kommuniziere ich sicher auf Englisch (B2), Deutsch (C1) und Slowenisch (C1). Beruflich möchte ich meine Kenntnisse im Bereich DevOps weiter vertiefen und ausbauen."

            },

            experience: {

                title: "Berufserfahrung",

                current: {

                    date: "2026 — heute",

                    title: "Position / Arbeitsplatz",

                    text: "Noch nicht. Wir arbeiten daran."

                },

                previous: {

                    title: "Frühere Position",

                    text: "Noch nicht. Wir arbeiten daran."

                }

            },

            education: {

                title: "Ausbildung",

                school:
                    "Universität Szeged - Fakultät für Naturwissenschaften und Informatik",

                degree:
                    "BSc Informatik, Vollzeitstudium",

                specialization:
                    "Spezialisierung: DevOps"

            },

            /* =================================================
               LANGUAGES
            ================================================= */

            languages: {

                title: "Sprachkenntnisse",

                hungarian: {

                    name: "Ungarisch",

                    level: "Muttersprachliches Niveau (C2)"

                },

                english: {

                    name: "Englisch",

                    level: "Mittelstufe (B2)"

                },

                german: {

                    name: "Deutsch",

                    level: "Fortgeschritten (C1)"

                },

                slovenian: {

                    name: "Slowenisch",

                    level: "Fortgeschritten (C1)"

                }

            },

            /* =================================================
               CERTIFICATIONS
            ================================================= */

            certifications: {

                title:
                    "Zertifikate & weitere Qualifikationen",

                devopsPro: {

                    title:
                        "KodeKloud DevOps Pro",

                    description:
                        "DevOps Pro Zertifikat"

                }

            },

            skills: {

                title: "Fähigkeiten"

            }

        },

        footer: {

            rights: "Alle Rechte vorbehalten."

        },

        weatherCodes: {

            0: "Klarer Himmel",
            1: "Überwiegend klar",
            2: "Teilweise bewölkt",
            3: "Bedeckt",
            45: "Nebel",
            48: "Reifnebel",
            51: "Leichter Nieselregen",
            53: "Nieselregen",
            55: "Starker Nieselregen",
            61: "Leichter Regen",
            63: "Regen",
            65: "Starker Regen",
            71: "Leichter Schneefall",
            73: "Schneefall",
            75: "Starker Schneefall",
            80: "Regenschauer",
            81: "Regenschauer",
            82: "Starke Regenschauer",
            95: "Gewitter",
            96: "Gewitter mit Hagel",
            99: "Starkes Gewitter"

        }

    },


    /* =====================================================
       SLOVENIAN
    ===================================================== */

    sl: {

        htmlLang: "sl",

        logo: "Nazaj na vrh",

        nav: {
            home: "Domov",
            projects: "Projekti",
            cv: "Življenjepis",
            dashboard: "Nadzorna plošča"
        },

        hero: {
            online: "Na spletu",
            eyebrow: "Spletna stran",
            description:
                "To je moja osebna spletna stran, kjer predstavljam informacije o sebi in svojih glavnih področjih zanimanja."
        },

        buttons: {
            projects: "Projekti",
            cv: "Življenjepis"
        },

        clock: {
            localTime: "LOKALNI ČAS"
        },

        dashboard: {
            eyebrow: "NADZORNA PLOŠČA",
            title: "Aktualne informacije"
        },

        weather: {
            label: "VREME",
            wind: "💨 Veter",
            humidity: "💧 Vlažnost",
            refresh: "↻ Osveži vreme",
            loading: "Nalaganje vremenskih podatkov...",
            unavailable: "Vremenski podatki niso na voljo.",
            location: "Iskanje lokacije..."
        },

        calendar: {
            label: "KOLEDAR",
            mon: "Pon",
            tue: "Tor",
            wed: "Sre",
            thu: "Čet",
            fri: "Pet",
            sat: "Sob",
            sun: "Ned"
        },

        quick: {
            label: "HITRE INFORMACIJE",
            date: "Današnji datum",
            timezone: "Časovni pas",
            device: "Naprava",
            browser: "Brskalnik",
            mobile: "Mobilni telefon",
            tablet: "Tablica",
            desktop: "Namizni računalnik"
        },

        exchange: {
            label: "MENJALNI TEČAJI",
            title: "Valute",
            loading: "Nalaganje menjalnih tečajev...",
            unavailable: "Menjalni tečaji niso na voljo.",
            updated: "Posodobljeno"
        },

        currency: {
            eur: "Evro",
            usd: "Ameriški dolar",
            gbp: "Britanski funt",
            chf: "Švicarski frank"
        },

        projects: {
            eyebrow: "MOJE DELO",
            title: "Projekti"
        },

        project: {
            category: "BSc diplomski projekt",
            description: "Trenutno je v razvoju.",
            view: "Ogled projekta →"
        },

        cv: {

            eyebrow: "O MENI",

            title: "Življenjepis",

            print: "Natisni življenjepis",

            position: "Junior Cloud Engineer",

            profile: {

                title: "Profil",

                text:
                    "Imam diplomo BSc iz računalništva Univerze v Szegedu s specializacijo na področju DevOps. Moje diplomsko delo je bilo osredotočeno na reševanje praktičnega problema z uporabo DevOps in Cloud tehnologij. Poleg tega imam certifikat KodeKloud DevOps Pro. Tekoče komuniciram v angleščini na ravni B2, nemščini na ravni C1 in slovenščini na ravni C1. Na strokovnem področju želim svoje znanje DevOps še naprej poglabljati in razvijati."

            },

            experience: {

                title: "Delovne izkušnje",

                current: {

                    date: "2026 — danes",

                    title: "Delovno mesto / podjetje",

                    text: "Še ne. Delamo na tem."

                },

                previous: {

                    title: "Prejšnje delovno mesto",

                    text: "Še ne. Delamo na tem."

                }

            },

            education: {

                title: "Izobrazba",

                school:
                    "Univerza v Szegedu - Fakulteta za naravoslovje in informatiko",

                degree:
                    "BSc računalništva, redni študij",

                specialization:
                    "Specializacija: DevOps"

            },

            /* =================================================
               LANGUAGES
            ================================================= */

            languages: {

                title: "Znanje jezikov",

                hungarian: {

                    name: "Madžarščina",

                    level: "Raven maternega jezika (C2)"

                },

                english: {

                    name: "Angleščina",

                    level: "Srednja raven (B2)"

                },

                german: {

                    name: "Nemščina",

                    level: "Napredna raven (C1)"

                },

                slovenian: {

                    name: "Slovenščina",

                    level: "Napredna raven (C1)"

                }

            },

            /* =================================================
               CERTIFICATIONS
            ================================================= */

            certifications: {

                title:
                    "Certifikati in druge kvalifikacije",

                devopsPro: {

                    title:
                        "KodeKloud DevOps Pro",

                    description:
                        "Certifikat DevOps Pro"

                }

            },

            skills: {

                title: "Znanja in veščine"

            }

        },

        footer: {

            rights: "Vse pravice pridržane."

        },

        weatherCodes: {

            0: "Jasno nebo",
            1: "Pretežno jasno",
            2: "Delno oblačno",
            3: "Oblačno",
            45: "Megla",
            48: "Slana megla",
            51: "Rahlo rosenje",
            53: "Rosenje",
            55: "Močno rosenje",
            61: "Rahel dež",
            63: "Dež",
            65: "Močan dež",
            71: "Rahlo sneženje",
            73: "Sneženje",
            75: "Močno sneženje",
            80: "Plohe",
            81: "Plohe",
            82: "Močne plohe",
            95: "Nevihta",
            96: "Nevihta s točo",
            99: "Močna nevihta"

        }

    }

};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "hu";


function getTranslation(key) {

    const language =
        translations[currentLanguage];

    const parts =
        key.split(".");

    let value =
        language;

    for (const part of parts) {

        if (
            value &&
            Object.prototype.hasOwnProperty.call(
                value,
                part
            )
        ) {

            value = value[part];

        } else {

            return key;

        }

    }

    return value;

}


function updateTranslatedElements() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translation =
                getTranslation(key);

            if (translation !== key) {

                element.textContent =
                    translation;

            }

        });

}


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage =
        language;

    localStorage.setItem(
        "language",
        language
    );

    document.documentElement.lang =
        translations[language].htmlLang;

    updateTranslatedElements();

    updateLanguageButton();

    updateClock();

    renderCalendar();

    updateDeviceInfo();

    updateWeatherText();

    updateExchangeText();

}


function updateLanguageButton() {

    const currentLanguageElement =
        document.getElementById(
            "currentLanguage"
        );

    if (currentLanguageElement) {

        currentLanguageElement.textContent =
            currentLanguage.toUpperCase();

    }


    document
        .querySelectorAll(
            ".language-menu button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                currentLanguage
            );

        });

}


const languageToggle =
    document.getElementById(
        "languageToggle"
    );

const languageSelector =
    document.querySelector(
        ".language-selector"
    );


if (
    languageToggle &&
    languageSelector
) {

    languageToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            languageSelector.classList.toggle(
                "active"
            );

        }
    );

}


document
    .querySelectorAll(
        ".language-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.language
                );

                languageSelector.classList.remove(
                    "active"
                );

            }
        );

    });


document.addEventListener(
    "click",
    () => {

        if (languageSelector) {

            languageSelector.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeIcon) {
            themeIcon.textContent = "☀";
        }

    } else {

        document.body.classList.remove("dark");

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }

    }

}


const savedTheme =
    localStorage.getItem("theme") || "light";

applyTheme(savedTheme);


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            const newTheme =
                isDark ? "light" : "dark";

            localStorage.setItem(
                "theme",
                newTheme
            );

            applyTheme(newTheme);

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );

        }
    );


    document
        .querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
   CLOCK
========================================================= */

const clockElement =
    document.getElementById("clock");

const dateElement =
    document.getElementById("date");

const timezoneElement =
    document.getElementById("timezone");

const timezoneInfo =
    document.getElementById("timezoneInfo");

const todayInfo =
    document.getElementById("todayInfo");


function getLocale() {

    return {

        hu: "hu-HU",

        en: "en-GB",

        de: "de-DE",

        sl: "sl-SI"

    }[currentLanguage] || "hu-HU";

}


function updateClock() {

    const now =
        new Date();

    const locale =
        getLocale();


    if (clockElement) {

        clockElement.textContent =
            new Intl.DateTimeFormat(
                locale,
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            ).format(now);

    }


    const date =
        new Intl.DateTimeFormat(
            locale,
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        ).format(now);


    if (dateElement) {

        dateElement.textContent =
            date;

    }


    if (todayInfo) {

        todayInfo.textContent =
            date;

    }


    const timezone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone ||
        "Europe/Budapest";


    if (timezoneElement) {

        timezoneElement.textContent =
            timezone;

    }


    if (timezoneInfo) {

        timezoneInfo.textContent =
            timezone;

    }

}


updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================================
   DEVICE INFO
========================================================= */

const deviceInfo =
    document.getElementById(
        "deviceInfo"
    );


function updateDeviceInfo() {

    if (!deviceInfo) {
        return;
    }

    const width =
        window.innerWidth;


    if (width <= 650) {

        deviceInfo.textContent =
            getTranslation(
                "quick.mobile"
            );

    } else if (width <= 1000) {

        deviceInfo.textContent =
            getTranslation(
                "quick.tablet"
            );

    } else {

        deviceInfo.textContent =
            getTranslation(
                "quick.desktop"
            );

    }

}


updateDeviceInfo();

window.addEventListener(
    "resize",
    updateDeviceInfo
);


/* =========================================================
   CALENDAR
========================================================= */

const calendarTitle =
    document.getElementById(
        "calendarTitle"
    );

const calendarDays =
    document.getElementById(
        "calendarDays"
    );

const prevMonth =
    document.getElementById(
        "prevMonth"
    );

const nextMonth =
    document.getElementById(
        "nextMonth"
    );


let calendarDate =
    new Date();


function renderCalendar() {

    if (
        !calendarTitle ||
        !calendarDays
    ) {

        return;

    }


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    let monthName =
        new Intl.DateTimeFormat(
            getLocale(),
            {
                month: "long",
                year: "numeric"
            }
        ).format(calendarDate);


    monthName =
        monthName.charAt(0).toUpperCase() +
        monthName.slice(1);


    calendarTitle.textContent =
        monthName;


    calendarDays.innerHTML =
        "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const previousMonthDays =
        new Date(
            year,
            month,
            0
        ).getDate();


    const mondayIndex =
        firstDay === 0
            ? 6
            : firstDay - 1;


    /* ELŐZŐ HÓNAP */

    for (
        let i = mondayIndex - 1;
        i >= 0;
        i--
    ) {

        const day =
            document.createElement(
                "div"
            );

        day.className =
            "calendar-day other-month";

        day.textContent =
            previousMonthDays - i;

        calendarDays.appendChild(
            day
        );

    }


    /* AKTUÁLIS HÓNAP */

    const today =
        new Date();


    for (
        let dayNumber = 1;
        dayNumber <= daysInMonth;
        dayNumber++
    ) {

        const day =
            document.createElement(
                "div"
            );

        day.className =
            "calendar-day";

        day.textContent =
            dayNumber;


        if (
            dayNumber === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            day.classList.add(
                "today"
            );

        }


        calendarDays.appendChild(
            day
        );

    }


    /* KÖVETKEZŐ HÓNAP */

    const totalCells =
        calendarDays.children.length;


    const remaining =
        42 - totalCells;


    for (
        let i = 1;
        i <= remaining;
        i++
    ) {

        const day =
            document.createElement(
                "div"
            );

        day.className =
            "calendar-day other-month";

        day.textContent =
            i;

        calendarDays.appendChild(
            day
        );

    }

}


if (prevMonth) {

    prevMonth.addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );

}


if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );

}


renderCalendar();


/* =========================================================
   WEATHER
========================================================= */

const weatherLocation =
    document.getElementById(
        "weatherLocation"
    );

const weatherIcon =
    document.getElementById(
        "weatherIcon"
    );

const temperature =
    document.getElementById(
        "temperature"
    );

const weatherDescription =
    document.getElementById(
        "weatherDescription"
    );

const wind =
    document.getElementById(
        "wind"
    );

const humidity =
    document.getElementById(
        "humidity"
    );

const lastUpdated =
    document.getElementById(
        "lastUpdated"
    );

const refreshWeather =
    document.getElementById(
        "refreshWeather"
    );


let weatherCoordinates = {

    latitude: 47.1747,

    longitude: 20.1940,

    name: "Szolnok"

};


/* =========================================================
   WEATHER CODE
========================================================= */

function weatherCodeInfo(code) {

    const icons = {

        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        53: "🌦️",
        55: "🌧️",
        61: "🌦️",
        63: "🌧️",
        65: "🌧️",
        71: "🌨️",
        73: "❄️",
        75: "❄️",
        80: "🌦️",
        81: "🌧️",
        82: "⛈️",
        95: "⛈️",
        96: "⛈️",
        99: "⛈️"

    };


    return {

        text:
            translations[currentLanguage]
                .weatherCodes[code] ||
            "Unknown weather",

        icon:
            icons[code] ||
            "🌡️"

    };

}


/* =========================================================
   WEATHER TRANSLATION UPDATE
========================================================= */

function updateWeatherText() {

    if (
        weatherDescription &&
        !weatherDescription.dataset.apiLoaded
    ) {

        weatherDescription.textContent =
            getTranslation(
                "weather.loading"
            );

    }

}


/* =========================================================
   LOCATION
========================================================= */

function getUserLocation() {

    return new Promise(resolve => {

        if (!navigator.geolocation) {

            console.warn(
                "Geolocation is not supported."
            );

            resolve();

            return;

        }


        navigator.geolocation.getCurrentPosition(

            position => {

                weatherCoordinates = {

                    latitude:
                        position.coords.latitude,

                    longitude:
                        position.coords.longitude,

                    name:
                        "Aktuális hely"

                };


                resolve();

            },

            error => {

                console.warn(
                    "Geolocation failed:",
                    error.message
                );

                resolve();

            },

            {

                enableHighAccuracy: false,

                timeout: 10000,

                maximumAge: 600000

            }

        );

    });

}


/* =========================================================
   WEATHER API
========================================================= */

async function loadWeather() {

    if (!weatherDescription) {
        return;
    }


    weatherDescription.dataset.apiLoaded =
        "false";


    weatherDescription.textContent =
        getTranslation(
            "weather.loading"
        );


    try {

        const url =
            "https://api.open-meteo.com/v1/forecast" +

            `?latitude=${weatherCoordinates.latitude}` +

            `&longitude=${weatherCoordinates.longitude}` +

            "&current=" +

            "temperature_2m," +

            "relative_humidity_2m," +

            "weather_code," +

            "wind_speed_10m" +

            "&timezone=auto";


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        const data =
            await response.json();


        if (!data.current) {

            throw new Error(
                "No current weather data."
            );

        }


        const current =
            data.current;


        const info =
            weatherCodeInfo(
                current.weather_code
            );


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name ===
                "Aktuális hely"
                    ? getCurrentLocationText()
                    : weatherCoordinates.name;

        }


        if (weatherIcon) {

            weatherIcon.textContent =
                info.icon;

        }


        if (temperature) {

            temperature.textContent =
                Math.round(
                    current.temperature_2m
                );

        }


        weatherDescription.textContent =
            info.text;

        weatherDescription.dataset.apiLoaded =
            "true";


        if (wind) {

            wind.textContent =
                `${Math.round(
                    current.wind_speed_10m
                )} km/h`;

        }


        if (humidity) {

            humidity.textContent =
                `${Math.round(
                    current.relative_humidity_2m
                )}%`;

        }


        if (lastUpdated) {

            lastUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Weather error:",
            error
        );


        weatherDescription.textContent =
            getTranslation(
                "weather.unavailable"
            );

        weatherDescription.dataset.apiLoaded =
            "false";


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name;

        }


        if (temperature) {

            temperature.textContent =
                "--";

        }


        if (wind) {

            wind.textContent =
                "-- km/h";

        }


        if (humidity) {

            humidity.textContent =
                "--%";

        }

    }

}


function getCurrentLocationText() {

    const names = {

        hu: "Aktuális hely",

        en: "Current location",

        de: "Aktueller Standort",

        sl: "Trenutna lokacija"

    };

    return names[currentLanguage];

}


/* =========================================================
   WEATHER LANGUAGE REFRESH
========================================================= */

function refreshWeatherLanguage() {

    if (
        !weatherDescription ||
        weatherDescription.dataset.apiLoaded !== "true"
    ) {

        return;

    }


    loadWeather();

}


/* =========================================================
   INITIALIZE WEATHER
========================================================= */

async function initializeWeather() {

    await getUserLocation();

    await loadWeather();

}


initializeWeather();


/* =========================================================
   MANUAL WEATHER REFRESH
========================================================= */

if (refreshWeather) {

    refreshWeather.addEventListener(
        "click",
        async () => {

            refreshWeather.disabled =
                true;

            refreshWeather.textContent =
                "↻ ...";


            await loadWeather();


            refreshWeather.disabled =
                false;

            refreshWeather.textContent =
                getTranslation(
                    "weather.refresh"
                );

        }
    );

}


setInterval(
    loadWeather,
    10 * 60 * 1000
);


/* =========================================================
   EXCHANGE RATES
========================================================= */

const eurHuf =
    document.getElementById(
        "eurHuf"
    );

const usdHuf =
    document.getElementById(
        "usdHuf"
    );

const gbpHuf =
    document.getElementById(
        "gbpHuf"
    );

const chfHuf =
    document.getElementById(
        "chfHuf"
    );

const exchangeUpdated =
    document.getElementById(
        "exchangeUpdated"
    );


function updateExchangeText() {

    if (
        exchangeUpdated &&
        exchangeUpdated.textContent.includes("...")
    ) {

        exchangeUpdated.textContent =
            getTranslation(
                "exchange.loading"
            );

    }

}


async function loadExchangeRates() {

    try {

        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.loading"
                );

        }


        const currencies =
            await Promise.all([

                fetch(
                    "https://api.frankfurter.dev/v2/rate/eur/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "EUR/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/usd/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "USD/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/gbp/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "GBP/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/chf/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "CHF/HUF API error"
                        );

                    }

                    return response.json();

                })

            ]);


        const eur =
            currencies[0].rate;

        const usd =
            currencies[1].rate;

        const gbp =
            currencies[2].rate;

        const chf =
            currencies[3].rate;


        if (eurHuf) {

            eurHuf.textContent =
                `${eur.toFixed(2)} Ft`;

        }


        if (usdHuf) {

            usdHuf.textContent =
                `${usd.toFixed(2)} Ft`;

        }


        if (gbpHuf) {

            gbpHuf.textContent =
                `${gbp.toFixed(2)} Ft`;

        }


        if (chfHuf) {

            chfHuf.textContent =
                `${chf.toFixed(2)} Ft`;

        }


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Exchange rate error:",
            error
        );


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.unavailable"
                );

        }

    }

}


loadExchangeRates();


setInterval(
    loadExchangeRates,
    30 * 60 * 1000
);


/* =========================================================
   PRINT CV
========================================================= */

const printCv =
    document.getElementById(
        "printCv"
    );


if (printCv) {

    printCv.addEventListener(
        "click",
        () => {

            window.print();

        }
    );

}


/* =========================================================
   YEAR
========================================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

setLanguage(
    currentLanguage
);




