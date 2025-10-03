'use client';
import { useI18n } from '../../hooks/useI18n';
import { Button } from '../../components/atoms/Button';
import { Icon } from '../../components/atoms/Icon';

export default function ContactPage() {
	const { t } = useI18n();

	const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

	return (
		<section id="contact" className="section alternate-bg">
			<div className="container max-w-3xl">
				<h2 className="section-title text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400 text-center" data-aos="zoom-in">
					{t('contact_title')}
				</h2>
				<p className="subtitle text-xl mb-12 text-gray-600 dark:text-gray-300 text-center" data-aos="zoom-in" data-aos-delay="100">
					{t('contact_subtitle')}
				</p>

				<form
					className="contact-form space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl"
					autoComplete="off"
					action="https://api.web3forms.com/submit"
					method="POST"
					data-aos="fade-up"
				>
					<input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

					<div className="form-group flex flex-col md:flex-row gap-4">
						<input
							name="Firstname"
							className="contact-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-gray-100"
							type="text"
							placeholder={t('contact_name_placeholder')}
							required
							aria-label={t('contact_name_placeholder')}
						/>
						<input
							name="Email"
							className="contact-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-gray-100"
							type="email"
							placeholder={t('contact_email_placeholder')}
							required
							aria-label={t('contact_email_placeholder')}
						/>
					</div>

					<input
						name="Subject"
						className="contact-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-gray-100"
						type="text"
						placeholder={t('contact_subject_placeholder')}
						required
						aria-label={t('contact_subject_placeholder')}
					/>

					<textarea
						name="Message"
						className="contact-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-gray-100"
						placeholder={t('contact_message_placeholder')}
						rows="6"
						required
						aria-label={t('contact_message_placeholder')}
					></textarea>

					<Button>{t('contact_button')}</Button>
				</form>

				<div className="quick-contact-info mt-12 text-center" data-aos="zoom-in">
					<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t('quick_contact_title')}</h3>
					<p className="flex items-center justify-center text-lg mb-2 text-gray-700 dark:text-gray-300">
						<Icon name="phone" className="mr-3 text-blue-500" />
						<a href={`tel:${t('contact_phone')}`} className="hover:text-blue-600 transition-colors">
							{t('contact_phone')}
						</a>
					</p>
					<p className="flex items-center justify-center text-lg text-gray-700 dark:text-gray-300">
						<Icon name="envelope" className="mr-3 text-blue-500" />
						<a href={`mailto:${t('contact_email')}`} className="hover:text-blue-600 transition-colors">
							{t('contact_email')}
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
