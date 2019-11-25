var languages=['c','c++','java','php','python','js','R',
'Rubby','python','js','R','Rubby','js','R',
'Rubby','python','js','R','Rubby','R','Rubby',
'python','js','R','Rubby','js','c','c++','java','php','python','js',];

console.log("old array >>>",languages);

var unique_lang = languages.filter((val, i, languages)=> languages.indexOf(val)== i);

console.log("Unique array >>>",unique_lang);


var count = 0;
for(x in unique_lang){
    for(y in languages){
        if (unique_lang[x] == languages[y]){
            count+=1;

        }

       
    }
    console.log(unique_lang[x],">>",count);
    count= 0;
}
