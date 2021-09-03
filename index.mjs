// SKRIPTAS FAILO SKAITYMUI SU THEN IR SU AWAIT


// const fs = require('fs/promises');
import * as fs from 'fs/promises';


// -------------- SU THEN --------------
fs.readFile('a.txt', {encoding: 'utf-8'})
.then(failas => {
    console.log('Is then: ', failas);
})
.catch(error => {
    console.log('FAILO NEPAVYKO PERSKAITYTI (then):', error);
});



// -------------- SU AWAIT --------------
async function skaitytiFaila() {
    try {
        const failas = await fs.readFile('a.txt', {encoding: 'utf-8'});
        console.log('Is await: ', failas);
    }
    catch(error) {
        console.log('FAILO NEPAVYKO PERSKAITYTI (await):', error);
    }
};
skaitytiFaila();


// BE ASINCHRONINES FUNKCIJOS, T.Y. SU AWAIT ISKART MAIN FAILE 
// Kai naudojamas .mjs (vietoje .cjs) await galima naudoti tiesiai pagrindiniame faile be async funkcijos
try {
    const failas = await fs.readFile('a.txt', {encoding: 'utf-8'});
    console.log('Is await be async funkcijos: ', failas);
}
catch(error) {
    console.log('FAILO NEPAVYKO PERSKAITYTI (await be async funkcijos):', error);
};
