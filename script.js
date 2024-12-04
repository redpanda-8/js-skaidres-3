// JS-3 - 16 skaidre
// 1 -----------------------------------------------------------------------------------------------------------------------
// 1. Apibrezkite funkcija pavadinimu hello(), kuria pasaukus, atspausdintu konsoleje "Hello World"
function hello(){
    console.log('Hello World');
};

hello();

// 2 -----------------------------------------------------------------------------------------------------------------------
// 2. Patobulinkite pries tai parasyta funkcija hello(), kuri priimtu parametra vardas, ir ja pasaukus, isspausdintu 
// konsoleje "Hello ${vardas}.". Pasaukite funkcija du kartus, kad isspausdintu jusu varda, o veliau jusu megstamo aktoriaus varda.

// pakeiciam is hello() i helloW2() kad nesusipjautu su dviguba deklaracija consolej ziurint web'e
// priskiriame funkcijai helloW2 parametra vardas, vardui nustatome default reiksme 'Panda' 
function helloW2(vardas = 'Panda') {
    console.log(`Hello ${vardas}`);
};

// pirma karta kvieciant funkcija argumento vardas nepateikiame, taigi paima default 'Panda'
// antra karta kvieciant funkcija argumento vardas reiksme 'Petras', tdl parodo console.log
helloW2();
helloW2('Petras');

// 3 -----------------------------------------------------------------------------------------------------------------------
// 3. Sukurkite du kintamuosius vardas ir amzius. Zemiau apibrezkite funkcija prabegoMetai(),kuri kiekviena karta pasaukta 
// pakeltu metus per vieneta ir konsoleje atspausdintu jusu varda ir metus. Pameginkite prabegti kelis metus is eiles.

// kadangi kintamasis amzius yra uz funkcijos ribu, jis yra pasiekiamas funkcijos viduje ir taip pat funkcija
// gali ji pakeisti, tdl kaskarta paleidziant funckija prabegoMetai amzius vis dideja plius vienu, jei
// kintamasis amzius butu funkcijos viduje - funkcija issaukiant butu per nauja deklaruojama reiksme
let vardas = 'Panda';
let amzius = 20;


function prabegoMetai() {
    ++amzius
    console.log(vardas, amzius);
};

prabegoMetai();
prabegoMetai();
prabegoMetai();

// 4 -----------------------------------------------------------------------------------------------------------------------
// 4. Apibrezkite funkcija, kuri priimtu tris parametrus numerius ir grazintu bei konsoleje atspausdintu maziausia numeri.

// aprasiau funkcija kuri is pateiktu 3 skaciu suranda maziausia naudojant Math.min metoda
// kadangi yra return statement'as pakviesta funckija tiesiog grazins maziausia skaiciu todel ja galima tiesiai naudoti
// kitose funkcijose ar console.log'e
function maziausiasNumeris(a, b, c) {

    let maziausias = Math.min(a, b, c);   
    return maziausias;

};

let maziausiasSkaicius = maziausiasNumeris(4, 6, 8);

console.log(maziausiasSkaicius);

// 5 -----------------------------------------------------------------------------------------------------------------------
// 5. Apibrezkite funkcija, kuri priimtu tris parametrus - numerius ir konsoleje atspausdintu ju aritmetini vidurki.
// Vienas is skaiciu turi buti 4 uzduoties rezultatas.

// taip pat kaip 4 uzduotis
function apskaiciuotiVidurki(a, b, c) {

    let vidurkis = (a + b + c) / 3;   
    return vidurkis;

};

let vidurinisSkaicius = apskaiciuotiVidurki(maziausiasSkaicius, 8, 10);

console.log(vidurinisSkaicius);

// 6 -----------------------------------------------------------------------------------------------------------------------
// 6. Apibrezkite funkcija, kuri priimtu parametra numeri ir grazintu vienetu aukstesne verte. Priskirkite grazinimo 
// rezultata kintamajam ir isspausdinkite kintamojo reiksme ekrane.

function padidinamNumeri(numeris) {
    ++numeris 
    return numeris
};

var startinisNumeris = 40;
var padidintasNumeris = padidinamNumeri(startinisNumeris);

console.log(padidintasNumeris);

// JS-3 - 28 skaidre  (Rezultatus atspausdinti konsoleje:)
// 1 -----------------------------------------------------------------------------------------------------------------------
// 1. Sukurti funkcija, kuri skaiciuoja pazymiu vidurki. Pazymiai turi buti paduodamami per parametrus.

