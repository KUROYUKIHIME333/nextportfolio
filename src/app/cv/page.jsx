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
		<>
			<section id="cv" className="section bg-gray-50 dark:bg-gray-900">
				<div className="container cv-layout max-w-5xl">
					<h2 className="section-title text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center" data-aos="zoom-in">
						{t('cv_title')}
					</h2>

					<div className="cv-grid grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 alternate-bg rounded-xl shadow-2xl">
						<div className="cv-column">
							<h3 className="cv-subtitle text-3xl font-bold mb-8 border-b pb-2 border-blue-400 text-gray-900 dark:text-gray-100" data-aos="fade-up">
								{t('cv_exp_title')}
							</h3>

							{/* Simulation des Expériences Pro */}
							<CVItem titleKey="exp_tracking_title" dateKey="exp_tracking_date" summaryKey="exp_tracking_summary" missions="exp_tracking_missions" skills="exp_tracking_skills" />

							<CVItem titleKey="exp_kadea_title" dateKey="exp_kadea_date" summaryKey="exp_kadea_summary" missions="exp_kadea_missions" />

							<CVItem titleKey="exp_orbit_title" dateKey="exp_orbit_date" summaryKey="exp_orbit_summary" missions="exp_orbit_missions" />

							<CVItem titleKey="exp_sctp_title" dateKey="exp_sctp_date" summaryKey="exp_sctp_summary" missions="exp_sctp_missions" />

							<CVItem titleKey="exp_sctp2_title" dateKey="exp_sctp2_date" summaryKey="exp_sctp2_summary" />
						</div>

						<div className="cv-column">
							<h3 className="cv-subtitle text-3xl font-bold mb-8 border-b pb-2 border-blue-400 text-gray-900 dark:text-gray-100" data-aos="fade-up">
								{t('cv_edu_title')}
							</h3>

							{/* Simulation des Formations */}
							<CVItem titleKey="edu_kadea_title" dateKey="edu_kadea_date" missions="edu_loyola_stages" />
							<CVItem titleKey="edu_loyola_title" dateKey="edu_loyola_date" />

							{t('cv_skills_list') && (
								<>
									<h3 className="cv-subtitle text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-gray-100" data-aos="fade-up">
										{t('cv_skills_title')}
									</h3>
									<div className="skills-tags" data-aos="fade-up">
										{t('cv_skills_list').map((skill) => (
											<SkillTag key={skill}>{skill}</SkillTag>
										))}
									</div>
								</>
							)}

							{t('cv_lang_list') && (
								<>
									<h3 className="cv-subtitle text-2xl font-bold mt-10 mb-5 text-gray-900 dark:text-gray-100" data-aos="fade-up">
										{t('cv_lang_title')}
									</h3>
									<ul className="lang-list" data-aos="fade-up">
										{t('cv_lang_list').map((langue, index) => (
											<li key={index} className="mb-2 text-gray-700 dark:text-gray-300">
												<Icon type="solid" name="comment" className="lang-list-icon" />
												{langue}
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</div>
				</div>
			</section>

			<div className="download-cv-section" data-aos="zoom-in">
				<p>{t('cv_description_download')}</p>
				<Button href="/documents/CV_Daniel_Ramazani.pdf" type="downloadCV">
					<Icon type="solid" name="download" className="fas" /> {t('cta_cv')}
				</Button>
			</div>
		</>
	);
}
