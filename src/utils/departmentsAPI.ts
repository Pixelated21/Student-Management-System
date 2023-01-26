export const getDepartment = async (departmentID: string) => {
	const res = await fetch(
		`http://127.0.0.1:8000/api/departments/${departmentID}`,
		{
			cache: 'no-store',
		},
	);

	const respData = await res.json();
	return respData.data;
};

export const getDepartments = async () => {
	const res = await fetch('http://127.0.0.1:8000/api/departments', {
		cache: 'no-store',
	});

	const respData = await res.json();
	return respData.data;
};
