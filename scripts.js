const nome = "SENHOR PET SHOP - ANIMAIS SÊNIOR";
const ano = "2024";
const twitter = "@srpetshop";
const facebook = "@senhorpetshop";
const instagram = "@senhorpetshop";
const linkedin = "@senhorpetshop";
const sexo = "MASCULINO";
const localizacao = "POLO: HIGIENÓPOLIS";

document.write(`
    <div id="info-container" 
    style="display: flex; 
    justify-content: center;
    gap: 15px; 
    font-size: 10px; 
    font-weight: bold; 
    background-color: #ffcc80; 
    padding: 10px 0;">
        <span>${nome}</span>
        <span>ANO: ${ano}</span>
        <span>TWITTER: ${twitter}</span>
        <span>FACEBOOK: ${facebook}</span>
        <span>INSTAGRAM: ${instagram}</span>
        <span>LINKEDIN: ${linkedin}</span>
        <span>SEXO: ${sexo}</span>
        <span>LOCALIZAÇÃO: ${localizacao}</span>
    </div>
`);
