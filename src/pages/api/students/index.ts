import { generateStudents, StudentResponseData } from '@/data/students';
import type { Student, CustomResponse } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

const generatedStudents = generateStudents(20);

const getStudents = async (): Promise<CustomResponse<StudentResponseData>> => {
	try {
		const res = await fetch('http://127.0.0.1:8000/api/students');
		return res.json();
	} catch (err) {
		return generatedStudents;
	}
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CustomResponse<StudentResponseData | []> | string>,
) {
	try {
		const students = await getStudents();
		res.status(200).json(students);
	} catch (err) {
		res.status(500).json(generateResponse([], 'Unable to fetch Students'));
	}
}
