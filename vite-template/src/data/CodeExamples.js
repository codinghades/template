export const codeExamples = {
  "App.jsx": `
    import Navbar from "./Navbar";
    import Hero from "./Hero";

    function App() {
    return (
        <div className="app">
        <Navbar />
        <Hero />
        </div>
    );
    }

    export default App;
    `,

    "Hero.jsx": `
    function Hero() {
    return (
        <section className="hero">
        <h1>Welcome to My App</h1>
        <p>This is a simple hero section.</p>
        <button>Get Started</button>
        </section>
    );
    }

    export default Hero;
    `,

    "Navbar.jsx": `
    function Navbar() {
    return (
        <nav className="navbar">
        <h2>MyLogo</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    );
    }

    export default Navbar;
    `,
};

export const floatingCards = {
    "App.jsx" : {
        bgColor: 'bg-blue-500/20',
        iconColor: 'text-blue-400',
        textColor: 'text-blue-200',
        contentColor: 'text-blue-300',
        icon: 'AI',
        title: 'Smart Completion',
        content: 'AI powered suggestions in real-time.'
    },
    "Hero.jsx" : {
        bgColor: 'bg-yellow-500/20',
        iconColor: 'text-yellow-400',
        textColor: 'text-yellow-200',
        contentColor: 'text-yellow-300',
        icon: '⚡',
        title: 'Auto Automation',
        content: 'Fast automation speed as lightning.'
    },
    "Navbar.jsx" : {
        bgColor: 'bg-emerald-500/20',
        iconColor: 'text-emerald-400',
        textColor: 'text-emerald-200',
        contentColor: 'text-emerald-300',
        icon: '🔎',
        title: 'Smart Search',
        content: 'Intelligent code search across your project.'
    }
}