export const projects = [
    {
        id: 'iskedyul',
        title: 'Iskedyul',
        description: 'Automated Scheduling Web App',
        year: '2025',
        imageClass: 'iskedyul-banner',
        fullDescription: `My team and I are developing Iskedyul, a web application designed to streamline the class scheduling process for our university's Department of Computer Science. 
                        The platform allows administrators to create or upload schedules, analyze student demand through CSV uploads, and automatically detect conflicts such as overlapping class times, faculty assignments, or venue usage. 
                        Additionally, the system provides recommendations on opening or dissolving course sections based on demand and generates optimized class combinations for different year levels according to the prescribed curriculum.`,
        technologies: ['CSS', 'HTML', 'Javascript', 'Postgresql', 'Svelte', 'Typescript']
    },
    {
        id: 'bridging-the-gap',
        title: 'Bridging The Gap',
        description: 'Exploratory Data Analysis',
        year: '2024',
        imageClass: 'gap-banner',
        fullDescription: `My team and I conducted an exploratory data analysis (EDA) on the income disparity between urban and rural areas in the Philippines, utilizing datasets from the CEIC Data Global Database and the Philippine Statistics Authority (PSA) Family Income and Expenditure Survey (FIES). 
                        Our findings revealed a significant and growing economic divide, with urban regions—especially Metro Manila (NCR)—consistently reporting higher income levels due to the centralization of economic opportunities and resources.
                        \n\nTo make our insights more accessible, we developed a website that presents key visualizations and statistical analyses. 
                        We also provided data-driven recommendations that highlight the potential impact of policies creating more rural opportunities, investing in rural development, and enhancing rural education systems to promote inclusive economic growth and reduce income disparity.`,
        technologies: ['CSS', 'HTML', 'Javascript', 'Jupyter', 'Matplotlib', 'Numpy', 'Pandas', 'Seaborn']
    },
    {
        id: 'assembler',
        title: 'Assembler',
        description: 'C Program',
        year: '2024',
        imageClass: 'assembler-banner',
        fullDescription: `We developed a C-based assembler that translates MIPS assembly code into machine code (binary), simulating the execution of MIPS instructions. 
                        I was primarily responsible for instruction parsing, conversion to binary, implementation of assembly instruction handling, and testing.`,
        technologies: ['C']
    },
    {
        id: 'laging-handa',
        title: 'Laging Handa',
        description: 'Disaster Preparedness Mobile App',
        year: '2021',
        imageClass: 'handa-banner',
        fullDescription: `Laging Handa is an emergency app designed to guide users on what to do in the event of a natural disaster. 
                        By integrating government-sourced datasets, the app provides real-time evacuation planning, survival guides, and emergency alerts to help residents of Butuan City stay safe. 
                        Its key features include disaster-specific survival guides, real-time evacuation routing, disaster alerts via SMS, first aid tutorials, and emergency hotlines.
                        \n\nWe pitched the app to Butuan City LGU officials and industry professionals at the SPARTA Hackathon and Open Data Challenge, an event organized by the Development Academy of the Philippines (DAP), Department of Science and Technology (DOST), and Butuan City LGU. 
                        The competition aimed to leverage data and technology to solve Butuan's pressing challenges, with potential for project incubation.
`,
        technologies: ['Figma']
    },
    {
        id: 'butuwhere',
        title: 'BuTuWhere',
        description: 'Travel Mobile App',
        year: '2021',
        imageClass: 'butuwhere-banner',
        fullDescription: `BuTuWhere is a preference-based travel application designed to make trip planning for Butuan City seamless and personalized. 
                        The app optimizes travel itineraries based on user preferences, such as duration of stay, budget, and activity interests, using data-driven algorithms based on key datasets, including Butuan's Tourism Master Plan. 
                        The goal was to expand Butuan's tourism industry while giving visibility to smaller, lesser-known businesses.
                        \n\nWe pitched the app to Butuan City LGU officials and industry professionals at the SPARTA Hackathon and Open Data Challenge, an event organized by the Development Academy of the Philippines (DAP), Department of Science and Technology (DOST), and Butuan City LGU. 
                        The competition aimed to leverage data and technology to solve Butuan's pressing challenges, with potential for project incubation.`,
        technologies: ['Figma']
    },
    {
        id: 'guess-that-baby',
        title: 'Guess That Baby!',
        description: 'Educational Java Game',
        year: '2021',
        imageClass: 'baby-banner',
        fullDescription: `"Guess That Baby!" is an educational game designed to help students learn about Mendelian inheritance through interactive gameplay. 
                        The game provides a crash course on genetics before challenging players to predict the physical traits of an offspring based on two parents with randomly-generated traits. 
                        Players select traits they believe the offspring will inherit, which are then visually reflected in the game.
                        \n\nWe developed the game using Java and JavaFX, leveraging FXML for UI layout and Java controllers to handle game logic and interactions. The game features over 150 custom icons and illustrations to represent different traits, as well as 900,000+ possible parent combinations.`,
        technologies: ['Java', 'FXML', 'CSS']
    }
];

type Project = {
    id: string;
    title: string;
    description: string;
    year: string;
    imageClass: string;
    fullDescription: string;
    technologies: string[];
};

export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id);
}