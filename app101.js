const student  = {
    names : "karan",
    age : 14,
    class  : 9,
    subjects : ["Hindi" , "Marathi" , "Math" , "English"],
    username : "karan@123",
    password  : "abcd",
    
};

let {username: user, password : secret , city: place =  "Mumbai" } = student;