// Naudodama dinamini parametru operatoriu (...) galiu ivesti i funkcija kiek noriu pazymiu
// tada apsiskaiciuoju pazymiu suma naudodama .reduce metoda ir accumuliatoriaus metoda rasta:
// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
// tada apskaicuoju kiek is viso ivesta pazymiu, naudodama array.lenght metoda

function pazymVidurkis(...pazymiai) {

    const pazymiaiTotal = pazymiai.reduce(function(acc, val) { return acc + val; }, 0);
    const pazymiaiAmount = pazymiai.length;
    const vidurkis = pazymiaiTotal / pazymiaiAmount;

   return vidurkis;

};

const vidurkis = pazymVidurkis(7, 8, 7, 4, 10, 8);

// 2 -----------------------------------------------------------------------------------------------------------------------
// 2. Sukurti funkcija, kuri priima pirmo pratimo funkcijos rezultata ir atspausdina zinute ar mokinys gaus stipendija, ar ne.

// console.log('Jusu vidurkis yra: '+ vidurkis + 'stipendija gausite'); - galima ir taip
// function arGausiStipendija(sitos reiksmes jis nemato ir cia nera kintamasisi is praeitos funckijos, cia placeholderis)
// kintamieji yra paimami jos issaukimo metu, NE APRASYMO METU (FUNKCIJOS VIDUJE)

function arGausiStipendija(vidurkisFunkcijosReikmems){
    if (vidurkisFunkcijosReikmems  > 4) {
        console.log(`Jusu vidurkis yra: ${vidurkisFunkcijosReikmems} stipendija gausite`);
    } else {
        console.log(`Jusu vidurkis yra: ${vidurkisFunkcijosReikmems} stipendijos negausite`);
    };
};

arGausiStipendija(vidurkis);

// 3 -----------------------------------------------------------------------------------------------------------------------
// 3. Parasyti funkcija, kuri grazina ivesta zmogaus varda. Grazinama reiksme issaugoti kintamajame.

// du variantai kaip galima atnaujinti kintamaji naudojant funkcija
// 1 variantas - naudojamas kai ta pacia funkcija gali reiketi atnaujint skirtingus kintamuosius

let vardas2 = '';

function grazinamVardas(duodamVarda){
    return duodamVarda;
};

vardas2 = grazinamVardas('Tom');

// 2 variantas - yra naudojamas kai ta pati kintamaji gali reiketi atnaujinti kelis kartus
function grazinamVardasTvarkingai(duodamVarda){

    vardas2 = duodamVarda;
    return vardas2;
};

grazinamVardasTvarkingai('Tomas')

// 4 -----------------------------------------------------------------------------------------------------------------------
// 4. Sukurti funkcija, kuri priima ankstesnes uzduoties funkcijos rezultata ir pasveikina prisijungusi vartotoja
// paminedama jo varda ir skaiciuoja kelinta karta buvo prisijungta prie puslapio. Funkcija iskviesti kelis kartus.

//  vardas2 nerasom antra karta, kad nesuluztu viskas, NES JIS YRA APRASYTAS PRIES TAI
// sioje funkcijoje naudojame paduodama parametra vardas iskvieciant fukncija
// jam priskiriame kintamaji vardas2 is praeitos uzduoties
// skaiciuoti kelinta karta vartotojas buvo prisijunges, susikureme nauja kintamaji prisijungimuSkaicius
// kadangi sis kintamasis yra uz funkcijos ribu, jis gali buti pasiekiamas funkcijoje bei atnaujintas is funkcijos vidaus
// naudajame ++ operatoriu padidinti sio kintamojo reiksme kaskarta issovus funkcijai

let prisijungimuSkaicius = 0;

function pasveikintiVartotoja(vardas) {
    console.log(`Sveikiname prisijungus ${vardas}, jus cia: ${++prisijungimuSkaicius} kartu`);
};

pasveikintiVartotoja(vardas2);
pasveikintiVartotoja(vardas2);
pasveikintiVartotoja(vardas2);

// 5 -----------------------------------------------------------------------------------------------------------------------
// 5. Sukurti funkcija, kuri apskaiciuotu metini atlyginima. Panaudoti du parametrus: zmogaus varda ir menesio atlyginimo dydi.

// su funkcija metinisAtlyginimas viduje nurodau kintamaji algaMetams, kuris paima argumento value is funkcijos
// iskvietimo apacioje ir padaugina is 12, console.log pasveikina ir parodo zmogui kokia jo metine alga

