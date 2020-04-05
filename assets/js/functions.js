var scriptTesting = 'false';

function closeNotification(notification_id, animationName = 'fadeOut'){
  var element = document.getElementById('notif-'+notification_id);
  element.classList.add(animationName);
  setTimeout(function(){ delSingleNotifView(notification_id); mouseEnter(notification_id) }, 1500);
}

function delSingleNotifView(notification_id){
  var element = document.getElementById('notif-'+notification_id);
  if (scriptTesting == 'true'){
    console.log(notification_id+' element before delete '+element);
  }
  element.remove();
  if (scriptTesting == 'true'){
    var elementTest = document.getElementById(notification_id);
    console.log(notification_id+' element after delete '+elementTest);
  }
}

function trowNewNotification(notification){
  var testNotifExist = document.querySelector('#notif-'+notification.id);
  
  if (testNotifExist == null){
    var notificationString = "";
    //notificationString += "<div class='single_notification "+notification.theme+" "+notification.animationIn+"  "+notification.constantAnimation+" ' id='notif-"+notification.id+"'>";
    notificationString += "<div class='single_notification "+notification.theme+" "+notification.animationIn+"  "+notification.constantAnimation+" ' id='notif-"+notification.id+"' onmouseenter=\"mouseEnter('"+notification.id+"')\" onmouseleave=\"mouseLeave('"+notification.id+"')\">";
    notificationString += "<div class='notif_media'><img src='"+notification.iconImg+"'></div>";
    notificationString += "<div class='notif_content'><h3 class='notif_title'>"+notification.title+"</h3><p class='notif_message'>"+notification.message+"</p>";   
    notificationString += "<div class='notif_options'>";
    switch(notification.type){
      case "call":
        //alert("calling");
        notificationString += createCallNotification(notification);
        break;
      case "quick_message":
        notificationString += createQuickMessageNotification(notification);
        break;
    }
    notificationString += "</div></div>";

    //NOTIFICATION SIDE OPTIONS {CLOSE/HIDE}
    if ((notification.closeButton == true) && (notification.snoozeButton == true)){
      notificationString += "<div class='notif_side_options'>"; 
    }      
    if (notification.closeButton == true){
      notificationString += "<div class='button close_notif' title='Close Notification' onclick=\"closeNotification('"+notification.id+"','"+notification.animationOut+"')\">x</div>"
    };
    if (notification.snoozeButton == true){
      notificationString += "<div class='button snooze_notif' title='Hide Notification'>></div>";
    }      
    if ((notification.closeButton == true) && (notification.snoozeButton == true)){
      notificationString += "</div>";
    }
    //END SIDE OPTIONS
    
    notificationString += "<div class='inner-progress-bar' data-progress='0'></div></div>";
          
    var helperContainer = document.querySelector('.notification_overlay');
    helperContainer.insertAdjacentHTML  ("beforeend", notificationString);

    if (notification.coresponsingJS !== "") {
      addCorespondingScript(notification.coresponsingJS, notification.id);
    } 
    
    setTimeout(function(){ document.querySelector("#notif-"+notification.id).classList.remove(notification.animationIn); }, 1500);
    
    createProgressBarTimer(notification.id);

    
  }
}

function createCallNotification(notification){
  var notificationString = "";
  notificationString += "<div class='button_option accept_button' onclick='"+notification.answerButtonFunc+"()'><p>"+notification.answerButtonText+"</p></div>";   
  notificationString += "<div class='button_option reject_button' onclick='"+notification.rejectButtonFunc+"()'><p>"+notification.rejectButtonText+"</p></div>";      
  return notificationString;
}


function createQuickMessageNotification(notification){
  var notificationString = "";
  notificationString += "<div class='quik_response_form'>";
  notificationString += "<textarea class='textarea "+ notification.responseTextInputClass +"'></textarea>";
  notificationString += "<button class='quick_response_send' onclick='"+notification.responseButtonFunc+"()'>"+notification.responseButtonText+"</button>";
  notificationString += "</div>";
  return notificationString;
}

function addCorespondingScript(scriptURL, notificationId){
  var script = document.createElement("script");
  script.src = scriptURL;
  document.querySelector("#notif-"+notificationId).appendChild(script);
}




/////--------------------------------------------////
////-------PROGRESS BAR FUNTIONTIONS------------////
///--------------------------------------------////

function createProgressBarTimer(notification_id){
  eval('window.timerVariable'+notification_id+' = setInterval(function(){timerFunction("'+notification_id+'")}, 16)');
  
  //document.querySelector("#notif-"+notification_id).addEventListener('mouseenter', mouseEnter(notification_id));
  //document.querySelector("#notif-"+notification_id).addEventListener("mouseleave", mouseLeave(notification_id));
}


function mouseEnter(notification_id) {
  eval('clearInterval(window.timerVariable'+notification_id+')');
}

function mouseLeave(notification_id) {
  var timerNotif = document.querySelector('#notif-'+notification_id+' .inner-progress-bar');
  //--if progress full don't start timer-- 
  if (parseFloat(timerNotif.dataset.progress) < 100){
    eval('window.timerVariable'+notification_id+' = setInterval(function(){timerFunction('+ notification_id+')}, 16)') ;
  }
}

function timerFunction(notification_id){
  var timerNotif = document.querySelector('#notif-'+notification_id+' .inner-progress-bar');
  
  //--Testing start of progress bar-- 
  if (( scriptTesting == true) && (parseFloat(timerNotif.dataset.progress) == 0)) {
    alert("started")
  };
  
  if (parseFloat(timerNotif.dataset.progress) < 100){
    var helper = parseFloat(timerNotif.dataset.progress);
    timerNotif.dataset.progress = helper + 0.2;
    timerNotif.setAttribute('data-progress', timerNotif.dataset.progress);
    console.log(timerNotif.dataset.progress);
    timerNotif.style.width = timerNotif.dataset.progress+"%";
  } else {
    //--Testing full progress bar 
    if (( scriptTesting == true) && (parseFloat(timerNotif.dataset.progress) > 100)) {
      alert("FULL");
    };
    //--Stoping timer when progress full
    eval('clearInterval(window.timerVariable'+ notification_id+')');
    closeNotification(notification_id);
  };
}

/////--------------------------------------------////
////-------END PROGRESS BAR FUNTIONTIONS--------////
///--------------------------------------------////
