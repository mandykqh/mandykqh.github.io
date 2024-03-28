const projects = [
    {
        id: 'bloom',
        title: 'Bloom',
        overview: 'Bloom is an individual UI/UX design project that reimagines the modern gardening experience. This smart gardening solution aims to helps users manage their garden by providing real-time monitoring of soil moisture, temperature, and plant health. \n\n The solution follows a user-centric design process by identifying key user tasks, mapping detailed {linkToUserJourneys}, and iteratively refining designs from {linkToRapidPrototypes}, to {linkToLofiPrototypes}, and finally hi-fi prototypes. ',
        role: 'Product Designer \n User Research, Visual Design, Prototyping',
        links: {
            linkToUserJourneys: '<a href="https://www.figma.com/proto/Q1LcfnQuR7W8HeMVMSzKaO/CS3240-Individual-Assignment?type=design&node-id=14-942&t=Bv010b8DzfrsnrXo-1&scaling=scale-down&page-id=0%3A1&mode=design" target="_blank" rel="noopener noreferrer">user journeys</a>',
            linkToRapidPrototypes: '<a href="https://www.figma.com/proto/Q1LcfnQuR7W8HeMVMSzKaO/CS3240-Individual-Assignment?type=design&node-id=301-4120&t=8DDzgkG8hFBclaRC-0&scaling=scale-down&page-id=301%3A4118" target="_blank" rel="noopener noreferrer">rapid prototypes</a>',
            linkToLofiPrototypes: '<a href="https://www.figma.com/proto/Q1LcfnQuR7W8HeMVMSzKaO/CS3240-Individual-Assignment?type=design&node-id=357-3&t=Bc6M7HCxO6hm5ZFD-1&scaling=scale-down&page-id=357%3A2&mode=design" target="_blank" rel="noopener noreferrer">lo-fi prototypes</a>',
            // linkToHifiPrototypes: '<a href="https://www.figma.com/proto/Q1LcfnQuR7W8HeMVMSzKaO/CS3240-Individual-Assignment?type=design&node-id=154-2709&t=5yGtvlmU4wwApuOt-0&scaling=scale-down&page-id=154%3A2337&starting-point-node-id=154%3A2709" target="_blank" rel="noopener noreferrer">hi-fi prototypes</a>',
        },
        images: [
            'assets/img/Bloom/catalogue-main.png',
            'assets/img/Bloom/catalogue-view.png',
            'assets/img/Bloom/plant-status.png',
            'assets/img/Bloom/plant-care.png',
            'assets/img/Bloom/plant-health-view.png',
            'assets/img/Bloom/notifications.png',
        ],
        date: 'Oct - Nov 2023',
        technologies: 'Figma, Balsamiq',
        buttons: {
            "See Report": "https://docs.google.com/document/d/1oKjgkJOAolcFrbEUol0WORus9N0WZvLMe_qy9tGsd1Q/edit?usp=sharing",
            "See Final Prototype": "https://www.figma.com/proto/Q1LcfnQuR7W8HeMVMSzKaO/CS3240-Individual-Assignment?type=design&node-id=154-2709&t=5yGtvlmU4wwApuOt-0&scaling=scale-down&page-id=154%3A2337&starting-point-node-id=154%3A2709"
        }
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
        for (const placeholder in project.links) {
            if (project.links.hasOwnProperty(placeholder)) {
                overview = overview.replace(`{${placeholder}}`, project.links[placeholder]);
            }
        }
        document.querySelector('.date').textContent = project.date;
        document.getElementById('project-technologies-text').innerHTML = project.technologies.replace(/\n/g, '<br>');
        document.getElementById('project-overview-text').innerHTML = overview.replace(/\n/g, '<br>');
        document.getElementById('project-role-text').innerHTML = project.role.replace(/\n/g, '<br>');

        const prototypeContainer = document.querySelector('.project-prototype');
        prototypeContainer.innerHTML = '';

        project.images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = "Project prototype";
            img.classList.add('prototype-image');
            prototypeContainer.appendChild(img);
        });
        const resourcesContainer = document.querySelector('.project-buttons');
        resourcesContainer.innerHTML = ''; // Clear existing content

        // Check if there are resources to display
        if (Object.keys(project.buttons).length > 0) {
            for (const buttonName in project.buttons) {
                if (project.buttons.hasOwnProperty(buttonName)) {
                    const buttonUrl = project.buttons[buttonName];
                    const button = document.createElement('button');
                    button.textContent = buttonName; // Button text from the resource key
                    button.className = 'btn btn-primary'; // Apply Bootstrap button styles
                    button.onclick = function () { window.open(buttonUrl, '_blank'); }; // Open the link in a new tab when clicked
                    resourcesContainer.appendChild(button); // Append the button to the container
                }
            }
        } else {
            resourcesContainer.textContent = 'No additional resources available.';
        }
    } else {
        console.log('Project not found');
    }
}

function getProjectIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('projectId');
}

const projectId = getProjectIdFromURL();
if (projectId) {
    loadProject(projectId);
}
