import type { Metadata } from "next";
import { projectData } from "@/data/project";
import { FeaturedProjectCard } from "./featured-card";
import { ProjectLink } from "./link";

export const metadata: Metadata = {
	title: "Projects",
	description: "Backend projects built by Maddipati Puneet Janakiram",
};

const Projects = () => {
	const featuredProjects = projectData.filter((project) => project.isFeatured);
	const visibleFeaturedProjects =
		featuredProjects.length % 2 === 0 ? featuredProjects : featuredProjects.slice(0, featuredProjects.length - 1);
	const listProjects = projectData.filter(
		(project) => !visibleFeaturedProjects.some((featuredProject) => featuredProject.url === project.url),
	);

	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Selected backend projects and APIs I&apos;ve built.</h1>

			{visibleFeaturedProjects.length > 0 && (
				<div className="mb-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{visibleFeaturedProjects.map((project) => (
							<FeaturedProjectCard
								key={project.url}
								name={project.name}
								url={project.url}
								description={project.description}
							/>
						))}
					</div>
				</div>
			)}

			<ul>
				{listProjects.map((project) => (
					<ProjectLink key={project.url} name={project.name} url={project.url} description={project.description} />
				))}
			</ul>
		</section>
	);
};

export default Projects;
