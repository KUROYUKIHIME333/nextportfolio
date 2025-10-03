'use client';
// import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '../hooks/useI18n';
import { Button } from '../components/atoms/Button';
// import { Icon } from '../components/atoms/Icon';

export default function HomePage() {
	const { t } = useI18n();

	return (
		<>
			<section id="hero" className="section hero-section">
				<div className="container">
					<div className="hero-content" data-aos="zoom-in">
						<h2>{t('hero_title')}</h2>
						<p className="subtitle">{t('hero_subtitle')}</p>
						<Button href="/projects">{t('cta_projects')}</Button>
					</div>
				</div>
			</section>

			<section id="about" className="section alternate-bg">
				<div className="container">
					<div className="about-grid">
						<div className="about-image" data-aos="zoom-in-right">
							<Image src="https://i.ibb.co/Z6Wrg0Fj/portrait.jpg" alt="Portrait de Daniel Ramazani" width={400} height={400} className="rounded-xl shadow-2xl w-full h-auto" />
						</div>
						<div className="about-text" data-aos="zoom-in-left">
							<h2 className="section-title">{t('about_title')}</h2>
							<p data-lang-key="about_description" className="about_description">
								{t('about_description')}
							</p>
							{/* <div className="contact-info">
								<p className="flex items-center text-lg text-gray-800 dark:text-gray-200">
									<Icon name="phone" className="mr-3 text-blue-500" />
									<a href={`tel:${t('contact_phone')}`} className="hover:text-blue-600 transition-colors">
										{t('contact_phone')}
									</a>
								</p>
								<p className="flex items-center text-lg text-gray-800 dark:text-gray-200">
									<Icon name="envelope" className="mr-3 text-blue-500" />
									<a href={`mailto:${t('contact_email')}`} className="hover:text-blue-600 transition-colors">
										{t('contact_email')}
									</a>
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
