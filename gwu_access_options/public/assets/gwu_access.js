$(function () {

  $(document).on('click', '#copy-btn', function () {
    const textToCopy = $('#request-payload').text();

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(showSuccess);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showSuccess();
    }
  });

  function showSuccess() {
    const $msg = $("#copy-success");
    const $icon = $('.access-well #copy-btn > i')
    $msg.fadeIn().delay(2500).fadeOut();
    $icon.toggleClass('fa-copy fa-check');
    setTimeout(() => {
      $icon.toggleClass('fa-copy fa-check');
    }, 3000);
  }
});