  function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      document.body.onload = function(){
        var arenaDiv  = document.getElementById("arena");

        var arrayForRemoval = [];
        function recursive(){

          for (var i = 0; i < arrayForRemoval.length; i++) {
            arenaDiv.removeChild(arrayForRemoval[i]);
          }

          arrayForRemoval = [];
          var appleDivMain = document.createElement('div');
          var numberOfApples = getRandomInt(2, 6);
          for (var i = 0; i < numberOfApples; i++) {
            var leftMargin = getRandomInt(100, arena.offsetWidth);
            var topMargin = getRandomInt(0, 0);
            var appleDiv = document.createElement('div');
            appleDiv.classList.add('slideInDown');
            appleDiv.style.marginLeft = leftMargin+"px";
            appleDiv.style.marginTop = topMargin+"px";
            appleDiv.innerHTML = '<img src="small-apple.gif">';
            appleDivMain.insertBefore(appleDiv, appleDivMain.firstChild);
          }
          arrayForRemoval[0] = appleDivMain;
          arenaDiv.insertBefore(appleDivMain, arenaDiv.firstChild);

          setTimeout(recursive, 4000);
        }
        
        recursive();

        var ninja = {};

        ninja.jump = function(){

          var ele  = document.getElementById("ninja");
          ele.classList.remove("ninja-animate")
          setTimeout(function(){ele.classList.add("ninja-animate")}, 1);
        
        }

        ninja.walkForward = function(){
          
          var ele2  = document.getElementById("ninja");
          var nextPosition = parseInt(ele2.style.marginLeft.substring(0,ele2.style.marginLeft.indexOf('p')))+50;


          var arena  = document.getElementById("arena");
          if(nextPosition > (arena.offsetWidth -200)){
            nextPosition = (arena.offsetWidth -200);
          }

          if(isNaN(nextPosition)){
            nextPosition = 100;
          } 
          var walkStyle = '-webkit-transition-property: margin-left;-webkit-transition-duration: 0.1s; -webkit-transition-timing-function: linear; margin-left: '+nextPosition+'px;';
          ele2.style.cssText = walkStyle;
      
        }


        ninja.walkBackward = function(){
          
          var ele2  = document.getElementById("ninja");
          var nextPosition = parseInt(ele2.style.marginLeft.substring(0,ele2.style.marginLeft.indexOf('p')))-50;


          var arena  = document.getElementById("arena");
          if(nextPosition < (arena.offsetLeft-10)){
            nextPosition = (arena.offsetLeft-10);
          }

          if(isNaN(nextPosition)){
            nextPosition = -100;
          } 
          var walkStyle = '-webkit-transition-property: margin-left;-webkit-transition-duration: 0.1s; -webkit-transition-timing-function: linear; margin-left: '+nextPosition+'px;';
          ele2.style.cssText = walkStyle;
      
        }


        function handleAnimation(event){


          if(event.keyCode === 38){
            ninja.jump();
          }

          if(event.keyCode === 39){
            ninja.walkForward();
          }

          if(event.keyCode === 37){
            ninja.walkBackward();
          }

        } 

        window.addEventListener("keydown", handleAnimation);


      }
