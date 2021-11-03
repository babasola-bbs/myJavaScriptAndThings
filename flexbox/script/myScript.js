// function myFunction(){
//     document.getElementById("anImage").src="img/stampede.jpg"
// }
// Math.floor(Math.random() * 100) + 1
// Math.floor(Math.random() * (max - min + 1)) + min

    aWord = "awamaridi1you2a3mystery4"
    console.log(aWord.split(/\d/));



1. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

                function checker50(num1, num2){
                    if(num1 + num2 == 50 || num1 == 50 || num2 == 50){return true}
                    return false
                }
                //console.log(checker50(45, 5))

2.  Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

3.  Write a JavaScript program to find the area of a scalene triangle where lengths of the three of its sides are 5, 6, 7.

                a = 5
                b = 6
                c = 7
                s = a + b + c

                multiply = s*(s-a)*(s-b)*(s-c)
                area = Math.sqrt(multiply)
                //console.log(area)

4. Write a function toArray that takes 5 values and returns these values in an array.

                function toArray(a, b, c, d, e){
                    return [a, b, c, d, e]
                }
                //console.log(toArray(2, 4, 7, 8, 3))

5.  Write a function addWithSubcharge that adds two amounts with subcharge. For each amount less than or equal to 10, the subcharge is 1. For each amount greater than 10, the subcharge is 2.

6. Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned. ** Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

                function rotate(arr){
                    let first = arr.shift()
                    let push = arr.push(first)
                    return arr;
                }
                array = [2, 4, 6, 8]
                //console.log(rotate(array))

7. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

8. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
example - console.log(first([7, 9, 0, -2])); console.log(first([],3)); console.log(first([7, 9, 0],3)); console.log(first([7, 9, 0, -2],6)); 
Output should be: Expected Output : 
 7
 []
 [7, 9, 0]
 [7, 9, 0, -2]


                function first(arr, n = 1){
                    arr2 = []
                    for(i = 0; i < n; i++){
                        arr2.push(arr[i])
                    }
                    for(i = 0; i < n; i++){
                        if(arr[i] == undefined){
                            arr2.pop()
                        }
                    }
                    return arr2
                }
                array = [9, 6, 4, 8]
                //console.log(first(array, 8))
 

 9. Write a simple JavaScript program to join all elements of the following array into a string.
 Sample array : myColor = ["Red", "Green", "White", "Black"];
    Expected Output:
 "Red,Green,White,Black"
 "Red+Green+White+Black"

                function arrToString(arr){
                    return arr.join(",") + "\n" + arr.join("+")
                }
                myColor = ["Red", "Green", "White", "Black"]
                //console.log(arrToString(myColor))

10 - Write a JavaScript program to compute the sum and product of an array of integers.

                function compute(arr){
                    sum = 0;
                    product = 1;
                    length = arr.length

                for(i = 0; i < length; i++){
                    sum += arr[i]
                    product *= arr[i]
                }
                return sum+" "+product
                }
                array = [1, 2, 3, 4]
                //console.log(compute(array))

11  - Write a function called sandwich calculator. This should accept one value:
 slicesOfBread
 - The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. 
   Test your function with an alert box.
 - Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
  It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there
  are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.

12. Given that we have an array of 10 values, write a program that
	- finds the largest value in array
	- finds the smallest value in the array
	- finds the sum, product of all values in the array
	- finds the sum, product of all odd numbers in the array

                function largest(arr){
                    length = arr.length
                    for(i = 0; i < length; i++){
                        max = arr[0]
                        if(arr[i] > arr[0]){max = arr[i]}
                    }
                    return max
                }
                
                    array10 = [24, 68, 72, 11, 77, 64, 18, 32, 101, 555]
                    result1 = Math.min(...array10)
                    result2 = largest(array10)
                    //console.log(result2)

13. Given that we have an array of the following numbers : 1,4,5,7,5,3,1,6,9,11,23,11,23,56,78,5,4,3
	-write a program that:
	- removes all duplicates from the given array
	- finds how many times any given value is repeated eg given an array of [1,2,4,1,4,5,7,4] our program will tell us that 1 is repeated twice and 4 is repeated 
	three times

                function removeDuplicates(arr){
                    length = arr.length
                    aIndex = 0
                    for(i = 0; i < length; i++){
                        if(arr[aIndex - 1] != arr[i]){
                            arr[aIndex] = arr[i]
                            aIndex += 1
                        }
                    }
                    for(var j = 0; j < aIndex; j++){
                        arr[i] = arr[aIndex]
                    }
                    return aIndex 
                    }
                
                    array13 = [1,4,5,7,5,3,1,6,9,11,23,11,23,56,78,5,4,3]
                    lengthy = array13.length
                    for(k = 0; k < lengthy; k++){         //firstly sort the array
                        for(l = 0; l < lengthy; l++){
                            if(array13[l] > array13[l + 1]){
                                var temp = array13[l]
                                array13[l] = array13[l + 1]
                                array13[l + 1] = temp
                            }
                        }
                    }
                    var count = 0;
                    var number = 5
                    array13.forEach(element => {         //knowing elements that are repeated
                        if(element == number){ count++}
                    });
                    console.log(number + " is repeated " +count+ " times")
                
                    answer = removeDuplicates(array13)
                    for(var i = 0; i < answer; i++){
                        console.log(array13[i])
                    }

14. generate a secret random number between 1 and 12

                    var randomNumber = Math.floor(Math.random() * (13 - 1)) + 1;

15. outputs the name of the day based on the value of the day variable by using the switch statement.

                    day = 5
                    switch(day){
                        case 1: weekday = "Sunday"
                        break;
                        case 2: weekday = "Monday"
                        break;
                        case 3: weekday = "Tuesday"
                        break;
                        case 4: weekday = "Wednesday"
                        break;
                        case 5: weekday = 'Thursday'
                        break;
                        default: weekday = "Weekend"
                    }

16. Write a brief snippet of code using a Do While loop. The loop needs to have a counter starting at zero that increments every time the loop is executed. Inside the loop there also need to be a variable, initially set at 1, that doubles each time the loop is executed. The loop needs to continue until the doubling variable exceeds 5,000. Once the loop terminates, then return the counter.

                         var i = 1;
                        counter = 0
                        do{var i = i * 2
                            ++counter;
                        }
                        while(i < 13)

17. Write a program that display all prime number from 1 - 10

                        answer = 0;

                        for (i = 2; i < 11; i++){
                            for (j = i - 1; j > 1; j--){
                                answer = i % j;
                                if(answer == 0) break;
                            }
                            if(answer != 0){
                                //console.log(i);
                            }
                        }























    



        
