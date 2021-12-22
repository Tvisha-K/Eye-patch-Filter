function setup(){

    canvas = createCanvas(300,300);

    canvas.center();
    
    video = createCapture(VIDEO);

    video.size(300,300);
    
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);

    posenet.on("pose" , get_poses);

}

function takepic(){

    save("mypic.jpg");

}

eye_x = "";

eye_y = "";

eye_patch = "eye-patch.png"

function draw(){

    image(video,0,0,300,300);

    image(eye_patch,eye_x,eye_y,100,200);

}

function modelLoaded(){

    console.log("posenet loaded successfully");

}

function get_poses(result){

    if(result.length > 0){

        console.log(result);

        eye_x = result[0].pose.eye_left.x;

        eye_y = result[0].pose.eye_left.y;

    }

}