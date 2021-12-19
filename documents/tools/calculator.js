//Declaring all the result labels
var result0 = document.getElementById("lblmess0");
var result1 = document.getElementById("lblmess1");
var result2 = document.getElementById("lblmess2");
var result3 = document.getElementById("lblmess3");
var result3a = document.getElementById("lblmess3a");
var result4 = document.getElementById("lblmess4");
var result5 = document.getElementById("lblmess5");
var result6 = document.getElementById("lblmess6");
var result7 = document.getElementById("lblmess7");
var result8 = document.getElementById("lblmess8");
var result9 = document.getElementById("lblmess9");
var result10 = document.getElementById("lblmess10");
var result11 = document.getElementById("lblmess11");
var result12 = document.getElementById("lblmess12");
var result13 = document.getElementById("lblmess13");
var result14 = document.getElementById("lblmess14");
var result15 = document.getElementById("lblmess15");
var result16 = document.getElementById("lblmess16");
//Declaring the class switch element
var toChange = document.getElementById("switchclass");
//Activating the hidden boxes
function yesnoCheck() {
    if (document.getElementById("typelist").value == "enchantment") {
        document.getElementById("expandable").style.display = "table";
        toChange.className = "optional"
    }
    else {
        document.getElementById("expandable").style.display = "none";
        toChange.className = "required"
    }
}
//Displaying the result in the labels
function getType() {
    result0.innerHTML= ("type= ");
    val0.innerHTML= (formid.typeselect[formid.typeselect.selectedIndex].text)
}
function getItemID() {
    result1.innerHTML= ("items= ");
    val1.innerHTML= (document.getElementById("itemID").value)
}
function getTextureName() {
    result2.innerHTML= ("texture= ");
    val2.innerHTML= (document.getElementById("textureName").value)
}
function getModelName() {
    result3.innerHTML= ("model= ");
    val3.innerHTML= (document.getElementById("modelName").value)
}
function getWeight() {
    result3a.innerHTML= ("weight= ");
    val3a.innerHTML= (document.getElementById("weight").value)
}
function getDamageValue() {
    result4.innerHTML= ("damage= ");
    val4.innerHTML= (document.getElementById("damageValue").value)
}
function getStackSize() {
    result5.innerHTML= ("stackSize= ");
    val5.innerHTML= (document.getElementById("stackSize").value)
}
function getEnchantmentID() {
    result6.innerHTML= ("enchantments= ");
    val6.innerHTML= (formid.enchantmentid[formid.enchantmentid.selectedIndex].value)
}
function getEnchantmentLevel() {
    result7.innerHTML= ("enchantmentLevels= ");
    val7.innerHTML= (document.getElementById("enchantmentLevel").value)
}
function getHand() {
    result8.innerHTML= ("hand= ");
    val8.innerHTML= (document.getElementById("handlist").value)
}
function getDisplayName() {
    result9.innerHTML= ("nbt.display.Name= ");
    val9.innerHTML= (document.getElementById("displayName").value)
}
function getDisplayLore() {
    result10.innerHTML= ("nbt.display.Lore= ");
    val10.innerHTML= (document.getElementById("displayLore").value)
}
function getBlend() {
    result11.innerHTML= ("blend= ");
    val11.innerHTML= (document.getElementById("blendlist").value)
}
function getSpeed() {
    result12.innerHTML= ("speed= ");
    val12.innerHTML= (document.getElementById("speed").value)
}
function getRotation() {
    result13.innerHTML= ("rotation= ");
    val13.innerHTML= (document.getElementById("rotation").value)
}
function getLayer() {
    result14.innerHTML= ("layer= ");
    val14.innerHTML= (document.getElementById("layer").value)
}
function getDuration() {
    result15.innerHTML= ("duration= ");
    val15.innerHTML= (document.getElementById("duration").value)
}
function getPotion() {
    result16.innerHTML= ("nbt.Potion= ");
    val16.innerHTML= (formid.potionid[formid.potionid.selectedIndex].value)
}

















