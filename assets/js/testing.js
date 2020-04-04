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
    answerButtonFunc: "yesGetTheCall",
    answerButtonText: "YES BOSS",
    rejectButtonFunc: "noooCallYou",
    rejectButtonText: "Fuk off",
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
    animationOut: "fadeOutSlideRight",
    iconImg: "assets/img/duck.gif",
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

var notification4 = {
    id: 4444,
    theme: "default",
    type: "quick_message",
    animationIn: "fadeIn",
    animationOut: "fadeOutSlideRight",
    iconImg: "assets/img/duck.gif",
    closeButton: true,
    title: "MESSAGE IS IN THE MAIL!",
    message: "<span class='username_message'>YEAAAuser:</span> Please send me more info you mother****. I can't finish this crap without it.",
    responseTextInputClass: "inputClassNameHTMLC",
    responseButtonFunc: "customQuickResponseC",
    responseButtonText: "YEAA",
    coresponsingJS: "assets/js/custom-quick-response.testing.js"
}
function testing4(){
    trowNewNotification(notification4);
}



var notification5 = {
    id: 5555,
    theme: "default_dark",
    type: "information",
    animationIn: "fadeIn",
    animationOut: "fadeOutSlideRight",
    iconImg: "assets/img/duck.gif",
    closeButton: true,
    title: "SOMETHING HAPPENED!!",
    message: "Your computer has been hacked...Please follow the link for more information about your data. Click <a href='#'>here</a>.",
}

function testing5(){
    trowNewNotification(notification5);
}



var notification6 = {
    id: 6666,
    theme: "default",
    type: "information",
    animationIn: "fadeIn",
    animationOut: "fadeOutSlideRight",
    constantAnimation: "pulseAnimation",
    iconImg: "assets/img/call-default-dark.gif",
    closeButton: true,
    title: "SOMETHING HAPPENED!!",
    message: "Your computer has been hacked...Please follow the link for more information about your data. Click <a href='#'>here</a>.",
}
function testing6(){
    trowNewNotification(notification6);
}