const getName = () =>{
    return "Tushar Ahmed";
}
const getAge = () =>{
    return "23";
}
const cgpa = 3.65;
// exports.getName = getName;
// exports.cgpa = cgpa;
module.exports = {
    getAge,
    getName,
    cgpa
}