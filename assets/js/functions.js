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

function trowNewNotification(notification_id, notif_theme, notif_animation){
    
}