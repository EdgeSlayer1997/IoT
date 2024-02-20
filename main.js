//Elementos
const LedA1 = document.getElementById("LedA1");
const LedA2 = document.getElementById("LedA2");
const LedA3 = document.getElementById("LedA3");
const LedA4 = document.getElementById("LedA4");
const LedA5 = document.getElementById("LedA5");
const LedA6 = document.getElementById("LedA6");
const LedA7 = document.getElementById("LedA7");
const LedA8 = document.getElementById("LedA8");
const LedE1 = document.getElementById("LedE1");
const LedE2 = document.getElementById("LedE2");
const LedE3 = document.getElementById("LedE3");
const LedE4 = document.getElementById("LedE4");
const LedE5 = document.getElementById("LedE5");
const LedE6 = document.getElementById("LedE6");
const LedE7 = document.getElementById("LedE7");
const LedE8 = document.getElementById("LedE8");
var valorDecimal = document.getElementById("valorDecimal");
const Boton1 = document.getElementById("Secuencia1");
const Boton2 = document.getElementById("Secuencia2");
const Boton3 = document.getElementById("Secuencia3");
const Boton4 = document.getElementById("Secuencia4");
const Boton5 = document.getElementById("Secuencia5");
const BotonBinario = document.getElementById("botonBinario");
var Binario1 = 0, Binario2 = 0, Binario3 = 0, Binario4 = 0, Binario5 = 0, Binario6 = 0, Binario7 = 0, Binario8 = 0; 
var Decimal1 = 0, Decimal2 = 0, Decimal3 = 0, Decimal4 = 0, Decimal5 = 0, Decimal6 = 0, Decimal7 = 0, Decimal8 = 0;
var resultado = document.getElementById("resultado");
//////////////////////////////////////Pasos secuencia 1//////////////////////////////////////
let S1TO1, S1TO2, S1TO3, S1TO4, S1TO5, S1TO6, S1TO7, S1TO8, S1TO9;
//////////////////////////////////////Pasos secuencia 2//////////////////////////////////////
let S2TO1, S2TO2;
//////////////////////////////////////Pasos secuencia 3//////////////////////////////////////
let S3TO1, S3TO2, S3TO3, S3TO4;
//////////////////////////////////////Pasos secuencia 4//////////////////////////////////////
let S4TO1, S4TO2, S4TO3, S4TO4, S4TO5, S4TO6, S4TO7;
//////////////////////////////////////Pasos secuencia 5//////////////////////////////////////
let S5TO1, S5TO2;
//////////////////////////////////////////Secuencia 1////////////////////////////////////////
function Secuencia1()
{
    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;
    BotonBinario.disabled = true;
    LedA1.style.display = "none";
    LedE1.style.display = "inline-table";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA4.style.display = "none";
    LedE4.style.display = "inline-table"; 
    LedA5.style.display = "none";
    LedE5.style.display = "inline-table";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table"; 
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    LedA8.style.display = "none";
    LedE8.style.display = "inline-table";
    S1TO1 = setTimeout(() => {
        Secuencia1Paso2()
    }, 3000);
}
    function Secuencia1Paso2()
{
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    S1TO2 = setTimeout(() => {
        Secuencia1Paso3();
    }, 1000);
}

function Secuencia1Paso3()
{
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    S1TO3 = setTimeout(() => {
        Secuencia1Paso4();
    }, 1000);
}

function Secuencia1Paso4()
{
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none";
    S1TO4 = setTimeout(() => {
        Secuencia1Paso5();
    }, 1000);
}

function Secuencia1Paso5()
{
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    S1TO5 = setTimeout(() => {
        Secuencia1Paso6();
    }, 1000);
}

function Secuencia1Paso6()
{
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none";
    S1TO6 = setTimeout(() => {
        Secuencia1Paso7();
    }, 1000);
}

function Secuencia1Paso7()
{
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    S1TO7 = setTimeout(() => {
        Secuencia1Paso8();
    }, 1000);
}

function Secuencia1Paso8()
{
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    S1TO8 = setTimeout(() => {
        Secuencia1Paso9();
    }, 1000);
}

