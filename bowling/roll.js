AFRAME.registerComponent("roll-ball",{

    init : function(){
        this.rollBall();
    },
    rollBall : function(){
        window.addEventListener("keydown",(e)=>{

            if(e.key === "z"){

    
            var ball = document.createElement("a-entity");
            ball.setAttribute("gltf-model", "./assets/bowling_ball/scene.gltf");

            ball.setAttribute("scale",{ x : 0.014, y : 0.014, z : 0.014});

            var cam = document.querySelector("#camera");
          
            var pos = cam.getAttribute("#camera")

          ball.setAttribute("position", { x: 0, y: 1.5,z: 0 });
           

          var camera = document.querySelector("#camera").object3D;



          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);

          ball.setAttribute("velocity", direction.multiplyScalar(-10));
          
          var scene = document.querySelector("#scene");


          scene.appendChild(ball)
    }
        });
    },
   
})


