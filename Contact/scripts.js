document.addEventListener('DOMContentLoaded', POST_Form)

function POST_Form() {
    document.getElementById('submit-form').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {}
        payload.name = document.getElementById('name').value;
        payload.email = document.getElementById('email').value;
        payload.phone = document.getElementById('phone').value;
        payload.firetower = document.getElementById('firetower').value;
        payload.start = document.getElementById('start').value;
        payload.end = document.getElementById('end').value;
        payload.requests = document.getElementById('requests').value;
        req.open('POST', 'https://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                //document.getElementById('form-success').textContent = response.data;
                hideForm();
                function hideForm () {
                    var theForm = document.getElementById('form-area');
                    theForm.style.display = 'none';
                    var successMessage = document.getElementById('form-success');
                    successMessage.style.display = 'block';
                }
            }
            else {
                document.getElementById('form_success').textContent = "Error in network"
            }
        })
        req.send(JSON.stringify(payload));
        event.preventDefault();
    })
} 