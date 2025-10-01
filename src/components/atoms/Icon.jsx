import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Initialize library to use icons (Need to be done only one time, I think)
library.add(fas, fab);

export const Icon = ({ name, type = 'solid', className = '' }) => {
	// name = the icon name ('moon', 'linkedin')
	const iconPrefix = type === 'solid' ? 'fas' : 'fab';

	return <FontAwesomeIcon icon={[iconPrefix, name]} className={className} />;
};
