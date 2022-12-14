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

## En anv??ndare ska kunna:
- Skapa ett projekt (X)
- Skapa en task knuten till ett projekt (X)
- Starta en tidtagning f??r en task (X)
- Stoppa en tidtagning (X)
- Se en lista p?? tidtagningar f??r ett specifikt datum (X)
- Se en lista p?? projekt (X)
- Se en lista p?? tasks (X)
- Ta bort en tidtagning (X)
- Ta bort en task (X)
- Ta bort ett projekt (X)

## Sidor som ska finnas:
- Tidtagnings-sida (X)
- Kalender/historik-sida (X)
- ??verblicks-sida (X)

## F??r att uppn?? Godk??nt ??r kraven att:
- Byggd med React som Frontend och json-server som "backend". (X)

- Anv??nda React Router som router i applikationen. (X)

- Applikationen ska anv??nda React Context som "Store" f??r applikations-bred data. (X)

- Samtliga krav under "En anv??ndare ska kunna" ??r uppfyllda. (X)

- Samtliga sidor under "Sidor som ska finnas" finns. (X)

- Den ska vara byggd f??r en mobil-webbl??sare i f??rsta hand (och beh??ver inte inneh??lla styling f??r desktop). (X)

- Inneh??lla en README.md d??r du redogjort f??r ditt (1) valda s??tt att styla applikationen, samt samtliga npm-paket du valt att anv??nda och varf??r. (Du kan exkludera React och React Router) (X)

- Den ska inneh??lla en "huvudnavigationsmeny" fixerad p?? botten p?? sk??rmen, som ska anv??ndas f??r att g?? mellan de olika sidorna i applikationen (Tidtagning, kalender, ??verblick t.ex.). Om inneh??llet p?? sidan scrollar, ska den fortfarande vara fixerad p?? botten av applikationen. Den ska ??ven visa vilken sida som ??r aktiv just nu p?? n??got vis. (X)

- N??r man l??gger till ett "projekt" eller en "task" ska detta g??ras p?? antingen en separat sida eller i till exempel en modal. (X)

- "??verblick"-sidan ska inneh??lla tv?? "tabbar", en f??r projekt och en f??r tasks som man ska kunna v??xla mellan p?? sidan. (X)

- Tiden som visas p?? tidtagnings-sidan ska "ticka upp" n??r den ??r aktiv.
  (Allts?? f??r varje sekund som g??r, ska den visa det p?? sk??rmen) (X)


## F??r att uppn?? V??l Godk??nt ??r kraven att:
- Kunna v??lja ett tidsspan ist??llet f??r bara ett specifikt datum i Kalender/historiks-vyn. (Datum & Tid) (X)

- Kunna skapa/v??lja en anv??ndare och tidtagning/tasks/projekt individuella f??r vald anv??ndare. (X)

- Om en tidtagning ??r aktiv och sidan laddas om/st??ngs ner och ??ppnas upp senare, ska den ??terupptas och visa tiden fr??n n??r den f??rst startades. (X)
