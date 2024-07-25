function toggleForm(formId) {
    var forms = document.querySelectorAll('#contact-container .form-container');
    forms.forEach(function(form) {
        if (form.id !== formId) {
            form.style.display = 'none';
        }
    });
    var formContainer = document.getElementById(formId);
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}
