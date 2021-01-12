function handleEmailFormSubmit(form, baseAction, emailAddress) {
    var newAction = baseAction.concat(emailAddress);
    form.action = newAction;
    form.submit();
}

function handleEmailFormOnLoadEvent() {
    var formSubmitted = getParameterByName('formSubmitted');
    if (formSubmitted) {
        alert("Your message was sent!.");
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}