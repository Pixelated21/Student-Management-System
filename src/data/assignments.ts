import { Assignment } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import { faker } from '@faker-js/faker';

export interface AssignmentResponseData {
	assignments: Assignment[];
}

const data: AssignmentResponseData = {
	assignments: [],
};

export const generateAssignments = (amount: number) => {
	for (let i = 0; i < amount; i++) {
		const assignment: Assignment = {
			_id: faker.datatype.uuid(),
			ass_id: faker.datatype.uuid(),
			ass_name: faker.name.fullName(),
			s_id: faker.datatype.uuid(),
			c_id: faker.datatype.uuid(),
			asst_id: faker.datatype.uuid(),
			marks: faker.datatype.number({ min: 0, max: 100 }),
			updated_at: faker.date.recent().toISOString(),
			created_at: faker.date.recent().toISOString(),
		};

		data.assignments.push(assignment);
	}

	return generateResponse(data, 'Assignments successfully retrieved');
};