function Secuencia1Paso9()
{
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    S1TO9 = setTimeout(() => {
        Secuencia1();
    }, 1000);
}
//////////////////////////////////////////Secuencia 2////////////////////////////////////////
function Secuencia2()
{
    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;
    BotonBinario.disabled = true;
    LedA1.style.display = "none";
    LedE1.style.display = "inline-table";
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none"; 
    LedA5.style.display = "none";
    LedE5.style.display = "inline-table";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none"; 
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    S2TO1 = setTimeout(() => {
        Secuencia2Paso2();
    }, 1000);
     
}

function Secuencia2Paso2()
{
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA4.style.display = "none";
    LedE4.style.display = "inline-table"; 
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table"; 
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA8.style.display = "none";
    LedE8.style.display = "inline-table";
    S2TO2 = setTimeout(() => {
        Secuencia2()
    }, 1000);
}
//////////////////////////////////////////Secuencia 3////////////////////////////////////////
function Secuencia3()
{
    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;
    BotonBinario.disabled = true;
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    LedA1.style.display = "none";
    LedE1.style.display = "inline-table";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    S3TO1 = setTimeout(() => {
        Secuencia3Paso2();
    }, 1000);
}

function Secuencia3Paso2()
{
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA4.style.display = "none";
    LedE4.style.display = "inline-table";
    S3TO2 = setTimeout(() => {
        Secuencia3Paso3();
    }, 1000);
}

function Secuencia3Paso3()
{
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none";
    LedA5.style.display = "none";
    LedE5.style.display = "inline-table";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table";
    S3TO3 = setTimeout(() => {
        Secuencia3Paso4();
    }, 1000);
}

function Secuencia3Paso4()
{
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none";
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    LedA8.style.display = "none";
    LedE8.style.display = "inline-table";
    S3TO4 = setTimeout(() => {
        Secuencia3();
    }, 1000);
}
//////////////////////////////////////////Secuencia 4////////////////////////////////////////
function Secuencia4()
{
    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;
    BotonBinario.disabled = true;
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none"; 
    LedA4.style.display = "none";
    LedE4.style.display = "inline-table";
    LedA5.style.display = "none";
    LedE5.style.display = "inline-table";
    S4TO1 = setTimeout(() => {
        Secuencia4Paso2();
    }, 1000);    
}

function Secuencia4Paso2()
{
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none";
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table";
    S4TO2 = setTimeout(() => {
        Secuencia4Paso3();
    }, 1000);
}

function Secuencia4Paso3()
{
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    S4TO3 = setTimeout(() => {
        Secuencia4Paso4();
    }, 1000);
}

function Secuencia4Paso4()
{
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA1.style.display = "none";
    LedE1.style.display = "inline-table";
    LedA8.style.display = "none";
    LedE8.style.display = "inline-table";
    S4TO5 = setTimeout(() => {
        Secuencia4Paso5();
    }, 1000);
}

function Secuencia4Paso5()
{
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    S4TO6 = setTimeout(() => {
        Secuencia4Paso6();
    }, 1000);
}

function Secuencia4Paso6()
{
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table";
    S4TO7 = setTimeout(() => {
        Secuencia4();
    }, 1000);
}
//////////////////////////////////////////Secuencia 4////////////////////////////////////////
function Secuencia5()
{
    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;
    BotonBinario.disabled = true;
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none";
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none"; 
    LedA1.style.display = "none";
    LedE1.style.display = "inline-table";
    LedA2.style.display = "none";
    LedE2.style.display = "inline-table";
    LedA3.style.display = "none";
    LedE3.style.display = "inline-table";
    LedA4.style.display = "none";
    LedE4.style.display = "inline-table";
    S5TO1 = setTimeout(() => {
        Secuencia5Paso2();
    }, 1000); 
}

