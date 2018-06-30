
export function sectionHandler(data, section, existingData) {
	switch(section) {
		case 'languages':
		case 'hobbies':
		case 'skills':
		case 'reference':
		case 'education':
		case 'workEx':
		case 'certifications':
			existingData = existingData || [];
			return [...existingData, data];

		default: 
			return data
	}
}

export function sectionHandlerDelete(index, existingData) {
	return existingData.slice(0, index).concat(existingData.slice(index + 1));


}