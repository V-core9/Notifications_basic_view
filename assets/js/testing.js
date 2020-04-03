var notification1 = {
    id: 1111,
    theme: "default",
    type: "call",
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    iconImg: "assets/img/call-default.gif",
    closeButton: true,
    snoozeButton: true,
    title: "<span class='username_message'>DemoUser</span> is calling!",
    message: "You have new incoming call!",
    answerButtonFunc: "customAnswerFunc",
    answerButtonText: "Answer",
    rejectButtonFunc: "customRejectFunc",
    rejectButtonText: "Reject",
    coresponsingJS: "assets/js/custom-call.testing.js"
}

function testing1(){
    trowNewNotification(notification1);
}



var notification2 = {
    id: 2222,
    theme: "default_dark",
    type: "call",
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    iconImg: "assets/img/call-default-dark.gif",
    closeButton: true,
    snoozeButton: true,
    title: "<span class='username_message'>DemoUser</span> is calling!",
    message: "You have new incoming call!",
    answerButtonFunc: "customAnswerFunc",
    answerButtonText: "Answer",
    rejectButtonFunc: "customRejectFunc",
    rejectButtonText: "Reject",
    coresponsingJS: "assets/js/custom-call.testing.js"
}

function testing2(){
    trowNewNotification(notification2);
}

function testing3(){

}

function testing4(){
    
}

function testing5(){

}

function testing6(){
    
}