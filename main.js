function upload(){
    var input = document.createElement("INPUT");
    input.type = "file";
    input.accept = ".mp3";
    input.click();
    input.onchange = function(){
        var song_name = this.files[0].name;
        document.querySelector("#file-name").innerHTML = "song_name";
        var url = URL.createObjectURL(this.files[0]);
        var audio = document.createElement("AUDIO"); 
        audio.src = url;
        audio.play();

        audio.onplay = function(){
            document.querySelector("#play-pause").className = "fa fa-pause-circle";

            document.querySelector("#play-pause").onclick = function(){
                audio.pause();
            }
        }


        audio.onpause = function(){
            document.querySelector("#play-pause").className = "fa fa-play-circle";

            document.querySelector("#play-pause").onclick = function(){
                audio.play();
            }
        }

    }
}