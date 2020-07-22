let library = {
    book: {
        title: "Anna Karenina",
        chapter1: [{ title: "sdfs" }]
    }
}
//typeof -> string

function copy(obj) {
     if (typeof obj === 'object') {
        let copyObj = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
           copyObj = obj[key];
           if(typeof obj[key] === "object"){
            copy(obj);
           }
           return copyObj;
        }
   } else {
       console.log("Not an object !");
     }
 }
let copyObj = copy(library);
 console.log(copyObj);
