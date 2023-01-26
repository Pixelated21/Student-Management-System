export const getCourse = async (courseID: string) => {
	const res = await fetch(`http://127.0.0.1:8000/api/courses/${courseID}`, {
		cache: 'no-store'
	});

	const respData = await res.json();
	return respData.data;
};

export const getCourses = async () => {
	const res = await fetch(`http://127.0.0.1:8000/api/courses`, {
		cache: 'no-store'
	});

	const respData = await res.json();
	return respData.data;
};
