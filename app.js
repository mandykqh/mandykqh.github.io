const projects = [
    {
        id: 'bloom',
        title: 'Bloom',
        overview: 'Bloom is an individual UI/UX design project that reimagines the modern gardening experience. This smart gardening solution aims to helps users manage their garden by providing real-time monitoring of soil moisture, temperature, and plant health.',
        role: 'Product Designer \n User Research, Visual Design, Prototyping',
        links: {
            linkToAffinityDiagram: '<a href="https://www.glorialo.design/" target="_blank" rel="noopener noreferrer">our affinity diagram</a>'
        },
        images: [
            'assets/img/Bloom/catalogue-main.png',
            'assets/img/Bloom/catalogue-view.png',
            'assets/img/Bloom/plant-status.png',
            'assets/img/Bloom/plant-care.png',
            'assets/img/Bloom/plant-health-view.png',
            'assets/img/Bloom/notifications.png',
        ],
        date: 'Oct - Nov 2023'
    },
    {
        id: 'bloom1',
        title: 'Bloom',
        overview: 'Our team of 5 were involved in this project. We came up with {linkToAffinityDiagram}, and created prototypes.',
        role: 'Product Designer' + '\n' + 'User Research, Visual Design, Prototyping',
        links: {
            linkToAffinityDiagram: '<a href="https://www.glorialo.design/" target="_blank" rel="noopener noreferrer">our affinity diagram</a>'
        },
        images: [
            'assets/img/Bloom/catalogue-main.png',
            'assets/img/Bloom/catalogue-view.png',
        ]
    }

];
function loadProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        document.getElementById('project-title').textContent = project.title;

        let overview = project.overview;
        // Replace placeholders in the description
        for (const placeholder in project.links) {
            if (project.links.hasOwnProperty(placeholder)) {
                overview = overview.replace(`{${placeholder}}`, project.links[placeholder]);
            }
        }
        document.querySelector('.date').textContent = project.date;
        document.getElementById('project-overview-text').innerHTML = project.overview.replace(/\n/g, '<br>');
        document.getElementById('project-role-text').innerHTML = project.role.replace(/\n/g, '<br>');
        // Clear existing images
        const prototypeContainer = document.querySelector('.project-prototype');
        prototypeContainer.innerHTML = '';

        // Dynamically add images to the prototype container
        project.images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = "Project prototype";
            img.classList.add('prototype-image'); // Add a class for styling if needed
            prototypeContainer.appendChild(img);
        });
    } else {
        console.log('Project not found');
    }
}

function getProjectIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('projectId');
}

// Then, load the project based on the ID
const projectId = getProjectIdFromURL();
if (projectId) {
    loadProject(projectId);
}
