# To-Do-List-GitHub1
# HTML Forklaring

    HTML-dokumentet starter med de nødvendige metadata og en kobling til en ekstern CSS-fil.

    Websiden er delt inn i flere hoveddeler, inkludert en beholder (<div class="container">) for hele applikasjonen og en beholder for selve to-do-listen (<div class="todo-app">).

    To-do-listen har en tittel med et bilde og en inputboks for å legge til oppgaver. Det er også en knapp for å legge til oppgaver og en uordnet liste (<ul>) for å vise oppgavene.

    Det er en kommentert utdel av listeelementer som viser hvordan oppgaver vil se ut, men de er ikke synlige på websiden.

    Til slutt er det en kobling til en ekstern JavaScript-fil som inneholder logikken for to-do-listen.
# Selvfølgelig, her er en forklaring av koden i Markdown (.md)-format:

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
