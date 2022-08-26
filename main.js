var obj=[
    {
        name:'abc',
        Age:24
    },
    {
        name:'bca',
        Age:21
    },{
        name:'hdh',
        Age:23
    },{
        name:'avs',
        Age:22
    }
]

var a=obj.sort((a,b)=>{
    return a.Age-b.Age
})
var b=a.filter((e)=>{
    console.log(e.Age);
})

// var colors=prompt()
// // var arr=[red,blue]
// switch (true) {
//     case colors=='red':
//         console.log('colors is',colors);
//         break
//         case colors=='blue':
//         console.log('color is',colors);
//         break

//     default:
//         console.log('it is not a color');
// }

var num=55;
if (num<100) {
    if (num<70) {
        console.log('num is below 70');
    }
    if (num>70) {
        console.log('num is above 70');
    }
}
else{
    console.log('num is not in 100');
}


var age=prompt('enter your age')
var gender=prompt('enter your gender M or F')
var  marital=prompt('are u married Y or N')
if(gender == 'F') {
    console.log("work to urban areas");
}

if(gender == 'M') {
    if(age > 20 && age < 40 )  {
        console.log("work to anywhere");
    }
    else if(age > 40 && age < 60)  {
        console.log("work to urban areas");
    }
    else {
    console.log(error);
    }
}



