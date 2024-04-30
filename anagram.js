
function anagram(str1,str2) {
if (str1.length==str2.length) {
    
    return str1.split("").sort().join("")==str2.split("").sort().join("");

}else{
    return false;
}
}
console.log(`String is Annagram :` +anagram('magic','gimac'));