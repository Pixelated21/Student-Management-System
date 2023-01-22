import { Student } from '@/typescript/interface';
import type { NextApiRequest, NextApiResponse } from 'next';

const getStudent = async (
	studentID: string | string[] | undefined,
): Promise<Student | undefined> => {
	const res = await fetch('http://127.0.0.1:3000/api/students');
	const students: Student[] = await res.json();
	return students.find(student => student._id == studentID);
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { studentID } = req.query;
	try {
		const students = await getStudent(studentID);
		res.status(200).json(students);
	} catch {
		res.status(500).json('Error Fetching Students');
	}
}
