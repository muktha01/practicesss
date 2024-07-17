//for loop
for(i=1;i<=10 ;i++){
    console.log(i);

};

//while 
 j=11;
while(j<=30){
    console.log(j);
    j++;
};

//do-while
k=31;
do{
    console.log(k);
    k++;

   
}while(k<=50){

};

//for of 
name = "venkatesh";
for(let arr of name ){
    console.log("word - " , arr);
};

//for in 
let websoc ={
    name : "venkat",
    age : 23,
    salary : undefined,
    work_status : "pending"
};

for(let ar in websoc){
    console.log(ar ,"-",websoc[ar]);
};

//for each
let array = [51 ,52, 53, 54, 55];
array.forEach(function(element){
    console.log(element);
})


