
export default function sectionHandler(data, section, existingData) {
	switch(section) {
		case 'languages':
		case 'hobbies':
		case 'skills':
		case 'reference':
		case 'education':
		case 'workEx':
			existingData = existingData || [];
			return [...existingData, data];

		default: 
			return data
	}
}