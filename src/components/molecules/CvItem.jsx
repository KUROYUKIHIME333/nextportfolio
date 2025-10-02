import { useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { SkillTag } from '../atoms/SkillTag';

export const CVItem = ({ titleKey, dateKey, summaryKey, missions, skills }) => {
	const { t } = useI18n();

	const translatedMissions = t(missions);
	const translatedSkills = t(skills);

	useEffect(() => {
		console.log(translatedMissions);
		console.log(translatedSkills);
	}, []);

	return (
		<div className="mt-8 exp-item mb-8 p-4 border-l-4 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up">
			<h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{t(titleKey)}</h4>
			<p className="company-date text-sm text-gray-500 dark:text-gray-400 mb-3">{t(dateKey)}</p>
			{summaryKey && <p className="exp-summary text-gray-700 dark:text-gray-300">{t(summaryKey)}</p>}
			{translatedMissions && (
				<ul className="exp-missions">
					{translatedMissions.map((mission, index) => (
						<li key={index} className="mb-2 text-gray-700 dark:text-gray-300">
							{mission}
						</li>
					))}
				</ul>
			)}
			{translatedSkills && (
				<div className="skills-tags">
					{translatedSkills.map((skill, index) => (
						<SkillTag key={index}>{skill}</SkillTag>
					))}
				</div>
			)}
		</div>
	);
};
