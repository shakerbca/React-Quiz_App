const data = [
    {
      question: "Which of the following is an advantage of using JavaScript?",
      incorrectAnswers: [
        "Less server interaction",
        "Immediate feedback to the visitors",
        "Increased interactivity",
      ],
      correctAnswer: "All of the above.",
    },
  
    {
      question:
        "Can you assign a anonymous function to a variable?",
      incorrectAnswers: [
        "myFunction()",
        "false",
        "Function",
      ],
      correctAnswer: "true",
    },
    {
      question: "Which of the following type of variable takes precedence over other if names are same?",
      incorrectAnswers: ["global variable", "Both of the above.", "None of the above."],
      correctAnswer: "local variable",
    },
    {
      question: "Which built-in method reverses the order of the elements of an array?",
      incorrectAnswers: ["changeOrder(order)", "sort(order)", "None of the above."],
      correctAnswer: "reverse()",
    },
    {
      question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
      incorrectAnswers: [
        "pop()",
        "push()",
        "reduce()",
      ],
      correctAnswer: "reduceRight()",
    },
    {
      question: "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;",
      incorrectAnswers: [
        "3",
        "false",
        "12",
      ],
      correctAnswer: "true",
    },
    {
      question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
      incorrectAnswers: ["alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);"],
      correctAnswer: "alert(“Hello DataFlair!”);",
    },
    {
      question: "How do you find the minimum of x and y using JavaScript?",
      incorrectAnswers: [
        "min(x,y);",
        "Math.min(xy)",
        "min(xy);",
      ],
      correctAnswer: "Math.min(x,y)",
    },








    {
      question: "Which of the following statements will throw an error? Please select 2 correct answers",
      incorrectAnswers: ["var fun = function bar( ){ }", "function fun( ){ }",],
      correctAnswer: "var fun = function bar{ }",
      correctAnswer: "function( ){ }",
    },

    {
      question: "If the value of x is 40, then what is the output of the following program? (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);",
      incorrectAnswers: ["ReferenceError", "Not divisible by 10", "None of the above"],
      correctAnswer: "Divisible by 10",
    },

    {
      question: "Which JavaScript label catches all the values, except for the ones specified?",
      incorrectAnswers: ["catch", "label", "try"],
      correctAnswer: "default",
    },

    {
      question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
      incorrectAnswers: ["if(x 2)", "if(x = 2)", "if(x != 2 )"],
      correctAnswer: "if(x == 2)",
    },

    {
      question: "What will the code return? Boolean(3 < 7)",
      incorrectAnswers: ["false", "NaN", "SyntaxError"],
      correctAnswer: "true",
    },

    {
      question: "What is the output of the following code in the console? var x = 0; function fun(){ ++x; this.x = x; return x; } var bar = new new fun; console.log(bar.x);",
      incorrectAnswers: ["ReferenceError", "undefined", "1"],
      correctAnswer: "TypeError",
    },

    {
      question: "Which is the correct JavaScript syntax to change the HTML content given below?<p id=”test”>Hello World!</p>",
      incorrectAnswers: ["document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;", "document.getElementById(test).innerHTML = “Hello DataFlair!”;", "document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;"],
      correctAnswer: "document.getElementById(“test”).innerHTML = “Hello DataFlair!”;",
    },

    {
      question: "How many ways are there with which we can declare a variable in javascript?",
      incorrectAnswers: ["Only one", "Infinitely many", "None of the above"],
      correctAnswer: "Three",
    },

    {
      question: "Is a variable named 'apple' same as 'Apple' in javascript?",
      incorrectAnswers: ["Yes", "Only when we use 'strict'", "None of the above"],
      correctAnswer: "No",
    },

    {
      question: "Which of the following variable names are correct according to javascript? (select two answer)",
      incorrectAnswers: ["let 1name;", "let #name;",],
      correctAnswer: "let_name;",
      correctAnswer: "let $_name;",
    },

    {
      question: "What will be the output of the following code? <script>  document.write(typeof('1'+2))  </script>",
      incorrectAnswers: ["'boolean.'", "'number.'", "None of the above."],
      correctAnswer: "'string.'",
    },

    {
      question: "What will be the output of the following code? <script> let ans=6 / '3'; document.write( typeof ans ); </script>",
      incorrectAnswers: ["None of the above.", "'integer'", "'string'"],
      correctAnswer: "'number'",
    },
  ];
  
  export default data;