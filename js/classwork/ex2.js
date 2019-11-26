var myInfo = {
    name: "abc",
    address: "damak",
    email: "rojandhimal1@gmail.com",
    interest: ["Coding","debugging"],
    education: [{name: "ABC School of Schoolery", enrolledDate: 2000},
    {name: "BCD School of Trickery", enrolledDate: 2006}]

}

myInfo.education.forEach(function(value){
    console.log("Name:"+value.name+", Date: "+value.enrolledDate);
})