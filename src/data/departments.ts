import { Department } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import { faker } from '@faker-js/faker';

export interface DepartmentsResponseData {
	departments: Department[];
}

export interface DepartmentResponseData {
	department: Department;
}

const data: DepartmentsResponseData = {
	departments: [],
};

export const generateDepartments = (amount: number) => {
	for (let i = 0; i < amount; i++) {
		const department: Department = {
			id: faker.datatype.uuid(),
			attributes: {
				name: faker.name.fullName(),
				updated_at: faker.date.recent().toISOString(),
				created_at: faker.date.recent().toISOString(),
			},
			relationships: {
				courses: [],
			},
		};

		data.departments.push(department);
	}

	return generateResponse(data, 'Departments successfully retrieved');
};
