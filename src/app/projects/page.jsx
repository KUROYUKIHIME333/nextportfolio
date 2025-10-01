'use client';
import { useI18n } from '../../hooks/useI18n';
import { PROJECTS_DATA } from '../../utils/data';
import { ProjectCard } from '../../components/molecules/ProjectCard';

export default function ProjectsPage() {
	const { t } = useI18n();

	return (
		<section id="projects" className="section">
			<div className="container">
				<h2 className="section-title text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400 text-center" data-aos="zoom-in">
					{t('projects_title')}
				</h2>
				<p className="subtitle text-xl mb-12 text-gray-600 dark:text-gray-300 text-center" data-aos="zoom-in" data-aos-delay="100">
					{t('projects_subtitle')}
				</p>

				<div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{PROJECTS_DATA.map((project) => (
						<ProjectCard key={project.key} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
