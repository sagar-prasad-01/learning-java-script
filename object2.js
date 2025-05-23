let students={
    name:"sagar",
    age:18,
    State:"bihar",
    array:[1,2,3,"ram"]


}
let arr1 =Object.keys(students)//function used to convert object in array 
let arr2 =Object.values(students)//function used to convert object in array 

    console.log(arr1[0])
    console.log(arr2[0])
    console.log(students.array[3])
    students.array.push("sequre")
    console.log(students.array[4])
    students.message="hello"//pussing any value in object
    students.age=27//overwriting any keys values in object
    console.log(students)
    


    
    
