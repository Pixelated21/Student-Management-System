export const getStudents = async () => {
	const res = await fetch('http://127.0.0.1:8000/api/students', {
		cache: 'no-store',
	});

	const respData = await res.json();
	return respData.data;
};
