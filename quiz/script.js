        // displaying the first block of question
        document.getElementsByClassName('container')[0].style.display = "block";

        // DEFINING THE NEXT FUNCTION
        function next(id) {
            const radios = document.getElementsByName(`question${id}`);
            radios.forEach(radio => {
                if (radio.checked) {
                    document.getElementsByClassName('container')[id - 1].style.display = "none";
                    document.getElementsByClassName('container')[id].style.display = "block";
                }
            });
           
        }
        //getting final result
        function result() {
            var score = 0;
            if (document.getElementById('correct1').checked) {
                score++;
            }
            if (document.getElementById('correct2').checked) {
                score++;
            }
            if (document.getElementById('correct3').checked) {
                score++;
            }
            alert("your score is: "+ score);
        }

