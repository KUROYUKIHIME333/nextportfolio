'use client';
import { useI18n } from '../../hooks/useI18n';
import { Button } from '../../components/atoms/Button';
import { Icon } from '../../components/atoms/Icon';
import { SkillTag } from '../../components/atoms/SkillTag';
import { CV_SKILLS } from '../../utils/data';
import { CVItem } from '../../components/molecules/CvItem';

export default function CVPage() {
	const { t } = useI18n();

	return (
		<section id="cv" className="section bg-gray-50 dark:bg-gray-900">
			<div className="container cv-layout max-w-5xl">
				<h2 className="section-title text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center" data-aos="fade-down">
					{t('cv_title')}
				</h2>

				<div className="cv-grid grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 alternate-bg rounded-xl shadow-2xl">
					<div className="cv-column">
						<h3 className="cv-subtitle text-3xl font-bold mb-8 border-b pb-2 border-blue-400 text-gray-900 dark:text-gray-100">{t('cv_exp_title')}</h3>

						{/* Simulation des Expériences Pro */}
						<CVItem titleKey="exp_tracking_title" dateKey="exp_tracking_date" summaryKey="exp_tracking_summary">
							<div className="skills-tags mt-4">
								<SkillTag>Next.js</SkillTag>
								<SkillTag>Redux Toolkit</SkillTag>
								<SkillTag>Firebase</SkillTag>
							</div>
						</CVItem>

						<CVItem titleKey="exp_kadea_title" dateKey="exp_kadea_date" summaryKey="exp_kadea_summary" />
					</div>

					<div className="cv-column">
						<h3 className="cv-subtitle text-3xl font-bold mb-8 border-b pb-2 border-blue-400 text-gray-900 dark:text-gray-100">{t('cv_edu_title')}</h3>

						{/* Simulation des Formations */}
						<CVItem titleKey="edu_kadea_title" dateKey="edu_kadea_date" />
						<CVItem titleKey="edu_loyola_title" dateKey="edu_loyola_date" />

						<h3 className="cv-subtitle text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-gray-100">{t('cv_skills_title')}</h3>
						<div className="skills-tags">
							{CV_SKILLS.map((skill) => (
								<SkillTag key={skill}>{skill}</SkillTag>
							))}
						</div>

						<h3 className="cv-subtitle text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-gray-100">{t('cv_lang_title')}</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
							<li>Français (Langue maternelle)</li>
							<li>Anglais (Courant)</li>
						</ul>
					</div>
				</div>

				<div className="download-cv-section mt-12 text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg" data-aos="zoom-in">
					<p className="text-xl mb-4 text-gray-700 dark:text-gray-300">{t('cv_description_download')}</p>
					<Button href="/assets/CV_2025-09-30_Daniel_RAMAZANI SUMAILI (Column).pdf" type="download" download="CV_Daniel_Ramazani.pdf">
						<Icon name="download" className="mr-2" /> {t('cta_cv')}
					</Button>
				</div>
			</div>
		</section>
	);
}
