const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let activeAlert = false;

const appendAlert = (message, type) => {
  if (activeAlert) {
    return;
  }

  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade');
  alertDiv.innerHTML = `
    <div>${message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  const firstAlert = alertPlaceholder.querySelector('.alert');
  if (firstAlert) {
    alertPlaceholder.insertBefore(alertDiv, firstAlert);
  } else {
    alertPlaceholder.appendChild(alertDiv);
  }

  setTimeout(() => {
    alertDiv.classList.add('show');
  }, 100);

  activeAlert = true;

  const handleAlertClose = () => {
    alertDiv.classList.remove('show');
    setTimeout(() => {
      alertDiv.remove();
      activeAlert = false;
    }, 500); 
  };

  setTimeout(handleAlertClose, 3000); 
};

const alertTrigger1 = document.getElementById('liveAlertBtn1');
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert('This product is not available now.', 'success');
  });
}

const alertTrigger2 = document.getElementById('liveAlertBtn2');
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('This product is not available now.', 'success');
  });
}

const alertTrigger3 = document.getElementById('liveAlertBtn3');
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('This product is not available now.', 'success');
  });
}

const alertTrigger4 = document.getElementById('liveAlertBtn4');
if (alertTrigger4) {
  alertTrigger4.addEventListener('click', () => {
    appendAlert('This product is not available now.', 'success');
  });
}
