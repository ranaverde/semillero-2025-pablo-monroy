// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectar Datos Personales
    document.getElementById('current-title').textContent = cvData.personal.puesto;
    document.getElementById('location').textContent = cvData.personal.ubicacion;
    document.getElementById('phone').textContent = cvData.personal.telefono;
    document.getElementById('email').textContent = cvData.personal.email;
    document.getElementById('visa').textContent = cvData.personal.visa;
    document.getElementById('linkedin').href = cvData.personal.linkedin;
    document.getElementById('platzi').href = cvData.personal.platzi;
    document.getElementById('language-level').textContent = cvData.personal.idioma;

    // 2. Inyectar Perfil
    document.getElementById('profile-text').innerHTML = cvData.perfil;

    // 3. Inyectar Habilidades
    const skillsList = document.getElementById('skills-list');
    cvData.tecnologias.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${skill.nombre}</span> (${skill.anos} años)`;
        skillsList.appendChild(li);
    });

    // 4. Inyectar Estudios
    const educationList = document.getElementById('education-list');
    cvData.estudios.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${edu.titulo}</strong><br>${edu.institucion}`;
        educationList.appendChild(li);
    });

    // 5. Inyectar Certificaciones
    const certList = document.getElementById('cert-list');
    cvData.certificaciones.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = cert;
        certList.appendChild(li);
    });

    // Lógica para mostrar/ocultar certificaciones
    document.getElementById('toggle-certifications').addEventListener('click', function() {
        const certs = document.getElementById('cert-list');
        certs.classList.toggle('hidden');
        this.textContent = certs.classList.contains('hidden') ? 'Mostrar Certificaciones' : 'Ocultar Certificaciones';
    });

    // 6. Inyectar Experiencia
    const experienceList = document.getElementById('experience-list');
    cvData.experiencia.forEach(exp => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'experience-item';
        
        const datesSpan = document.createElement('span');
        datesSpan.className = 'dates';
        datesSpan.textContent = exp.periodo;
        
        const titleH4 = document.createElement('h4');
        titleH4.textContent = exp.empresa;

        const roleP = document.createElement('p');
        roleP.className = 'role';
        roleP.textContent = exp.puesto;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';
        const logrosUl = document.createElement('ul');
        
        exp.logros.forEach(logro => {
            const li = document.createElement('li');
            li.innerHTML = logro; // Usar innerHTML para respetar las citas
            logrosUl.appendChild(li);
        });

        descriptionDiv.appendChild(logrosUl);

        itemDiv.appendChild(datesSpan);
        itemDiv.appendChild(titleH4);
        itemDiv.appendChild(roleP);
        itemDiv.appendChild(descriptionDiv);

        experienceList.appendChild(itemDiv);
    });
});