function Secuencia5Paso2()
{
    LedA5.style.display = "none";
    LedE5.style.display = "inline-table";
    LedA6.style.display = "none";
    LedE6.style.display = "inline-table";
    LedA7.style.display = "none";
    LedE7.style.display = "inline-table";
    LedA8.style.display = "none";
    LedE8.style.display = "inline-table"; 
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none";
    S5TO2 = setTimeout(() => {
        Secuencia5();
    }, 1000);
}
/////////////////////////////////////////////Reset///////////////////////////////////////////
function Reset()
{
    Boton1.disabled = false;
    Boton2.disabled = false;
    Boton3.disabled = false;
    Boton4.disabled = false;
    Boton5.disabled = false;
    BotonBinario.disabled = false;
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none"; 
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none"; 
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    clearTimeout(S1TO1);
    clearTimeout(S1TO2);
    clearTimeout(S1TO3);
    clearTimeout(S1TO4);
    clearTimeout(S1TO5);
    clearTimeout(S1TO6);
    clearTimeout(S1TO7);
    clearTimeout(S1TO8);
    clearTimeout(S1TO9);
    clearTimeout(S2TO1);
    clearTimeout(S2TO2);
    clearTimeout(S3TO1);
    clearTimeout(S3TO2);
    clearTimeout(S3TO3);
    clearTimeout(S3TO4);
    clearTimeout(S4TO1);
    clearTimeout(S4TO2);
    clearTimeout(S4TO3);
    clearTimeout(S4TO4);
    clearTimeout(S4TO5);
    clearTimeout(S4TO6);
    clearTimeout(S4TO7);
    clearTimeout(S5TO1);
    clearTimeout(S5TO2);
}

function Binario()
{
    if (valorDecimal.value <= 255 && valorDecimal.value >= 0)
    {  
    LedA1.style.display = "inline-table";
    LedE1.style.display = "none";
    LedA2.style.display = "inline-table";
    LedE2.style.display = "none";
    LedA3.style.display = "inline-table";
    LedE3.style.display = "none";
    LedA4.style.display = "inline-table";
    LedE4.style.display = "none"; 
    LedA5.style.display = "inline-table";
    LedE5.style.display = "none";
    LedA6.style.display = "inline-table";
    LedE6.style.display = "none"; 
    LedA7.style.display = "inline-table";
    LedE7.style.display = "none";
    LedA8.style.display = "inline-table";
    LedE8.style.display = "none";
    //0000 0001
    Binario1 = valorDecimal.value%2;
    Decimal1 = Math.floor(valorDecimal.value/2);

    //0000 0010
    Binario2 = Decimal1%2;
    Decimal2 = Math.floor(Decimal1/2);

    //0000 0100
    Binario3 = Decimal2%2;
    Decimal3 = Math.floor(Decimal2/2);

    //0000 1000
    Binario4 = Decimal3%2;
    Decimal4 = Math.floor(Decimal3/2);

    //0001 0000
    Binario5 = Decimal4%2;
    Decimal5 = Math.floor(Decimal4/2);

    //0010 0000
    Binario6 = Decimal5%2;
    Decimal6 = Math.floor(Decimal5/2);

    //0100 0000
    Binario7 = Decimal6%2;
    Decimal7 = Math.floor(Decimal6/2);

    //1000 0000
    Binario8 = Decimal7%2;
    Decimal8 = Math.floor(Decimal7/2);

    if (Binario1 != 0)
    {
        LedA8.style.display = "none";
        LedE8.style.display = "inline-table";
    }

    if (Binario2 != 0)
    {
        LedA7.style.display = "none";
        LedE7.style.display = "inline-table";
    }

    if (Binario3 != 0)
    {
        LedA6.style.display = "none";
        LedE6.style.display = "inline-table";
    }

    if (Binario4 != 0)
    {
        LedA5.style.display = "none";
        LedE5.style.display = "inline-table";
    }

    if (Binario5 != 0)
    {
        LedA4.style.display = "none";
        LedE4.style.display = "inline-table";
    }

    if (Binario6 != 0)
    {
        LedA3.style.display = "none";
        LedE3.style.display = "inline-table";
    }

    if (Binario7 != 0)
    {
        LedA2.style.display = "none";
        LedE2.style.display = "inline-table";
    }

    if (Binario8 != 0)
    {
        LedA1.style.display = "none";
        LedE1.style.display = "inline-table";
    }

    resultado.innerHTML = "Valor decimal ingresado: "+"<br>"+valorDecimal.value+"<br>"+
                          "Valor binario equivalente a: "+"<br>"+Binario8+Binario7+Binario6+Binario5+Binario4+Binario3+Binario2+Binario1;

    Boton1.disabled = true;
    Boton2.disabled = true;
    Boton3.disabled = true;
    Boton4.disabled = true;
    Boton5.disabled = true;  
    }
    else
    {
        alert("Ingresa un numero dentro del rango asignado (0-255)");
    }
}