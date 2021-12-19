// Declaring all the result labels
var result0 = document.getElementById("lblmess0");
var result1 = document.getElementById("lblmess1");
var result2 = document.getElementById("lblmess2");
var result3 = document.getElementById("lblmess3");
var result4 = document.getElementById("lblmess4");
var result5 = document.getElementById("lblmess5");
var result6 = document.getElementById("lblmess6");
var result7 = document.getElementById("lblmess7");
var result8 = document.getElementById("lblmess8");
var result9 = document.getElementById("lblmess9");
var result10 = document.getElementById("lblmess10");
var result11 = document.getElementById("lblmess11");
var result12 = document.getElementById("lblmess12");

var variant = document.getElementById("variantinput");


function getTextureName() {
    var variant = document.getElementById("variantinput");
    result0.innerHTML= ("textures." + variant.value + "= ");
    val0.innerHTML= (document.getElementById("textureName").value)
}
function getWeight() {
    var variant = document.getElementById("variantinput");
    result1.innerHTML= ("weights." + variant.value + "= ");
    val1.innerHTML= (document.getElementById("weight").value)
}
function getHeight() {
    var variant = document.getElementById("variantinput");
    result2.innerHTML= ("heights." + variant.value + "= ");
    val2.innerHTML= (document.getElementById("height").value)
}
function getName() {
    var variant = document.getElementById("variantinput");
    result3.innerHTML= ("names." + variant.value + "= ");
    val3.innerHTML= (document.getElementById("name").value)
}
function checkChecked() {
    var variant = document.getElementById("variantinput");
    var biomes = document.forms[0];
    var biomeIDs = "";
    var i;

    for (i = 0; i < biomes.length; i++) {
        if (biomes[i].checked) {
            biomeIDs = biomeIDs + " " + biomes[i].value;
        }
    }
    result4.innerHTML = "biomes." + variant.value + "= ";
    document.getElementById("val4").innerHTML = biomeIDs
    
}
function getHealth() {
    var variant = document.getElementById("variantinput");
    result5.innerHTML= ("health." + variant.value + "= ");
    val5.innerHTML= (document.getElementById("health").value)
}
function getWeather() {
    var variant = document.getElementById("variantinput");
    result6.innerHTML= ("weather." + variant.value + "= ");
    val6.innerHTML= (document.getElementById("weatherlist").value)
}
function getDayTime() {
    var variant = document.getElementById("variantinput");
    result7.innerHTML= ("dayTime." + variant.value + "= ");
    val7.innerHTML= (document.getElementById("daytime").value)
}
function getMoonPhase() {
    var variant = document.getElementById("variantinput");
    result8.innerHTML= ("moonPhase." + variant.value + "= ");
    val8.innerHTML= (document.getElementById("moonphase").value)
}
function getBaby() {
    var variant = document.getElementById("variantinput");
    result9.innerHTML= ("baby." + variant.value + "= ");
    val9.innerHTML= (document.getElementById("baby").value)
}
function getCollarColor() {
    var variant = document.getElementById("variantinput");
    result10.innerHTML= ("collarColors." + variant.value + "= ");
    val10.innerHTML= (document.getElementById("collarcolor").value)
}
function getProfessions() {
    var variant = document.getElementById("variantinput");
    result11.innerHTML= ("professions." + variant.value + "= ");
    val11.innerHTML= (document.getElementById("professions").value)
}
function checkCheckedColor() {
    var variant = document.getElementById("variantinput");
    var colors = document.forms[0];
    var colorIDs = "";
    var i;

    for (i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            colorIDs = colorIDs + " " + colors[i].value;
        }
    }
    result12.innerHTML = "collarColors." + variant.value + "= ";
    document.getElementById("val12").innerHTML = colorIDs
    
}
