        var number = "";
        function add(){
            var x = Number(document.getElementById("first").value);
            var y = Number(document.getElementById("second").value);

            document.getElementById("result").value = x+y;
        }

        function sub(){
            var x = Number(document.getElementById("first").value);
            var y = Number(document.getElementById("second").value);

            document.getElementById("result").value = x-y;
        }

        function multi(){
            var x = Number(document.getElementById("first").value);
            var y = Number(document.getElementById("second").value);

            document.getElementById("result").value = x*y;
        }

        function divide(){
            var x = Number(document.getElementById("first").value);
            var y = Number(document.getElementById("second").value);

            document.getElementById("result").value = x/y;
        }

        function addOne(){
            number = number + document.getElementById("one").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addTwo(){
            number = number + document.getElementById("two").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addThree(){
            number = number + document.getElementById("three").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addFour(){
            number = number + document.getElementById("four").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addFive(){
            number = number + document.getElementById("five").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addSix(){
            number = number + document.getElementById("six").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addSeven(){
            number = number + document.getElementById("seven").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addEight(){
            number = number + document.getElementById("eight").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addNine(){
            number = number + document.getElementById("nine").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function addZero(){
            if(number != "0")
                number = number + document.getElementById("zero").value;
            console.log(number);
            document.getElementById("display").value = number;
        }
        function clear(){
            console.log("called clear");
            container.number = "";
            console.log("cleared");
            document.getElementById("display").value = number;
        }