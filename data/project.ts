interface ProjectData {
	name: string;
	url: string;
	description: string;
	isFeatured: boolean;
}

export const projectData: ProjectData[] = [
	{
		name: "Workspace Hub API",
		url: "https://github.com/puneet-jr/workspace-hub-api",
		description: "TypeScript backend for a work management app with JWT auth, RBAC, validation, and APIs for workspaces, projects, tasks, and comments.",
		isFeatured: true,
	},
	{
		name: "Restaurant Review API",
		url: "https://github.com/puneet-jr/RESTAURENT-MANAGEMENT",
		description: "Scalable restaurant review backend using TypeScript, Express, RedisJSON, RediSearch, and RedisBloom for review and cuisine workflows.",
		isFeatured: true,
	},
	{
		name: "Event Booking Management System",
		url: "https://github.com/puneet-jr/EVENT_BOOKING_SYSTEM",
		description: "RESTful booking API with JWT auth, RBAC, transactional seat management, and email notifications using Node.js, Express, and MySQL.",
		isFeatured: false,
	},
	{
		name: "Task Manager API",
		url: "https://github.com/puneet-jr/TASK-MANAGER-API",
		description: "TypeScript and Express API featuring Redis cache-aside caching, BullMQ background workers, and JWT auth with refresh tokens.",
		isFeatured: false,
	},
	{
		name: "Smart Course Recommendation System",
		url: "https://github.com/puneet-jr/Course-Recommendation-System-",
		description: "Streamlit-based recommendation system using TF-IDF, cosine similarity, preference analysis, advanced search, and learning analytics for personalized course discovery.",
		isFeatured: true,
	},
	{
		name: "Notes & Tasks Backend API",
		url: "https://github.com/puneet-jr/notes_website",
		description: "Node.js, Express, and MongoDB REST API with JWT auth, role-based access control, Joi validation, centralized error handling, and Pino logging.",
		isFeatured: false,
	},
	{
		name: "Junkyard Management Full-Stack App",
		url: "https://github.com/puneet-jr/Waste-management-fullstack",
		description: "Full-stack application with Express backend and React frontend, built with responsive UI, environment-based configuration, and production-ready project structure.",
		isFeatured: false,
	},
];
