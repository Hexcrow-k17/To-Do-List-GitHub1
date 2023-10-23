# lik til netsiden
https://hexcrow-k17.github.io/To-Do-List-GitHub1/To-Do-List/html/

# To-Do List HTML Structure Explanation

Dette dokumentet gir en forklaring på HTML-koden for en to-do-liste-applikasjon. Koden danner strukturen og grunnleggende elementer for websiden.

## Grunnleggende HTML-struktur
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do list</title> <!-- Websidens tittel -->
    <link rel="stylesheet" type="text/css" href="../css/style.css"> <!-- Kobling til CSS-filen -->
</head>
<body>
    <!-- To-Do List -->
    <div class="container">
        <div class="todo-app">
            <h2>To-Do List <img src="../Pictures/icon.png"></h2> <!-- Tittel med et ikon -->
            <div class="row">
                <input type="text" id="input-box" placeholder="Add your text"> <!-- Inntastingsfelt for å legge til oppgaver -->
                <button onclick="addTask()">Add</button> <!-- Knapp for å legge til oppgaver -->
            </div>
            <ul id="list-container">
                <!-- Beholderen for oppgavene vil bli vist her -->
                <!-- <li class="checked">Task 1</li> Eksempel oppgaver (kommentert ut) -->
                <!-- <li>Task 2</li>
                <li>Task 3</li> -->
            </ul>
        </div>
    </div>
    <div class="toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <script src="../JavaScript/script.js"></script> <!-- Kobling til JavaScript-filen -->
</body>
</html>
```

## HTML Forklaring

- Koden begynner med de nødvendige deklarasjonene, inkludert dokumenttypen og karakterkodingen.

- Websidens tittel er satt til "To-Do list" ved hjelp av `<title>`-elementet.

- Det er en kobling til en ekstern CSS-fil for å style websiden riktig. CSS-filen er koblet til ved hjelp av `<link>`-elementet.

- Websiden er strukturert som følger:
  - Den har en hovedbeholder (`<div class="container">`) som tar opp hele bredden av visningsvinduet.
  - Inne i hovedbeholderen er det en underbeholder (`<div class="todo-app">`) som inneholder to-do-liste-applikasjonen.
  - Tittelen på to-do-listen vises ved hjelp av et `<h2>`-element, og et ikon (`<img>`) er inkludert sammen med tittelen.
  - Det er et område for å legge til nye oppgaver bestående av en inntastingsboks (`<input>`) og en knapp (`<button>`).
  - Oppgavene som blir lagt til, vises i en uordnet liste (`<ul>`) med ID-en "list-container".
  - Noen eksempeloppgaver er kommentert ut og vil ikke vises på websiden.
  - Til slutt er det en menyknapp som består av tre linjer (`<div class="toggle">`) som vil bli brukt til fremtidige funksjoner.

- Det er også en kobling til en ekstern JavaScript-fil (`<script src="../JavaScript/script.js"></script>`) som gir funksjonalitet til to-do-liste-applikasjonen. JavaScript-koden er lagt til som en separat fil for å gjøre koden mer organisert og vedlikeholdbar.

Dette er en grunnleggende dokumentasjon av HTML-koden som utgjør strukturen for to-do-liste-applikasjonen. Du kan tilpasse og bygge videre på denne koden for å opprette en fullstendig fungerende to-do-liste-applikasjon.
# To-Do List CSS Styles Explanation

Dette dokumentet gir en forklaring på CSS-stilene som er brukt i en to-do-liste-applikasjon. Stilene er ansvarlige for utseendet og layouten til elementene på websiden.

## Generelle stiler
```css
/* To-Do-liste */
/* Reset standardmarginer, padding og boksmodellatferd for alle elementer */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: JetBrainsMono-Light;
}
```
- `*`: Dette er en universalregel som tilbakestiller standardmarginer, padding og boksmodellatferd for alle HTML-elementer. `box-sizing: border-box` sørger for at elementets totalbredde inkluderer padding og grenser.

## Stiler for hovedinnholdet
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #e9ecef;
}
```
- `body`: Dette setter hovedinnholdet i midten av siden ved å bruke flexboksmodellen. `min-height: 100vh` sørger for at siden tar minst hele visningsvinduet i høyden.

## Stiler for hovedbeholderen
```css
.container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #153677, #4e085f);
    padding: 10px;
}
```
- `.container`: Dette elementet er hovedbeholderen for to-do-listen. Den tar opp hele bredden og minst hele høyden av visningsvinduet. Bakgrunnen er en lineær gradient som gir en fargeovergang fra #153677 til #4e085f.

## Stiler for to-do-applikasjonsbeholderen
```css
.todo-app {
    width: 100%;
    max-width: 540px;
    background: #fff;
    margin: 100px auto 20px;
    padding: 40px 30px 70px;
    border-radius: 10px;
}
```
- `.todo-app`: Dette elementet er beholderen for selve to-do-listen. Den tar opp hele bredden, men begrenses til en maksimal bredde på 540px. Den har en hvit bakgrunn, en margin på 100px øverst, og litt padding for å gi litt avstand til innholdet. `border-radius: 10px` gir en avrundet ramme.

## Stiler for to-do-applikasjonens tittel
```css
.todo-app h2 {
    color: #002765;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
```
- `.todo-app h2`: Dette er tittelen for to-do-listen. Den har en tekstfarge på #002765 og bruker flex for å justere elementene horisontalt. `margin-bottom: 20px` gir litt avstand under tittelen.

