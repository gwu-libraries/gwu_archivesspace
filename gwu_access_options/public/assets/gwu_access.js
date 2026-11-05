$(function () {

  // Event handler for both "Add to Existing Request" and legacy copy button
  $(document).on('click', '#add-to-existing-btn, #copy-btn', function (e) {
    e.preventDefault();
    
    // 1. Fetch value directly from the visible text input element (.val())
    let textToCopy = $('#visible-barcode-text').val();
    
    // 2. Fallback to hidden container if input field is unavailable
    if (!textToCopy) {
      textToCopy = $('#request-payload').text().trim();
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(showSuccess);
    } else {
      // Fallback for non-HTTPS or legacy browser environments
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
    const $btn = $('#add-to-existing-btn');

    // Reveal inline success feedback message
    $msg.stop(true, true).fadeIn().delay(4000).fadeOut();

    // Momentary visual state update on button
    if ($btn.length) {
      const originalText = $btn.text();
      $btn.addClass('btn-success').removeClass('btn-default').text('Copied to Clipboard!');

      setTimeout(function () {
        $btn.removeClass('btn-success').addClass('btn-default').text(originalText);
      }, 2500);
    }
  }
});