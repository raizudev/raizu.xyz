function notify(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.classList.add(type);
    notification.textContent = message;
    document.getElementById('notifications').appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000); 
  }
  