import {studentdata} from "./student.js";
/*studentdata.forEach((item) => {
    if(item.roll==123)
        {
            item.name="dsp";
        }
})
console.log(studentdata)*/
/*const names = ["raj","rani","ravi"]
names.map(item=>{console.log(item)})
studentdata.map(ele=>{console.log(`name: ${ele.name}`)
                       console.log(`roll:${ele.roll}`)
                       console.log(`phone:${ele.phone}`)})*/
const nums=[1,2,3,4,5,6,7,8,9,10,11,12]
const modifed= nums.filter((val)=>{
    if(val%2==0){
        return val;
    }
})