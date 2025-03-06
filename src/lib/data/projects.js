export const projects = [
    {
        id: 'bridging-the-gap',
        title: 'Bridging The Gap',
        description: 'Data science project',
        year: '2024',
        imageClass: 'gap-banner',
        fullDescription: `"Bridging The Gap" is a data visualization project that examines socioeconomic disparities across different communities. 
        Using public datasets, this project presents compelling visual narratives about income inequality, educational access,
        and opportunities for economic mobility.`,
        challenges: `Working with large, messy public datasets was the primary challenge. The data required extensive cleaning 
        and normalization. Additionally, finding meaningful ways to visualize complex socioeconomic relationships 
        demanded creative approaches to data storytelling.`,
        solution: `I created an interactive dashboard that allows users to explore different facets of inequality:
        - Income distribution across neighborhoods
        - Educational resource allocation
        - Access to essential services
        - Economic mobility indicators`,
        technologies: ['Python', 'Pandas', 'D3.js', 'React', 'Data Visualization']
    },
    {
        id: 'assembler',
        title: 'Assembler',
        description: '',
        year: '2024',
        imageClass: 'assembler-banner',
        fullDescription: 'A low-level programming project focusing on assembly language and computer architecture.',
        challenges: 'Understanding the intricacies of machine code and creating an intuitive interface for learning assembly.',
        solution: 'Developed an interactive tool that visualizes how assembly code executes at the processor level.',
        technologies: ['Assembly', 'C++', 'JavaScript', 'WebAssembly']
    },
    {
        id: 'bitwise',
        title: 'BitWise',
        description: 'Mobile app for computer science learning',
        year: '2022',
        imageClass: 'bitwise-banner',
        fullDescription: 'An educational mobile application designed to teach computer science concepts through interactive lessons and challenges.',
        challenges: 'Making complex CS concepts accessible and engaging for beginners while keeping the app lightweight.',
        solution: 'Created bite-sized lessons with interactive visualizations and gamified learning experiences.',
        technologies: ['React Native', 'JavaScript', 'Firebase', 'UI/UX Design']
    },
    {
        id: 'jot',
        title: 'JOT',
        description: 'Productivity app',
        year: '2022',
        imageClass: 'jot-banner',
        fullDescription: 'A productivity application focused on streamlining note-taking and task management.',
        challenges: 'Building an intuitive interface that supports both quick notes and complex organizational systems.',
        solution: 'Implemented a flexible note system with tagging, linking, and smart reminders.',
        technologies: ['React', 'TypeScript', 'Electron', 'IndexedDB']
    },
    {
        id: 'laging-handa',
        title: 'Laging Handa',
        description: 'Emergency app',
        year: '2021',
        imageClass: 'handa-banner',
        fullDescription: 'An emergency preparedness application designed to help users during natural disasters and emergencies.',
        challenges: 'Ensuring the app works reliably even with limited connectivity and provides accurate, life-saving information.',
        solution: 'Created offline-first functionality with local caching and minimal battery usage during emergencies.',
        technologies: ['Flutter', 'Dart', 'Google Maps API', 'Firebase']
    },
    {
        id: 'butuwhere',
        title: 'BuTuWhere',
        description: 'Travel app',
        year: '2021',
        imageClass: 'butuwhere-banner',
        fullDescription: 'A travel companion app that helps users discover local attractions and hidden gems.',
        challenges: 'Curating quality content for diverse locations and making recommendations that feel personal.',
        solution: 'Implemented a community-driven content system with AI-enhanced recommendations based on user preferences.',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Places API']
    },
    {
        id: 'guess-that-baby',
        title: 'Guess That Baby!',
        description: 'Educational game on Mendelian genetics',
        year: '2021',
        imageClass: 'baby-banner',
        fullDescription: 'An educational game that teaches Mendelian genetics through an engaging interface where players predict baby traits.',
        challenges: 'Making complex genetic concepts fun and interactive while maintaining scientific accuracy.',
        solution: 'Designed a playful interface with accurate genetic models behind the scenes.',
        technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Web Animation API']
    }
];

export function getProjectById(id) {
    return projects.find(project => project.id === id);
}