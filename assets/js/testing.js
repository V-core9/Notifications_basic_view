var notification1 = {
    id: 1111,
    theme: "default",
    type: "call",
    animationIn: "fadeIn",
    animationOut: "fadeOutSlideRight",
    constantAnimation: "pulseAnimation",
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
    animationOut: "fadeOutSlideLeft",
    constantAnimation: "pulseAnimation",
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


var notification3 = {
    id: 3333,
    theme: "default_dark",
    type: "quick_message",
    animationIn: "fadeIn",
    animationOut: "fadeOutSlideLeft",
    iconImg: "assets/img/call-default-dark.gif",
    closeButton: true,
    snoozeButton: true,
    title: "You got new message!",
    message: "<span class='username_message'>Jenifer:</span> Please send me more info you mother****. I can't finish this crap without it.",
    responseTextInputClass: "inputClassNameHTML",
    responseButtonFunc: "customQuickResponse",
    responseButtonText: "Send",
    coresponsingJS: "assets/js/custom-quick-response.testing.js"
}

function testing3(){
    trowNewNotification(notification3);
}

function testing4(){
    
}

function testing5(){

}

function testing6(){
    
}