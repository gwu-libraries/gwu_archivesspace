$(function() {
    $(document).on('click', '#copy-btn', function() {
        const textToCopy = $('#clipboard-data').val();
        
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
        $msg.fadeIn().delay(2500).fadeOut();
    }
});