function metinisAtlyginimas(vardas, algaMenesio) {
    let algaMetams = algaMenesio * 12;
    console.log(`Sveikiname ${vardas}, jusu metine alga: ${algaMetams}$`);
};

metinisAtlyginimas('Tomas', 500);

// 6 -----------------------------------------------------------------------------------------------------------------------
// 6. Apibrezkite funkcija, kuri priimtu du parametrus, nuvaziuoti kilometrai ir degalu litro kaina, ir apskaiciuotu kiek 
// jums kainavo kelione. Automobilio kuro vartojima priskirkite kintamajam, o jo verte pasirinkti pagal jusu turimo automobilio kuro vartojima. 

function apskaiciuotiKelionesKaina(km, kuroKaina) {
    let kuroVartojimas = 7;
    let sunaudotasKuras = (km / 100) * kuroVartojimas;
    let kelionesKaina = sunaudotasKuras * kuroKaina;
    console.log(`Kelioneje nuvaziavome ${km}km, mano masina vartoja ${kuroVartojimas}l/100km. Is viso isvazinejome ${sunaudotasKuras}l kuro. Kadangi kuro kaina ${kuroKaina}$, kelione man kainavo: ${kelionesKaina}$`);
    return kelionesKaina;
};

apskaiciuotiKelionesKaina(200, 1.5);

// 7 -----------------------------------------------------------------------------------------------------------------------
// 7. Apibrezkite funkcija, kuri priimtu metus ir atspausdintu konsoleje ar tai lyginiai metai ar ne.

function arLyginiaiMetai(metai) {
    let b = metai  % 2 === 0 ? 'lyginis' : 'nelyginis';
    console.log(metai, ' yra ' + b);

};

arLyginiaiMetai(1764);


// JS-3 - 33 skaidre (Rezultatus atspausdinti konsoleje:)
// 1 -----------------------------------------------------------------------------------------------------------------------
// 1. Sukurti funkcija, kuri priima du skaicius ir grazina ju suma. Panaudoti prompt ir alert funkcijas.


function pateiktuSkaiciuSuma(skaicius1, skaicius2) {
     // techniskai teisingas metodas, nes i kiekviena kintamaji idetas minimalus veiksmu skaicius
    const skaicius1matematikai = Number(skaicius1);
    const skaicius2matematikai = Number(skaicius2);   
    const suma = skaicius1matematikai + skaicius2matematikai;

    // taip pat galimas metodas, techniskai sudetingesnis kodas, bet svera maziau duomenu
    const sumaTrumpiau = Number(skaicius1) + Number(skaicius2);
    return suma;
};

// let pirmasSkaicius = prompt('iveskite pirma skaiciu');
// let antrasSkaicius = prompt('iveskite antra skaiciu');

// alert(pateiktuSkaiciuSuma(pirmasSkaicius, antrasSkaicius));

// antras optimizuotas variantas:
function pateiktuSkaiciuSuma2() {
    let skaicius1 = Number(prompt('iveskite pirma skaiciu'));
    let skaicius2 = Number(prompt('iveskite antra skaiciu'));
    const suma = skaicius1 + skaicius2;

    alert('Jusu skaiciu suma: '+ suma);
};

// pateiktuSkaiciuSuma2();


// 2 -----------------------------------------------------------------------------------------------------------------------
// 2. Sukurti funkcija, kuri priima skaiciu ir grazina jo kvadrata.

function pakeliamKvadratu(skaicius) {
    // const kvadratas = skaicius * skaicius;    -paprasciausias budas
    const kvadratas = Math.pow(skaicius, 2);
    console.log(`${skaicius} pakeltas kvadratu yra lygus: ${kvadratas}`);
    return kvadratas;
};

pakeliamKvadratu(4);

// 3 -----------------------------------------------------------------------------------------------------------------------
// 3. Sukurti funkcija, kuri patikrina, ar duotas skaicius yra teigiamas.

function arSkaiciusTeigiamas(skaicius){
    if (skaicius >= 0) {
        console.log(`Teigiamas ${skaicius}`);
    } else {
        console.log(`Neigiamas ${skaicius}`);
    };
};

arSkaiciusTeigiamas(20);

// 4 -----------------------------------------------------------------------------------------------------------------------
// 4. Sukurti funkcija, kuri sujungia kelis zodzius i viena sakini.

