import Attendance from '@/components/Attendance';
import type { Student } from '@/typescript/interface';
import { getStudents } from '@/utils/studentsAPI';

export default async function ApplicationsPage({
	params,
}: {
	params: { status: string };
}) {
	const { status } = params;
	const students: Student[] = await getStudents();

	let filteredStudents = students;

	if (status) {
		filteredStudents = filteredStudents.filter(
			student => student.attributes.status.toString() === status,
		);
	}

	return <Attendance students={filteredStudents} status={status} />;
}
