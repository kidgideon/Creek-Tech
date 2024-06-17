 //Animations


 const openNotification = () => {
  const notificationPanel = document.querySelector(".notification-panel");
      if (notificationPanel.classList.contains("opened")) {
        notificationPanel.classList.remove("opened")
      } else {
        setTimeout(() => {
          notificationPanel.classList.add("opened")
        }, 55)
      }
 } 

  const openNav = () => {
    const notificationPanel = document.querySelector(".nav-list-mobile-menu");
    if (notificationPanel.classList.contains("show-now")) {
      setTimeout(() => {
        notificationPanel.classList.remove("show-now")
      }, 55)
    } else {
      setTimeout(() => {
        notificationPanel.classList.add("show-now")
      }, 55)
    }
  } 