document.getElementById("reserveButton").addEventListener('click', (e) => {

    e.preventDefault();

    //  Récupère les info form et les injecte dans la modale
    document.getElementById('modalFirstname').textContent = document.getElementById('firstname').value;
    document.getElementById('modalLastname').textContent = document.getElementById('name').value;
    document.getElementById('modalNbConvives').textContent = document.getElementById('NbConvivesInput').value;
    document.getElementById('modalAllergies').textContent = document.getElementById('AllergieInput').value;
    document.getElementById('modalDate').textContent = document.getElementById('DateInput').value;
    document.getElementById('modalHour').textContent = document.getElementById('selectHour').value;

    
});

document.getElementById('annulationButton').addEventListener('click', (e) => {
    e.preventDefault();

    cleanForm('reservationForm');
});

document.getElementById('confirmButton').addEventListener('click', async (e) => {

    const succes = await formResaSubmit("reservationForm");
    if(succes) {
        showAlert();
        cleanForm("reservationForm");
    }

});

const formResaSubmit = async (formID) => {

    // Créer un objet FormData à partir du formulaire
    const formData = new FormData(document.getElementById('reservationForm'));

    // Envoyer les données avec fetch
    try {
        const response = await fetch('/reserver', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            console.log(response);
            const data = await response.text();
            console.log(data);
            return true;
        } else {
            console.error("Error : ", response.statusText);
            return false;
        }
            
    }catch (error) {
        console.error('Erreur:', error);
        return false;
    }
};

const cleanForm = (formID) => {

    const form = document.getElementById(formID);
    form.reset();

};

const showAlert = () => {


    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('name').value;
    const nbConvives = document.getElementById('NbConvivesInput').value;
    const allergies = document.getElementById('AllergieInput').value;
    const date = document.getElementById('DateInput').value;
    const hour = document.getElementById('selectHour').value;

    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success container-sm';
    alertDiv.innerHTML = `
        <h4 class="alert-heading">Réservation Confirmée!</h4>
        <p>Prénom: ${firstname}</p>
        <p>Nom: ${lastname}</p>
        <p>Nombre de convives: ${nbConvives}</p>
        <p>Allergies: ${allergies}</p>
        <p>Date: ${date}</p>
        <p>Heure: ${hour}</p>
    `;

    const container = document.querySelector(".js-container");
    container.prepend(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 15000);

    alertDiv.addEventListener('click', () => {
        alertDiv.remove();
    });

};
