const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (lagu) {
//     console.log(lagu);
//  })

coding.forEach(  (lagu) => {
    // console.log(lagu);
 })

//  function printMe(lagu) {
//     console.log(lagu);
//  }

//  coding.forEach(printMe)

coding.forEach( (lagu, index, arr)=>{
    // console.log(lagu, index, arr);
})

const myCoding = [
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
]

myCoding.forEach( (lag) => {
    console.log(lag.languageName);
})
