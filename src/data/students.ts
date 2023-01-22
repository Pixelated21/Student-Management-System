import { Student } from '@/typescript/interface';
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
			_id: faker.datatype.uuid(),
			s_id: faker.datatype.uuid(),
			name: faker.name.fullName(),
			section: faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
			email_id: faker.internet.email(),
			profile_pic: faker.internet.avatar(),
			c_id: faker.datatype.uuid(),
			mobile: faker.phone.number('+1 876 ### ####'),
			address: faker.address.streetAddress(),
			status: faker.datatype.boolean(),
			updated_at: faker.date.recent().getDate().toString(),
			created_at: faker.date.recent().getDate().toString(),
		};

		data.students.push(student);
	}

	return generateResponse(data, 'Students successfully retrieved');
};
