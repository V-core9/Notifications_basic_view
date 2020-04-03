var scriptTesting = 'false';

function closeNotification(notification_id, animationName = 'fadeOut'){
  var element = document.getElementById(notification_id);
  element.classList.add(animationName);
  setTimeout(function(){ delSingleNotifView(notification_id) }, 1500);
}

function delSingleNotifView(notification_id){
  var element = document.getElementById(notification_id);
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
    switch(notification.type){
      case "call":
        //alert("calling");
        createCallNotification(notification);
        break;
      case "information":
        alert("information");
        break;
    }
  }
}

function createCallNotification(notification){
  var notificationString = "";
  notificationString += "<div class='single_notification "+notification.theme+" "+notification.animationIn+" pulseAnimation' id='notif-"+notification.id+"'></script>";
  notificationString += "<div class='notif_media'><img src='"+notification.iconImg+"'></div>";
  notificationString += "<div class='notif_content'><h3 class='notif_title'>"+notification.title+"</h3><p class='notif_message'>"+notification.message+"</p>";   
  notificationString += "<div class='notif_options'>";
  notificationString += "<div class='button_option accept_button' onclick='"+notification.answerButtonFunc+"()'><p>"+notification.answerButtonText+"</p></div>";   
  notificationString += "<div class='button_option reject_button' onclick='"+notification.rejectButtonFunc+"()'><p>"+notification.rejectButtonText+"</p></div></div></div>";      
  notificationString += "<div class='notif_side_options'>";       
  
  if (notification.closeButton == true){
    notificationString += "<div class='button close_notif' title='Close Notification' onclick=\"closeNotification('notif-"+notification.id+"','"+notification.animationOut+"')\">x</div>"
  };

  if (notification.snoozeButton == true){
    notificationString += "<div class='button snooze_notif' title='Hide Notification'>></div>";
  }

  notificationString += "</div></div>";
        
  var helperContainer = document.querySelector('.notification_overlay');
  helperContainer.insertAdjacentHTML  ("beforeend", notificationString);

  if (notification.coresponsingJS !== "") {
    addCorespondingScript(notification.coresponsingJS, notification.id);
  } 
  
  setTimeout(function(){ document.querySelector("#notif-"+notification.id).classList.remove(notification.animationIn); }, 1500);
}

function addCorespondingScript(scriptURL, notificationId){
  var script = document.createElement("script");
  script.src = scriptURL;

  document.querySelector("#notif-"+notificationId).appendChild(script);
}