## Stiler for radene som inneholder oppgaver
```css
.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #edeef0;
    border-radius: 30px;
    padding-left: 20px;
    margin-bottom: 25px;
}
```
- `.row`: Dette er stilene for hver rad som inneholder oppgaver. Elementene er justert horisontalt ved hjelp av flex, og det er litt avstand mellom dem. Bakgrunnen er #edeef0, og det er en avrundet kant med `border-radius: 30px`. `padding-left: 20px` gir litt avstand til venstre, og det er også en margin nederst for å skille radene.

Disse er de viktigste CSS-stilene som brukes i to-do-liste-applikasjonen. Koden inneholder også stiler for input-felt, knapper, listeelementer, checkbox-ikoner, sjekkede oppgaver og sletteknapper, som gir et pent og organisert grensesnitt for å administrere oppgaver.


# To-Do List JavaScript Code Explanation

Dette dokumentet gir en forklaring på JavaScript-koden som brukes i en to-do-liste-applikasjon. Koden gir funksjonalitet for å legge til, merke som fullført og slette oppgaver, samt lagring av oppgavene i nettleserens lokale lagring.

## Hente referanser til HTML-elementer
```javascript
// Hente referanser til inputboksen og listekontainer-elementene
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
```
- `inputBox` og `listContainer` er JavaScript-variabler som lagrer referanser til HTML-elementene med ID-ene "input-box" og "list-container". Dette gjør det mulig å samhandle med disse elementene fra JavaScript-koden.

## Lytte etter tastetrykk i inputboksen
```javascript
// Hendelseslytter for inputboksen
inputBox.addEventListener('keyup', function (event) {
    // Sjekk om Enter-tasten ble trykket
    if (event.keyCode === 13) {
        // Hvis Enter-tasten ble trykket, legg til en ny oppgave
        addTask();
    }
});
```
- En hendelseslytter er satt opp for inputboksen som lytter etter tastetrykk. Når brukeren trykker Enter-tasten (tastekoden 13), kalles `addTask()`-funksjonen for å legge til en ny oppgave.

## Legge til en ny oppgave
```javascript
// Funksjon for å legge til en ny oppgave
function addTask() {
    // Sjekk om inputboksen er tom
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Opprett et nytt listeelement
        let li = document.createElement("li");
        // Sett innholdet i listeelementet til verdien fra inputboksen
        li.innerHTML = inputBox.value;
        // Legg til listeelementet i listekontaineren
        listContainer.appendChild(li);
        // Opprett et span-element for å representere en sletteknapp
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // 'x'-tegnet for sletteknappen
        // Legg til sletteknappen i listeelementet
        li.appendChild(span);
    }
    // Tøm inputboksen
    inputBox.value = "";
    // Lagre den oppdaterte listen i nettleserens lokale lagring
    saveData();
}
```
- `addTask()`-funksjonen legger til en ny oppgave i listen. Den sjekker om inputboksen er tom, og gir en advarsel hvis den er det. Hvis ikke, oppretter den et nytt listeelement (`<li>`) med innholdet fra inputboksen og legger det til i listekontaineren. Den oppretter også en sletteknapp ved hjelp av et span-element.

## Lytte etter klikk på listeelementer og sletteknapper
```javascript
// Hendelseslytter for klikk på listeelementer og sletteknapper
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Bytt til 'checked'-klassen på listeelementer når de klikkes
        e.target.classList.toggle("checked");
        // Lagre den oppdaterte listen i nettleserens lokale lagring
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Fjern forelderlisteelementet når sletteknappen klikkes
        e.target.parentElement.remove();
        // Lagre den oppdaterte listen i nettleserens lokale lagring
        saveData();
    }
}, false);
```
- Det er en hendelseslytter satt opp for listekontaineren som lytter etter klikk. Hvis brukeren klikker på et listeelement (`<li>`), byttes klassen "checked" på elementet for å markere det som fullført. Hvis brukeren klikker på en sletteknapp (et `SPAN`-element), fjernes hele listeelementet fra listen.

## Lagre oppgavene i lokal lagring
```javascript
// Funksjon for å lagre data i nettleserens lokale lagring
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
```
- `saveData()`-funksjonen lagrer listen med oppgaver i nettleserens lokale lagring ved å bruke `localStorage.setItem()`. Den lagrer HTML-innholdet i listekontaineren med en nøkkel kalt "data".

## Last og vis lagrede oppgaver når siden lastes
```javascript
// Funksjon for å laste og vise lagrede oppgaver fra nettleserens lokale lagring
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
```
- `showTask()`-funksjonen laster innholdet fra nettleserens lokale lagring med nøkkelen "data" og setter det som innholdet i listekontaineren. Dette gjør at lagrede oppgaver blir vist når siden lastes.

## Lytt etter klikk på en menyknapp
```javascript
const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
```
- Det er en hendelseslytter satt opp for en menyknapp som lar brukeren åpne og lukke en meny når de klikker på knappen. Den bruker `classList.toggle()` for å legge til eller fjerne klassen "active" på menyelementet, avhengig av om den er åpen eller lukket.

Dette er en oversikt over JavaScript-koden som gir funksjonalitet til to-do-liste-applikasjonen, inkludert å legge til, merke som fullført og slette oppgaver, samt lagring og visning av oppgaver fra nettleserens lokale lagring.
