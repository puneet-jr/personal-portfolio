import type { Metadata } from "next";
import { projectData } from "@/data/project";
import { ProjectLink } from "./link";

export const metadata: Metadata = {
	title: "Projects",
	description: "Backend projects built by Maddipati Puneet Janakiram",
};

const Projects = () => {
	return (
		<section className="space-y-8">
			<div className="space-y-3">
				<p className="text-xs uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">Projects</p>
				<h1 className="font-semibold text-2xl tracking-tighter text-neutral-950 dark:text-neutral-50">
					Selected backend projects and APIs I&apos;ve built.
				</h1>
				<p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
					A focused set of backend systems covering auth, RBAC, Redis-powered workflows, transactional APIs, and
					production-oriented testing.
				</p>
			</div>

			<ul className="space-y-4">
				{projectData.map((project) => (
					<ProjectLink
						key={project.url}
						name={project.name}
						url={project.url}
						description={project.description}
						stack={project.stack}
						highlights={project.highlights}
						year={project.year}
					/>
				))}
			</ul>
		</section>
	);
};

export default Projects;
