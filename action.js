
    function counter() {
        id = setInterval(counting, 1000);
        function counting() {
            if(count <= $("#number").val()) {
                if (count % 3 === 0) {
                    document.getElementById("fingers").style.backgroundColor = "red";
                } else {
                    document.getElementById("fingers").style.backgroundColor = "white";
                }
                if (count % 5 === 0) {
                    document.getElementById("toes").style.backgroundColor = "yellow";
                } else {
                    document.getElementById("toes").style.backgroundColor = "white";
                }
                count++;
            }
        }
    }

    function reset(){
        count = 0;
        document.getElementById("number").value = "";
        clearInterval(id);
        // counter();
        document.getElementById("toes").style.backgroundColor = "white";
        document.getElementById("fingers").style.backgroundColor = "white";
    }

    function restart(){
        count = 0;
    }