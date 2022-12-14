## Deployment
- How to run this app:  \
- Clone this repo.
- npm install.
- "scripts": 
		"npm run dev" : Will run the frontend app.
		"npm run json:server": Will run the backend app.
		"npm run start" : Will run the backend and frontend on the same terminal. "You need to change to local ip adress" 


# Kunskapskontroll 1: Time-tracking-app

## Choice of styling
- Styled Components:\
  I've chosen styled components as my styling choice for this assignment. I've tried alot of librarys before like MUI, Chakra, Bootstrap.. And i wanted to try something new that in a way contains something similar to vanilla CSS but with another structure, i also want to focus on seperating the css logic to a seperated file for a cleaner view.
 - Google Fonts:  \
  Added Poppin font for a nicer font

## Choice of packages
- vite:\
  I've chosen to work with vite for this project. I have tried diffrent types of packages for an app like NextJS and and basic React App, i feel like vite still contains the least things and is more like a clean start. 
- axios:\
  Axios helps me to API calls with fewer lines of code. I don't need to declare JSON strings back and forth with my calls. 
- uuid:\
  Uuid generates IDs with a long unique string every time it's called on, and that helps me not to worry about having a dubbel of an ID in my code. 
- react-icons:\ 
  React icons is used because its very simple to use and has alot of variations for icons.
- dayjs:\
  Dayjs is used to generate and transform date and time. It was very handy to have when I worked with the calendar and timers. 
- timmer-node:\
  Timmer-node is used for starting and stopping timers. It helps create functions like start() and stop() so that I don't have to do it manually. 
- Eslint:\
  I implemented eslint because it helps out to state obious errors, kinda feel like a "must have" in once projects. To put it simple, makes life easier
- Concurrently:\
  Concurrently helps me write in my script to start both backend and frontend at the same time and on the same terminal, found it very usefull and timesaving. 

## Requirements

## En användare ska kunna:
- Skapa ett projekt (X)
- Skapa en task knuten till ett projekt (X)
- Starta en tidtagning för en task (X)
- Stoppa en tidtagning (X)
- Se en lista på tidtagningar för ett specifikt datum (X)
- Se en lista på projekt (X)
- Se en lista på tasks (X)
- Ta bort en tidtagning (X)
- Ta bort en task (X)
- Ta bort ett projekt (X)

## Sidor som ska finnas:
- Tidtagnings-sida (X)
- Kalender/historik-sida (X)
- Överblicks-sida (X)

## För att uppnå Godkänt är kraven att:
- Byggd med React som Frontend och json-server som "backend". (X)

- Använda React Router som router i applikationen. (X)

- Applikationen ska använda React Context som "Store" för applikations-bred data. (X)

- Samtliga krav under "En användare ska kunna" är uppfyllda. (X)

- Samtliga sidor under "Sidor som ska finnas" finns. (X)

- Den ska vara byggd för en mobil-webbläsare i första hand (och behöver inte innehålla styling för desktop). (X)

- Innehålla en README.md där du redogjort för ditt (1) valda sätt att styla applikationen, samt samtliga npm-paket du valt att använda och varför. (Du kan exkludera React och React Router) (X)

- Den ska innehålla en "huvudnavigationsmeny" fixerad på botten på skärmen, som ska användas för att gå mellan de olika sidorna i applikationen (Tidtagning, kalender, överblick t.ex.). Om innehållet på sidan scrollar, ska den fortfarande vara fixerad på botten av applikationen. Den ska även visa vilken sida som är aktiv just nu på något vis. (X)

- När man lägger till ett "projekt" eller en "task" ska detta göras på antingen en separat sida eller i till exempel en modal. (X)

- "Överblick"-sidan ska innehålla två "tabbar", en för projekt och en för tasks som man ska kunna växla mellan på sidan. (X)

- Tiden som visas på tidtagnings-sidan ska "ticka upp" när den är aktiv.
  (Alltså för varje sekund som går, ska den visa det på skärmen) (X)


## För att uppnå Väl Godkänt är kraven att:
- Kunna välja ett tidsspan istället för bara ett specifikt datum i Kalender/historiks-vyn. (Datum & Tid) (X)

- Kunna skapa/välja en användare och tidtagning/tasks/projekt individuella för vald användare. (X)

- Om en tidtagning är aktiv och sidan laddas om/stängs ner och öppnas upp senare, ska den återupptas och visa tiden från när den först startades. (X)
