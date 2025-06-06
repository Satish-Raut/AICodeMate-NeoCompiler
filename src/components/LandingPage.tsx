import { Link } from 'react-router-dom';
import { Terminal, Zap, Sparkles, Bot, Code, Code2, ArrowRight, Globe, Save, Share, User, Lock, ChevronDown, Check, Laptop, Bug, Rocket } from 'lucide-react';
import NavBar from './NavBar';
import { useState } from 'react';

// Import language icons
import { FaJava, FaPython, FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiRuby } from "react-icons/di";
import { SiJavascript, SiTypescript, SiCplusplus, SiCoursera, SiGithub } from "react-icons/si";

// Language data
const supportedLanguages = [
    {
        id: 'java',
        name: 'Java',
        color: 'text-orange-500',
        icon: <FaJava className="w-16 h-16" />,
        extension: 'java'
    },
    {
        id: 'cpp',
        name: 'C++',
        color: 'text-blue-500',
        icon: <SiCplusplus className="w-16 h-16" />,
        extension: 'cpp'
    },
    {
        id: 'c',
        name: 'C',
        color: 'text-blue-400',
        icon: <SiCoursera className="w-16 h-16" />,
        extension: 'c'
    },
    {
        id: 'python',
        name: 'Python',
        color: 'text-yellow-400',
        icon: <FaPython className="w-16 h-16" />,
        extension: 'py'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        color: 'text-yellow-400',
        icon: <SiJavascript className="w-16 h-16" />,
        extension: 'js'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        color: 'text-blue-500',
        icon: <SiTypescript className="w-16 h-16" />,
        extension: 'ts'
    },
    {
        id: 'go',
        name: 'Go',
        color: 'text-cyan-400',
        icon: <FaGolang className="w-16 h-16" />,
        extension: 'go'
    },
    {
        id: 'rust',
        name: 'Rust',
        color: 'text-orange-500',
        icon: <FaRust className="w-16 h-16" />,
        extension: 'rs'
    },
    {
        id: 'ruby',
        name: 'Ruby',
        color: 'text-red-500',
        icon: <DiRuby className="w-16 h-16" />,
        extension: 'rb'
    },
];

const features = [
    {
        icon: <Terminal className="w-10 h-10 text-purple-400" />,
        title: "Multiple Languages",
        desc: "Support for popular programming languages - Java, Python, C++, JS and more.",
    },
    {
        icon: <Zap className="w-10 h-10 text-purple-400" />,
        title: "Real-time Execution",
        desc: "Instantly compile and run your code in cloud with real-time feedback and error reporting.",
    },
    {
        icon: <Save className="w-10 h-10 text-purple-400" />,
        title: "Save & Share Code",
        desc: "Save your code snippets to your profile and easily share them with others via a unique link.",
    },
    {
        icon: <Bot className="w-10 h-10 text-purple-400" />,
        title: "AI Assistant",
        desc: "Get help from our Gemini powered AI assistant to optimize, debug, or explain your code.",
    },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col font-sans">
            <NavBar />
            <Hero />
            <LanguageShowcase />
            <HowItWorks />
            <Features />
            <AIFeatures />
            <Testimonials />
            <UserFeatures />
            <FAQ />
            <Footer />
        </div>
    );
}

