-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level INT NOT NULL CHECK (level >= 0 AND level <= 100),
    color VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(500) NOT NULL,
    technologies JSON NOT NULL,
    github VARCHAR(500),
    live VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample skills data
INSERT INTO skills (name, level, color) VALUES
('React', 90, 'bg-blue-500'),
('JavaScript', 85, 'bg-yellow-500'),
('Node.js', 80, 'bg-green-500'),
('HTML5', 95, 'bg-orange-500'),
('CSS3', 90, 'bg-blue-600'),
('Tailwind CSS', 85, 'bg-cyan-500'),
('Bootstrap', 85, 'bg-purple-600'),
('PHP', 75, 'bg-indigo-500'),
('Python', 80, 'bg-yellow-600'),
('Django', 75, 'bg-green-700'),
('MySQL', 80, 'bg-blue-700'),
('MongoDB', 70, 'bg-green-600'),
('Git', 85, 'bg-red-600'),
('GitHub', 85, 'bg-gray-800');

-- Insert sample projects data
INSERT INTO projects (title, description, image, technologies, github, live) VALUES
('India Unveiled', 'A beautiful static website showcasing the rich culture, heritage, and diversity of India. Built with pure HTML, CSS, and JavaScript. Features interactive sections, smooth animations, and responsive design that works seamlessly on all devices.', 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800', '["HTML", "CSS", "JavaScript"]', 'https://github.com/mansiparmar1619/India-Unveiled.git', '#'),
('NP Solutions', 'A fully functional real-world website created for a client. Built with HTML, CSS, JavaScript, PHP, and SQL. Features dynamic content, database integration, responsive design, and complete backend functionality. A professional business solution delivered to meet all client requirements.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', '["HTML", "CSS", "JavaScript", "PHP", "SQL"]', 'https://github.com/mansiparmar1619/WT_PROJECTT.git', '#');

