1. It will output 3. Since "i" is declared as "var", "i" will have the scope of the whole function. After the loop is done, "i" becomes 3.
   
2. It will output 150. "discountedPrice" keeps outdate in each iteration. The last iteration is 300*(1-0.5) = 150 and "discountedPrice" has the scope of the function. Therefore it will be 150.
   
3. It will output 150. "finalPrice" keeps outdate in each iteration inside the for loop. The last iteration is 150 and "finalPrice" also has the scope of the function. Therefore it will be 150.

4. It will return [50,100,150]. In this function, "discounted" will add the value of finalPrice in each iteration. The value of finalPrice are 50, 100, 150 in each iteration based on the input and the arithmetic operations was given.

5. It will return an error. "i" only has the scope of inside of the for loop, since it is declared as "let". It will be popped after the for loop ends.

6. It will return an error. "discountedPrice" also has the scope of the for loop. It will be popped after the for loop ends.

7. It will return 150. "finalPrice" keeps outdate in each iteration inside the for loop and has the scope in the function.

8. It will return [50,100,150]. It will add the values of "finalPrice" which are 50, 100, 150. Both "finalPrice" and "discounted" have the scope of the function. It won't throw errors.

9. It will return an error because "i" only has the scope of inside of the for loop.

10. It will return 3. "length" is the size of "prices" which contains 3 elements.

11. It will return [50,100,150]. Since the memory address didn't change, it won't throw errors. When pushing elements in the array, the memory address of the array still does not change.

12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A. '32' It will convert 2 to string '2' and concatenate with '3'
    B. 1. It will convert '3' to int 3 and subtract 2
    C. 3. null will be mapped to 0
    D. '3null'. it will convert null to string
    E. 4. true will be mapped to 1
    F. 0. false maps to 0 and null also maps to 0
    G. '3undefined'. undefined will convert to string
    H. NaN. 'undefined' can not be converted to int


14. A. true. '2' will convert to 2
    B. false. string comparsion only compare the first character. '2' has greater ASCII value than '1'
    C. true. '2' will convert to 2
    D. false. '2' and 2 are not the same data type.
    E. false. true will map to 1
    F. true. integer will turn to true

15. "==" compare two variable regardless their data type. "===" compare two variable and their data type as well

16. js file

17. It will return [2,4,6]. In modifyArray function, it will loop through every element in array. Then pass every to callback function which is doSomething. Inside the callback function, it will mutiply every element by 2. Then, store that to newArr.

18. 