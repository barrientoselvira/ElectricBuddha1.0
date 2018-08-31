const Waves = {
    Normal: {
        id: 1, 
        image: "abstract.jpg", 
        text: [
            "Normal",
            "This is how you feel now"
        ]
    }, 
    Delta: {
        id: 2,
        frequency: "0.1-4 Hz",
        image: "desert.jpg", 
        audio: "delta.mp3",
        text: [
            "Deep sleep",
            "Pain relief",
            "Anti-aging (cortisol reduction/DHEA increase)",
            "Access to unconscious mind"
        ]
    },
    Theta: {
        id: 3,
        image: "waterfall.jpg", 
        frequency: "4-8 Hz",
        audio: "theta.mp3",
        text: [
            "Deep relaxation",
            "Inner peace",
            "Meditation",
            "Creativity",
            "Hypnopompic & hypnagogic states"
        ]
    },
    Alpha: {
        id: 4, 
        image: "green.jpg",
        frequency: "8-14 Hz",
        audio: "alpha.mp3",
        text: [
            "Relaxed focus",
            "Stress reduction",
            "Positive thinking",
            "Accelerated learning",
            "Flow state (effortlessly engaged in activity & environment"
        ]
    },
    Beta: {
        id: 5, 
        image: "sun.jpg",
        frequency: "14-30 Hz",
        audio: "beta.mp3",
        text: [
            "Focused attention (external stimuli)",
            "High-level cognition",
            "Analytical thinking & problem solving",
            "Stimulates energy & action"
        ]
    },
    Gamma: {
        id: 6,
        frequency: "30-100 Hz",
        audio: "gamma.mp3",
        text: [
            "High-level information processing",
            "Cognitive enhancement",
            "Memory recall",
            "Peak awareness",
            "Transcendental states"
        ]
    }
}
export default Waves;