function sujungiamSakini(zodis1, zodis2){
    const sujungiam = zodis1 + zodis2;
    return sujungiam;
};

console.log(sujungiamSakini('labas ', 'vakaras'));

// 5 -----------------------------------------------------------------------------------------------------------------------
// 5. Sukurti funkcija, kuri priima skaiciu ir tikrina, ar jis yra lyginis ar nelyginis.

function arLyginisSkaicius(skaicius) {
    let b = skaicius  % 2 === 0 ? 'lyginis' : 'nelyginis';
    console.log(skaicius, ' yra ' + b);

};

arLyginisSkaicius(176);

// 6 -----------------------------------------------------------------------------------------------------------------------
// 6. Sukurti funkcija, kuri priima du vartotojo ivestus (prompt) skaicius ir tikrina, ar pirmas skaicius dalijasi be 
// liekanos is antrojo skaiciaus.


function arDalinasiBeLiekanos(skaicius1, skaicius2) {
   const skaicius1matematikai = Number(skaicius1);
   const skaicius2matematikai = Number(skaicius2);   
   const suma = skaicius1matematikai / skaicius2matematikai;

   if (Number.isInteger(suma)) {
    return 'be liekanos!';
  }
  return 'su liekana!';
};

// let pirmasSkaicius = prompt('iveskite pirma skaiciu');
// let antrasSkaicius = prompt('iveskite antra skaiciu');

// alert(arDalinasiBeLiekanos(pirmasSkaicius, antrasSkaicius));

// 7 -----------------------------------------------------------------------------------------------------------------------
// 7. Sukurti funkcija, kuri priima tris skaicius ir grazina didziausia is ju.

function randameDidziausiaSkaiciu(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
console.log(randameDidziausiaSkaiciu(10, 25, 15));

// Sitas metodas iki galo neuzbaigtas, nes dar reiktu lyginti z ir y (tai dar butu else if maziausiai 6)
function kurisDidziausias(x, y, z) {
    if (x > z && x > y) {
        console.log("X is bigger than both Z and Y.");
        return x;
    } else if (x > z) {
        console.log("X is bigger than Z but smaller than Y.");
        return y;
    } else if (x > y) {
        console.log("X is bigger than Y but smaller than Z.");
        return z;
    }
};

kurisDidziausias(10, 20, 30);

// 8 -----------------------------------------------------------------------------------------------------------------------
// 8. Sukurti funkcija, kuri priima vartotojo ivesta skaiciu ir atlieka sudeties veiksma su funkcijoje esanciais skaiciais.

function sudedaSkaicius(skaicius) {
    const skaicius1matematikai = Number(skaicius);
    const skaicius2matematikai = 5;
    const skaicius3matematikai = 60;   
    const suma = skaicius1matematikai + skaicius2matematikai + skaicius3matematikai;
    console.log(suma)
    return suma;
};

// let ivestasSkaicius = prompt('iveskite skaiciu');

// sudedaSkaicius(ivestasSkaicius);


// JS-3 - 36 skaidre (Rezultatus atspausdinti konsoleje:)
// 1 -----------------------------------------------------------------------------------------------------------------------
// 1. Sukurti funkcija, kuri priima skaiciu ir istraukia jo sakni. Jei atsakymas nera sveikas skaicius, 
// pasalinti skaicius po kablelio ir grazinti sveika skaiciu.

function istraukiaSkaiciausSakni(skaicius) {
    let saknis = Math.sqrt(skaicius);
    return Math.floor(saknis); //pasalina skaicius po kablelio
};

let skaicius = 20;
let skaiciausSaknis = istraukiaSkaiciausSakni(skaicius);
console.log(skaiciausSaknis); // parodys 4, be liekanos 4,472

// 2 -----------------------------------------------------------------------------------------------------------------------
// 2. Sukurti funkcija, kuri sugeneruoja atsitiktini sveikaji skaiciu nurodytu skaiciu intervale, pvz nuo 5 iki 45.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //+1 padaro imtinai skaicius 5 ir 45(kitaip butu 44)
};

let randomNumber = getRandomInt(5, 45);
console.log(randomNumber);

// 3 -----------------------------------------------------------------------------------------------------------------------
// 3. Sukurti funkcija, kuri priima tris skaicius ir grazina didziausia is ju.

function randameDidziausiaSkaiciu(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
console.log(randameDidziausiaSkaiciu(10, 25, 15));
