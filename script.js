//Decision Making : Leap Year Checker
function LeapYearChecker(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true
    }
    else{
        return false
    }
}
console.log(LeapYearChecker(2020))

//Decision Making : Ticket Pricing
function TicketPricing(){
    let age=prompt("Enter Your Age")
    if(age<=12){
        return "$10"
    }
    else if(age>=13 && age<=17){
        return "$15"
    }
    else{
        return "$20"
    }
}
console.log(TicketPricing())

//Decision Making : Weather Clothing Adviser
function WeatherClothingAdviser(){
    let temperature=prompt("Enter the current temperature")
    let isRaining=prompt("Is it raining? (yes/no)")
    switch(isRaining){
        case "yes":
            if(temperature<0){
                return "Wear a scarf and a caot"
            }
            else if(temperature>=0 && temperature<=20){
                return "Wear a sweater and a jacket"
            }
            else{
                return "Wear a jacket"
            }
        case "no":
            if(temperature<0){
                return "Wear a scarf"
            }
            else if(temperature>=0 && temperature<=20){
                return "Wear a sweater"
            }
            else{
                return "Wear a t-shirt"
            }
        default: return "you must enter yes or no"
    }
}
console.log(WeatherClothingAdviser())

//Recursion : Fibonacci Sequence
function Fibonacci(number){
    if(number<=1){
        return number
    }
    else{
        return Fibonacci(number-2)+Fibonacci(number-1);
    }
}
console.log(Fibonacci(8));

//Recursion : Palindrome Checker, ignoring spaces, punctuation, and capitalization
function Palindrome(str){
    str=str.toLowerCase();
    str=str.trim()
    str=str.replace(/[^a-zA-Z0-9]/g,'')
    if(str.length==0 || str.length==1){
        return true
    }
    else{
        if(str[0]!=str[str.length-1]){
            return false
        }
        else{
            return Palindrome(str.slice(1,str.length-1))
        }
    }
}
console.log(Palindrome('po .Hdho, P'))

//Recursion : Power Function
function Power(number,power){
    if(power==0){
        return 1
    }
    else if(power<0){
        return (1 / Power(number, -power))
    }
    else{
        return number*Power(number,power-1)
    }
}
console.log(Power(2,-4))