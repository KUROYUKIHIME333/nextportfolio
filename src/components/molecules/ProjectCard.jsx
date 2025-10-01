import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '../../components/atoms/Icon';
import { useI18n } from '../../hooks/useI18n';

export const ProjectCard = ({ project }) => {
	const { t } = useI18n();

	// Use of project.key + '_title' and project.key + '_description'
	const title = t(`${project.key}_title`);
	const description = t(`${project.key}_description`);

	// Simulate onerror
	const imageSrc = project.imgUrl || 'https://placehold.co/400x250/2563eb/ffffff?text=Mini+Link';

	return (
		<div className="project-card alternate-bg" data-aos="fade-up">
			<Image
				src={imageSrc}
				alt="Mini Link - Raccourcisseur de liens"
				width={400}
				height={250}
				className="project-image"
				onError={(e) => (e.target.src = 'https://placehold.co/400x250/2563eb/ffffff?text=Mini+Link')}
			/>

			<div className="card-content">
				<h3 data-lang-key="project1_title">{title}</h3>
				<p data-lang-key="project1_description">{description}</p>

				{project.link && (
					<Link href={project.link} target="_blank" className="project-link">
						{t('project_link')} <Icon name="arrow-right" className="ml-2" />
					</Link>
				)}
			</div>
		</div>
	);
};
