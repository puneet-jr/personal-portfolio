interface ProjectData {
	name: string;
	url: string;
	description: string;
	stack?: string;
	highlights?: string[];
	year?: string;
}

export const projectData: ProjectData[] = [
	{
		name: "Workspace Hub API",
		url: "https://github.com/puneet-jr/workspace-hub-api",
		description:
			"Production-grade Node.js/TypeScript backend for workspace and task management with strict 3-tier RBAC and a full task lifecycle.",
		stack: "Node.js, TypeScript, JWT, Redis, Jest",
		highlights: [
			"Built a production-grade backend with Owner/Admin/Member RBAC and real-time commenting.",
			"Secured authentication with JWT, Redis refresh tokens, and Zod validation.",
			"Achieved strong integration coverage with Jest and Supertest for critical auth and permission flows.",
		],
		year: "2025",
	},
	{
		name: "Restaurant Review API",
		url: "https://github.com/puneet-jr/RESTAURENT-MANAGEMENT",
		description:
			"Restaurant review platform built around advanced Redis data structures for search, ratings, caching, and cuisine discovery.",
		stack: "Node.js, TypeScript, Express, Redis",
		highlights: [
			"Developed a review platform using Node.js, TypeScript, Express, and advanced Redis modules.",
			"Added full-text search, Bloom filter deduplication, sorted-set ratings, and set-based cuisine filtering.",
			"Used list-stored reviews and TTL caching to support responsive review workflows.",
		],
		year: "2025",
	},
	{
		name: "Event Booking Management System",
		url: "https://github.com/puneet-jr/EVENT_BOOKING_SYSTEM",
		description: "RESTful API with transactional booking, seat management, and email notifications.",
		stack: "Node.js, Express, MySQL, JWT",
		highlights: [
			"Built with Node.js, Express, and MySQL using JWT authentication and role-based access control.",
			"Implemented transactional booking with seat management for safer concurrent reservations.",
			"Integrated email notifications to complete the booking flow.",
		],
		year: "2025",
	},
	{
		name: "Smart Course Recommendation System",
		url: "https://github.com/puneet-jr/Course-Recommendation-System-",
		description: "Streamlit-based recommendation system using TF-IDF, cosine similarity, preference analysis, advanced search, and learning analytics for personalized course discovery.",
		stack: "Python, Streamlit, TF-IDF, Cosine Similarity",
		year: "2024",
	},
	{
		name: "Notes & Tasks Backend API",
		url: "https://github.com/puneet-jr/notes_website",
		description: "Node.js, Express, and MongoDB REST API with JWT auth, role-based access control, Joi validation, centralized error handling, and Pino logging.",
		stack: "Node.js, Express, MongoDB, JWT",
		year: "2024",
	},
	{
		name: "Junkyard Management Full-Stack App",
		url: "https://github.com/puneet-jr/Waste-management-fullstack",
		description: "Full-stack application with Express backend and React frontend, built with responsive UI, environment-based configuration, and production-ready project structure.",
		stack: "React, Express, MongoDB, Node.js",
		year: "2024",
	},
];
