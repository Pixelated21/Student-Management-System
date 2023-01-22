import { Student, Course } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import { faker } from '@faker-js/faker';

export interface StudentResponseData {
	students: Student[];
}

const data: StudentResponseData = {
	students: [],
};

export const generateStudents = (amount: number) => {
	for (let i = 0; i < amount; i++) {
		const student: Student = {
			id: faker.datatype.uuid(),
			attributes: {
				name: faker.name.fullName(),
				section: faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
				email: faker.internet.email(),
				course: faker.datatype.uuid(),
				mobile: faker.phone.number('+1 876 ### ####'),
				address: faker.address.streetAddress(),
				status: faker.datatype.number({ min: 0, max: 2 }),
				updated_at: faker.date.recent().getDate().toString(),
				created_at: faker.date.recent().getDate().toString(),
			},
			relationships: {
				course: null,
				attendances: null,
				assignments: null,
			},
		};

		data.students.push(student);
	}

	return generateResponse(data, 'Students successfully retrieved');
};
