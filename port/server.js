const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow requests from other origins
app.use(express.json()); // Parse JSON bodies

// Sample Data
const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    about: "A passionate software developer with experience in web and mobile applications."
};

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase my projects.",
        link: "https://example.com/portfolio"
    },
    {
        title: "Weather App",
        description: "A weather forecasting app with real-time data.",
        link: "https://example.com/weather-app"
    }
];

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "XYZ University",
        year: "2024"
    },
    {
        degree: "High School",
        institution: "ABC School",
        year: "2020"
    }
];

// API Endpoints
app.get('/api/profile', (req, res) => {
    res.json(profile);
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/education', (req, res) => {
    res.json(education);
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
