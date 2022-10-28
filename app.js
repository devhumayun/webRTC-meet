//  gets elements
const screen_1 = document.getElementById('s1');
const screen_2 = document.getElementById('s2');
const camBtn = document.getElementById('camBtn')
const vocieBtn = document.getElementById('vocieBtn')
const shareScreenBtn = document.getElementById('shareScreenBtn')
const screen_2_video = document.querySelector('.screen_2')

let camStream ;
let screenStream


// this is my 3rd time try
// cam Share
const camShare = () => {

    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
    })
    .then( stream =>  {

        camStream = stream
        screen_1.srcObject = stream        

    });

};
camShare();

// screen share
const screenShare = () => {

    navigator.mediaDevices.getDisplayMedia({
        video : true,
        audio : true
    })
    .then( stream => {
        screenStream = stream,
        screen_1.srcObject = stream
        screen_2.srcObject = camStream
    });

}

// cam btn toggle
let camBtnStatus = true
camBtn.onclick = () => {
    camBtnStatus = !camBtnStatus
    camStream.getVideoTracks()[0].enabled = camBtnStatus
    camBtn.classList.toggle('active')
}

// audio btn toggle
let audioBtnStatus = true
vocieBtn.onclick = () => {
    audioBtnStatus = !audioBtnStatus
    camStream.getAudioTracks()[0].enabled = audioBtnStatus
    vocieBtn.classList.toggle('active')
}

// screen share btn toggle
let screenBtnStatus = false
shareScreenBtn.onclick = () => {

    screenBtnStatus = !screenBtnStatus
    if(screenBtnStatus){
        screen_2_video.style.display = 'block'
        screenShare()
    }else{
        screen_2_video.style.display = 'none'
        screenStream.getVideoTracks()[0].enabled = screenBtnStatus,
        screen_1.srcObject = camStream
    }

}

// this is my second time try 
// cam share
// const camShare = () => {

//     navigator.mediaDevices.getUserMedia({
//         video : true,
//         audio : true
//     })
//     .then(stream => {

//         camStream = stream
//         screen_1.srcObject = stream

//     });

// };
// camShare()

// // screen shre
// const screenShare = () => {

//     navigator.mediaDevices.getDisplayMedia({
//         video : true,
//         audio : true
//     })
//     .then(stream => {

//         screenStream = stream
//         screen_1.srcObject = stream
//         screen_2.srcObject = camStream

//     });

// }

// // cam btn toggle
// let camBtnStatus = true
// camBtn.onclick = () => {

//     camBtnStatus = !camBtnStatus
//     camBtn.classList.toggle('active')
//     camStream.getVideoTracks()[0].enabled = camBtnStatus

// };

// // audio btn toggle
// let audioBtnStatus = true
// vocieBtn.onclick = () => {

//     audioBtnStatus = !audioBtnStatus
//     vocieBtn.classList.toggle('active')
//     camStream.getAudioTracks()[0].enabled = audioBtnStatus

// };

// // share screen btn toggle
// let screenStatus = false
// shareScreenBtn.onclick = () => {

//     screenStatus = !screenStatus
//     if(screenStatus){

//         screen_2_video.style.display = 'block'
//         screenShare()

//     }else{

//         screen_2_video.style.display = 'none'
//         screenStream.getVideoTracks()[0].enabled = screenStatus
//         screen_1.srcObject = camStream

//     }
//     shareScreenBtn.classList.toggle('active') 

// }




// this is my first try

// // cam Share
// const camShare = () => {

//     navigator.mediaDevices.getUserMedia({
//         video : true,
//         audio : true
//     })
//     .then(stream => {
       
//         camStream = stream
//         screen_1.srcObject = stream
//     });

// };

// camShare();

// // cam btn toggle
// let camBtnStatus = true
// camBtn.onclick = () => {

//     camBtnStatus = !camBtnStatus
//     camStream.getVideoTracks()[0].enabled = camBtnStatus
//     camBtn.classList.toggle('active')

// };

// // voice button toggle
// let voiceBtnStatus = true
// vocieBtn.onclick = () => {

//     voiceBtnStatus = !voiceBtnStatus
//     camStream.getAudioTracks()[0].enabled = voiceBtnStatus
//     vocieBtn.classList.toggle('active')

// };




