const translations = {
    es: {
        role: 'SysAdmin & Cybersec en <span class="highlight">DAGRAM</span>',
        bio: 'Especialista en blindar infraestructuras críticas y automatizar operaciones. Transformo problemas complejos en arquitecturas seguras.',
        download_cv: 'Descargar CV',
        more_info: 'Más Info',
        social_title: 'Conecta Conmigo',
        career_title: '<i class="fas fa-briefcase"></i> Trayectoria',
        job_current: 'Cybersecurity & Systems',
        date_current: '2025 - Actualidad',
        job_prev: 'Técnico de Sistemas',
        award_badge: '1er Lugar',
        award_desc: 'Ganador con "Dewi", solución IoT para monitorización hídrica.',
        skills_title: 'Áreas de Impacto',
        skill_1_title: 'SecOps & Hardening',
        skill_1_desc: 'Fortinet, Firewalls, Auditoría',
        skill_2_title: 'Python Automation',
        skill_2_desc: 'Scripting, APIs, Tools',
        skill_3_title: 'SysAdmin & Redes',
        skill_3_desc: 'Linux, Windows Server, AD',
        skill_4_title: 'Cloud & Virtualización',
        skill_4_desc: 'Docker, VMware, Azure',
        now_title: 'Ahora mismo',
        now_1: 'SecOps &amp; SysAdmin en DAGRAM',
        now_2: 'Construyendo herramientas de seguridad',
        now_3: 'Badalona · Disponible en remoto',
        proj_1_desc: 'Detección de bots en Instagram.',
        proj_2_desc: 'Gestión de incidencias ciudadanas.',
        proj_3_desc: 'Gestor de contraseñas seguro.',
        certs_title: 'Certificaciones',
        contact_title: 'Hablemos',
        contact_desc: '¿Tienes un proyecto en mente? Envíame un mensaje directo.',
        name_ph: 'Nombre',
        msg_ph: '¿Cómo puedo ayudarte?',
        send_btn: 'Enviar Mensaje',
        sent_success: '¡Mensaje enviado correctamente!',
        sent_error: 'Hubo un error. Inténtalo de nuevo.',
        modal_title: 'Perfil Profesional Completo',
        modal_subtitle: 'Detalles extendidos, stack tecnológico y portfolio completo.',
        about_me: 'Sobre Mí',
        bio_full: 'Técnico de Sistemas apasionado por la ciberseguridad (SecOps) y la automatización. Con experiencia en soporte Nivel 1 y 2 para más de 100 usuarios y gestión de redes. Crecí desmontando hardware y ahora construyo arquitecturas seguras. Enfocado en soluciones eficientes usando Python y tecnologías Cloud.',
        all_projects: 'Portfolio de Proyectos',
        stack_full: 'Stack Tecnológico Completo',
        view_linkedin: 'Ver Perfil Completo en LinkedIn'
    },
    en: {
        role: 'SysAdmin & Cybersec at <span class="highlight">DAGRAM</span>',
        bio: 'Specialist in hardening critical infrastructure and automating operations. I turn complex problems into secure architectures.',
        download_cv: 'Download CV',
        more_info: 'More Info',
        social_title: 'Connect With Me',
        career_title: '<i class="fas fa-briefcase"></i> Career',
        job_current: 'Cybersecurity & Systems',
        date_current: '2025 - Present',
        job_prev: 'Systems Technician',
        award_badge: '1st Place',
        award_desc: 'Winner with "Dewi", an IoT solution for water monitoring.',
        skills_title: 'Areas of Impact',
        skill_1_title: 'SecOps & Hardening',
        skill_1_desc: 'Fortinet, Firewalls, Auditing',
        skill_2_title: 'Python Automation',
        skill_2_desc: 'Scripting, APIs, Tools',
        skill_3_title: 'SysAdmin & Networks',
        skill_3_desc: 'Linux, Windows Server, AD',
        skill_4_title: 'Cloud & Virtualization',
        skill_4_desc: 'Docker, VMware, Azure',
        now_title: 'Right Now',
        now_1: 'SecOps &amp; SysAdmin at DAGRAM',
        now_2: 'Building open-source security tools',
        now_3: 'Badalona · Open to remote',
        proj_1_desc: 'Bot detection for Instagram.',
        proj_2_desc: 'Citizen incident management.',
        proj_3_desc: 'Secure password manager.',
        certs_title: 'Certifications',
        contact_title: 'Let\'s Talk',
        contact_desc: 'Have a project in mind? Send me a direct message.',
        name_ph: 'Name',
        msg_ph: 'How can I help you?',
        send_btn: 'Send Message',
        sent_success: 'Message sent successfully!',
        sent_error: 'There was an error. Please try again.',
        modal_title: 'Full Professional Profile',
        modal_subtitle: 'Extended details, tech stack, and complete portfolio.',
        about_me: 'About Me',
        bio_full: 'Systems Technician passionate about Cybersecurity (SecOps) and automation. Experienced in Tier 1 & 2 support for 100+ users and network management. I grew up dismantling hardware and now I build secure architectures. Focused on efficient solutions using Python and Cloud technologies.',
        all_projects: 'Project Portfolio',
        stack_full: 'Full Tech Stack',
        view_linkedin: 'View Full Profile on LinkedIn'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    let currentLang = 'es';

    // 1. Manejo de Idioma
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang');
            updateLanguage(currentLang);
        });
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // 2. Reloj en tiempo real
    function updateTime() {
        const timeElement = document.getElementById('local-time');
        if (timeElement) {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString('es-ES', { 
                hour: '2-digit', minute: '2-digit', hour12: false 
            });
        }
    }
    setInterval(updateTime, 1000);
    updateTime();

    // 3. Modal Pro (Ventana emergente)
    const modal = document.getElementById('pro-modal');
    const openBtn = document.getElementById('open-pro-modal');
    const closeBtn = document.getElementById('close-modal');

    if (modal && openBtn && closeBtn) {
        openBtn.addEventListener('click', () => modal.showModal());
        closeBtn.addEventListener('click', () => modal.close());
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right || 
                e.clientY < rect.top || e.clientY > rect.bottom) {
                modal.close();
            }
        });
    }

    // 4. Envío de Formulario (AJAX para no recargar)
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.textContent = "Enviando...";
            status.className = "form-status";
            
            const data = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.textContent = translations[currentLang].sent_success;
                    status.classList.add('success');
                    form.reset();
                } else {
                    status.textContent = translations[currentLang].sent_error;
                    status.classList.add('error');
                }
            } catch (error) {
                status.textContent = translations[currentLang].sent_error;
                status.classList.add('error');
            }
        });
    }

    // 5. Efecto Tilt 3D (Solo en PC/Desktop)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // Calculamos la rotación basada en la posición del mouse
                const rotateX = ((y - rect.height/2) / rect.height/2) * -1.5; 
                const rotateY = ((x - rect.width/2) / rect.width/2) * 1.5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                // Restauramos la posición original al salir
                card.style.transform = 'translateY(0)';
            });
        });
    }
});