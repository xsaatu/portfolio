function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const servicesID = "service_p667msj";
    const templateID = "template_ag4arhp";
    
    emailjs.send(servicesID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
    }).catch((err) => {
        console.log(err);
    });
}
