"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ArrowIcon from "../components/arrow-icon";

interface projectProps {
	name: string;
	url: string;
	description: string;
	stack?: string;
	highlights?: string[];
	year?: string;
}

export const ProjectLink = (props: projectProps) => {
	const ctrls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		}
		if (!inView) {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	const listAnimation = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.li
			ref={ref}
			className="group"
			key={props.url}
			animate={ctrls}
			variants={listAnimation}
			initial="hidden"
		>
			<a
				href={props.url}
				className="relative block overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:border-neutral-500/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_30%)] opacity-70 transition duration-300 group-hover:opacity-100" />
				<div className="relative flex h-full flex-col gap-4">
					<div className="flex items-start justify-between gap-4">
						<div className="space-y-2">
							<div className="flex flex-wrap items-center gap-2">
								<p className="font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">{props.name}</p>
								{props.year ? (
									<span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
										{props.year}
									</span>
								) : null}
							</div>
							<p className="max-w-3xl text-sm leading-6 text-neutral-700 dark:text-neutral-300">{props.description}</p>
						</div>
						<div className="shrink-0 text-neutral-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-12 dark:text-neutral-200">
							<ArrowIcon />
						</div>
					</div>

					{props.stack ? (
						<p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-600 dark:text-amber-300">
							{props.stack}
						</p>
					) : null}

					{props.highlights?.length ? (
						<div className="grid gap-2 md:grid-cols-3">
							{props.highlights.map((highlight) => (
								<p
									key={highlight}
									className="rounded-xl border border-white/10 bg-black/10 px-3 py-3 text-sm leading-6 text-neutral-700 backdrop-blur-sm dark:bg-white/[0.03] dark:text-neutral-300"
								>
									{highlight}
								</p>
							))}
						</div>
					) : null}
				</div>
			</a>
		</motion.li>
	);
};