function Hero() {
    return (
        <section className="relative py-16 sm:py-20 px-4 overflow-hidden">
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Left Content - 3/5 of the space using grid */}
                <div className="lg:col-span-3 flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="flex items-center px-3 py-1 mb-6 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                        <span>AI-powered code intelligence</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-mono">
                        <span className="text-gray-300">const code = </span>
                        <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">writeAwesomeCode()</span>
                        <span className="text-gray-300">;</span>
                        <br />
                        <span className="text-gray-300">const result = </span>
                        <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">runCode(code)</span>
                        <span className="text-gray-300">;</span>
                        <br />
                        <span className="text-gray-300">return </span>
                        <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">share(result)</span>
                        <span className="text-gray-300">;</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-xl text-gray-300/90 max-w-xl">
                        Write, compile, and execute code in multiple languages directly in your browser.
                        Save your snippets and share them with friends. No setup required.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/compiler"
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-purple-600/20 flex items-center gap-2 group"
                        >
                            <span>Start Coding Now</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            to="/auth"
                            className="px-6 py-3 border border-purple-500/30 hover:border-purple-500 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl text-lg font-medium transition-all flex items-center gap-2"
                        >
                            <span>Create Account</span>
                            <User className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Right Content - 2/5 of the space */}
                <div className="lg:col-span-2 flex flex-col items-center md:mr-auto">
                    <div className="relative w-full max-w-md float-animation mt-8">
                        {/* Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl blur-xl opacity-10"></div>

                        {/* Code Snippet */}
                        <div className="relative">
                            <CodeSnippet />
                        </div>
                        {/* Decorative code blocks */}
                        <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-gray-800/70 rounded-lg border border-purple-500/20 backdrop-blur-sm rotate-6 hidden lg:block hover:rotate-3 transition-transform">
                            <Code className="w-12 h-12 text-purple-400/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mt-20 grid grid-cols-4 gap-4 max-w-lg w-full">
                        {[
                            { icon: <Globe className="w-6 h-6 text-purple-400" />, label: "9+ Languages" },
                            { icon: <Save className="w-6 h-6 text-purple-400" />, label: "Save Snippets" },
                            { icon: <Bot className="w-6 h-6 text-purple-400" />, label: "AI Assistant" },
                            { icon: <Share className="w-6 h-6 text-purple-400" />, label: "Share Code" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 border border-purple-500/30 rounded-full mb-2 hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-xs sm:text-sm text-gray-300">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
function CodeSnippet() {
    return (
        <div className="w-full md:flex-1 max-w-2xl">
            <div className="bg-gray-800/70 rounded-xl border border-purple-900/50 shadow-lg overflow-hidden backdrop-blur-md hover:shadow-purple-600/10 hover:border-purple-700/60 transition-all duration-300">
                {/* Terminal header */}
                <div className="bg-gray-800/90 px-3 py-1.5 sm:px-4 sm:py-2 border-b border-purple-900/30 flex items-center justify-between">
                    <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="flex items-center text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded-md">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                        main.js
                    </div>
                </div>

                {/* Code content */}
                <div className="relative">
                    {/* Code content*/}
                    <div className="p-2 sm:p-4 pl-8 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed">
                        <pre className="text-gray-300 font-mono whitespace-pre-wrap break-words">
                            <div className="relative">
                                <code className="block">
                                    <span className="text-purple-400">function</span> <span className="text-blue-400">greet</span>(<span className="text-yellow-300">name</span>) {'{'}
                                </code>
                                <code className="block pl-4 relative">
                                    <span className="relative text-purple-400">return</span> <span className="relative text-green-400">{"`Hello, ${name}! Welcome to NeoCompiler`"}</span>;
                                </code>
                                <code className="block">{'}'}</code>
                                <code className="block"></code>
                                <code className="block"><span className="text-purple-400">const</span> <span className="text-blue-300">result</span> = greet(<span className="text-green-400">"Developer"</span>);</code>
                                <code className="block">console.<span className="text-blue-400">log</span>(result);</code>
                            </div>
                        </pre>
                    </div>
                </div>

                {/* Terminal output with typing animation effect */}
                <div className="bg-gray-900/80 border-t border-purple-900/30 p-3 sm:p-4">
                    <div className="flex items-center text-xs uppercase text-gray-500 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                        <span>Output</span>
                        <span className="ml-auto text-[10px] text-gray-500">terminal</span>
                    </div>
                    <pre className="text-xs sm:text-sm text-purple-500 font-mono whitespace-pre-wrap break-words relative">
                        <span className="typing-animation">Hello, Developer! Welcome to NeoCompiler</span>
                    </pre>
                </div>
            </div>
        </div>
    );
}

function Features() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Powerful <span className="text-purple-500">Features</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Everything you need to code efficiently in one browser-based platform
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(({ icon, title, desc }) => (
                        <div key={title} className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all">
                            {/* Icon with concentric circular background */}
                            <div className="relative -mt-12 flex justify-center">
                                <div className="absolute rounded-full bg-purple-900/20 w-20 h-20 animate-pulse-slow"></div>
                                <div className="absolute rounded-full bg-purple-800/30 w-16 h-16 m-2"></div>
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    {icon}
                                </div>
                            </div>
                            <h3 className="my-2 text-xl font-semibold text-center">{title}</h3>
                            <p className="text-gray-300 text-center">{desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-center mt-16 text-2xl font-bold text-white mb-8">
                    Build Your <span className="text-purple-500">Coding Portfolio</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                            <User className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Custom Profiles</h3>
                        <p className="text-gray-300">
                            Create your personalized developer profile with a custom username, bio, profile picture, and social links.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                            <Share className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Share Your Code</h3>
                        <p className="text-gray-300">
                            Save and share your code snippets with others through unique shareable links.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LanguageShowcase() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Supported <span className="text-purple-500">Languages</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Write and execute code in multiple programming languages without leaving your browser
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                    {supportedLanguages.map((lang) => (
                        <div
                            key={lang.name}
                            className="flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 group"
                        >
                            <div className="relative mb-3">
                                {/* Icon with gradient background */}
                                <div className={`w-24 h-24 flex items-center justify-center rounded-lg 
                                bg-gradient-to-br from-purple-800/80 to-indigo-900/90 shadow-lg shadow-purple-800/30
                                hover:shadow-purple-600/30 transition-all duration-300 ${lang.color}`}>
                                    {lang.icon}
                                </div>

                                {/* File extension badge */}
                                <div className="absolute -bottom-1 -right-1 min-w-[20px] h-[20px] flex items-center justify-center rounded-full 
                                bg-purple-500 text-white text-xs font-mono px-1.5">
                                    {lang.extension}
                                </div>
                            </div>
                            <span className="font-medium mt-1">{lang.name}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <div className="px-4 py-2 bg-gray-800/70 rounded-full border border-purple-900/30 flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Syntax Highlighting</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-800/70 rounded-full border border-purple-900/30 flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Auto-completion</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-800/70 rounded-full border border-purple-900/30 flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Real-time Compilation</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-800/70 rounded-full border border-purple-900/30 flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Error Highlighting</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How It <span className="text-purple-500">Works</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Code, compile, and share in just a few clicks
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            step: "1",
                            title: "Select a Language",
                            description: "Choose from over 9 programming languages including JavaScript, Python, Java, and C++",
                            icon: <Code className="w-8 h-8 text-purple-400" />
                        },
                        {
                            step: "2",
                            title: "Write Your Code",
                            description: "Use our feature-rich editor with syntax highlighting, auto-completion, and more",
                            icon: <Laptop className="w-8 h-8 text-purple-400" />
                        },
                        {
                            step: "3",
                            title: "Execute & Share",
                            description: "Run your code instantly and share your snippets with a unique link",
                            icon: <Share className="w-8 h-8 text-purple-400" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all">
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                {item.step}
                            </div>
                            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    ))}

                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/compiler"
                        className="px-6 py-3 bg-gray-800/80 hover:bg-gray-700 border border-purple-900/30 hover:border-purple-500/50 rounded-lg transition-all shadow-sm hover:shadow-purple-900/20 inline-flex items-center gap-2"
                    >
                        <Terminal className="w-5 h-5" />
                        <span>Try it now</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Users <span className="text-purple-500">Say</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Join thousands of developers who trust NeoCompiler for their coding needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            quote: "NeoCompiler has completely transformed how I teach programming to my students. The ability to share code snippets has made remote learning so much easier.",
                            name: "Sarah Johnson",
                            title: "Computer Science Professor",
                            image: "https://randomuser.me/api/portraits/women/44.jpg"
                        },
                        {
                            quote: "The AI assistance feature is a game changer. It helps me optimize my code and learn new techniques without having to search through endless documentation.",
                            name: "Michael Chen",
                            title: "Full Stack Developer",
                            image: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            quote: "I love how I can quickly switch between different programming languages and test ideas without setting up local environments. It's perfect for quick prototyping.",
                            name: "Jasmine Patel",
                            title: "Software Engineering Student",
                            image: "https://randomuser.me/api/portraits/women/36.jpg"
                        }
                    ].map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gray-800/40 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-800/10"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    {/* Quote marks */}
                                    <svg width="45" height="36" className="text-purple-500/40 mb-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                                    </svg>

                                    <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                                </div>

                                <div className="mt-auto flex items-center">
                                    <div className="w-10 h-10 mr-3 rounded-full overflow-hidden bg-gray-700">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback for image loading error
                                                const target = e.target as HTMLImageElement;
                                                target.src = "https://via.placeholder.com/150?text=User";
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// Add a new AIFeatures section between Testimonials and UserFeatures
function AIFeatures() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900/70 via-violet-950/10 to-gray-900/70">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI-Powered <span className="text-purple-500">Assistance</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Supercharge your coding with our intelligent AI assistant
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* AI Features */}
                    <div className="space-y-4">
                        {[
                            {
                                title: "Code Explanation",
                                description: "Get plain-language explanations of complex code blocks to enhance understanding",
                                icon: <Bot className="w-6 h-6 text-purple-400" />
                            },
                            {
                                title: "Code Optimization",
                                description: "Receive suggestions for improving your code efficiency, readability, and performance",
                                icon: <Rocket className="w-6 h-6 text-purple-400" />
                            },
                            {
                                title: "Debugging Assistance",
                                description: "Identify and fix errors quickly with intelligent debugging suggestions",
                                icon: <Bug className="w-6 h-6 text-purple-400" />
                            },
                            {
                                title: "Code Generation",
                                description: "Generate code snippets based on natural language descriptions of what you want to build",
                                icon: <Sparkles className="w-6 h-6 text-purple-400" />
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition-colors border border-purple-900/30 hover:border-purple-500/50">
                                <div className="bg-purple-900/30 rounded-full p-3 self-start">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* AI Visualization */}
                    <div className="bg-gray-800/40 rounded-2xl border border-purple-900/30 p-6 relative overflow-hidden">
                        {/* Decorative AI pattern in background */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="grid grid-cols-10 h-full">
                                {Array(100).fill(0).map((_, i) => (
                                    <div key={i} className={`aspect-square ${Math.random() > 0.7 ? 'bg-purple-500' : ''}`}></div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center mb-6">
                                <Bot className="w-8 h-8 text-purple-500 mr-3" />
                                <div>
                                    <h4 className="font-semibold text-lg">NeoCompiler AI</h4>
                                    <p className="text-xs text-gray-400">Powered by advanced LLMs</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* User query */}
                                <div className="bg-gray-700/50 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-gray-200 text-sm">How can I optimize this function to be more efficient?</p>
                                </div>

                                {/* AI response */}
                                <div className="bg-purple-900/40 rounded-lg p-3 ml-auto max-w-[80%] border border-purple-800/30">
                                    <p className="text-gray-200 text-sm mb-2">Here's an optimized version of your function:</p>
                                    <div className="bg-gray-900/90 p-2 rounded border border-gray-700 font-mono text-xs text-purple-300 overflow-x-auto">
                                        <pre>{`function findDuplicates(array) {
  return [...new Set(
    array.filter((item, index) => 
      array.indexOf(item) !== index
    )
  )];
}`}</pre>
                                    </div>
                                    <p className="text-gray-300 text-xs mt-2">This uses Set for efficiency and filters in a single pass.</p>
                                </div>

                                {/* Typing indicator */}
                                <div className="flex gap-2 items-center">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <Link to="/compiler" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg text-sm font-medium shadow-lg hover:shadow-purple-600/20 flex items-center gap-2 group">
                                    <span>Try AI Assistant</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function UserFeatures() {
    return (
        <section className="py-16 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Start Building Your <span className="text-purple-500">Code Library</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Create an account to save your code snippets, share them with others, and build a personal library of your coding journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                            <Save className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Save Your Code</h3>
                        <p className="text-gray-300">
                            Never lose your code snippets again. Save them to your account with custom titles and descriptions.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                            <Share className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Share with Others</h3>
                        <p className="text-gray-300">
                            Generate shareable links to send to friends, colleagues, or post online. Control who can see your code.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full mb-4">
                            <Lock className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                        <p className="text-gray-300">
                            Your private snippets stay private. Choose which snippets to make public and which to keep just for you.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        to="/auth"
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-purple-600/20 flex items-center gap-2"
                    >
                        <span>Create Free Account</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FAQ() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-purple-500">Questions</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                        Got questions? We've got answers
                    </p>
                </div>

                <div className="space-y-3">
                    {[
                        {
                            question: "Is NeoCompiler free to use?",
                            answer: "Yes, NeoCompiler is completely free for individual use. Create an account to access additional features like saving and sharing code snippets with public user profiles."
                        },
                        {
                            question: "How secure is my code on NeoCompiler?",
                            answer: "Your code is securely stored and only accessible to you unless you choose to share it. We use industry-standard encryption and secure connections to protect your data."
                        },
                        {
                            question: "Which programming languages are supported?",
                            answer: "We currently support JavaScript, Python, Java, C++, TypeScript, Go, Rust, Ruby, and C. We're continuously working to add more languages based on user demand."
                        },
                        {
                            question: "What are the new social features in NeoCompiler?",
                            answer: "We've added public user profiles where you can showcase your coding portfolio, follow other developers, and build a community around your code. Users can now like snippets, view profiles, and discover trending code examples."
                        },
                        {
                            question: "How does the AI assistant work?",
                            answer: "Our AI assistant analyzes your code to provide suggestions, optimizations, and explanations. It can help debug issues, explain concepts, and even generate code snippets based on your needs."
                        },
                        {
                            question: "Can I customize my user profile?",
                            answer: "Yes! You can add a profile picture, bio, username, and social links to showcase your work. Your public profile displays all your shared code snippets and allows others to discover your work."
                        },
                        {
                            question: "Are there any usage limits?",
                            answer: "Free accounts have reasonable usage limits to ensure fair use. For high-volume usage or team accounts, please contact us to discuss enterprise options."
                        }
                    ].map((item, idx) => {
                        const [isOpen, setIsOpen] = useState(false);

                        return (
                            <div
                                key={idx}
                                className="p-4 bg-gray-800/40 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all"
                            >
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-full text-left text-lg flex items-center justify-between focus:outline-none"
                                >
                                    <div className="flex items-center">
                                        <ChevronDown
                                            className={`w-5 h-5 text-purple-400 mr-2 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                        <span>{item.question}</span>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="pl-7 text-gray-300">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-400 mb-4">
                        Have more questions? We're happy to help.
                    </p>
                    <a
                        href="mailto:deepakmodi8676@gmail.com"
                        className="px-6 py-3 bg-gray-800/80 hover:bg-gray-700 border border-purple-900/30 hover:border-purple-500/50 rounded-lg transition-all shadow-sm hover:shadow-purple-900/20 inline-flex items-center gap-2"
                    >
                        <span>Contact Support</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-12 px-4 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl border border-purple-900/40 shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-8 p-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-purple-500" />
                                <h3 className="font-semibold text-xl text-white">NeoCompiler</h3>
                            </div>
                            <p className="text-gray-300">
                                A modern, feature-rich online code editor and compiler with AI assistance.
                            </p>
                            <p className="text-sm text-gray-400">
                                © {new Date().getFullYear()} NeoCompiler. All rights reserved.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-5">
                            <h4 className="font-bold text-gray-200 text-lg">Quick Links</h4>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                                <Link to="/compiler" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                                    <Terminal className="w-4 h-4" />
                                    <span>Compiler</span>
                                </Link>
                                <Link to="/auth" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>Login</span>
                                </Link>
                                <Link to="/auth?tab=register" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                                    <Share className="w-4 h-4" />
                                    <span>Register</span>
                                </Link>
                            </div>
                        </div>

                        {/* Connect */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-300 text-center mb-4">
                                💜 Developed by <span className="text-purple-400">Code Ranger</span>
                            </h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-3 py-1.5 w-40 rounded-full bg-red-950/40 text-red-400 border border-red-900 hover:bg-red-900/30 transition-all mx-auto"
                                >
                                    <Bug className="w-4 h-4" />
                                    <span className="text-sm font-medium">Report Bug</span>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 px-3 py-1.5 w-40 rounded-full bg-indigo-950/40 text-indigo-400 border border-indigo-900 hover:bg-indigo-900/30 transition-all mx-auto"
                                >
                                    <Rocket className="w-4 h-4" />
                                    <span className="text-sm font-medium">Suggest Feature</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom border with gradient line */}
                    <div className="h-1.5 bg-gradient-to-r from-purple-600/50 via-violet-600/70 to-indigo-600/50"></div>
                </div>
            </div>
        </footer>
    );
}