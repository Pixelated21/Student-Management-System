import Spacer from '@/components/Spacer';
import { STUDENT_STATUS } from '@/typescript/enum';
import type { Student } from '@/typescript/interface';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const getStudents = async () => {
	const res = await fetch('http://127.0.0.1:3000/api/students');
	if (!res) {
		throw new Error('Failed To Fetch Students');
	}

	const respData = await res.json();
	return respData.data;
};

export default async function ApplicationsPage({
	searchParams,
}: {
	searchParams: { status: string; search: string };
}) {
	const { status } = searchParams;

	const students: Student[] = await getStudents();

	let filteredStudents = students.splice(0, 10);

	if (status) {
		filteredStudents = filteredStudents.filter(
			student => student.attributes.status.toString() === status,
		);
	}

	return (
		<main className='w-full max-w-7xl mx-auto '>
			<Spacer />
			<div className='flex justify-between items-center '>
				<h1 className='text-3xl font-medium font-serif'>Applications</h1>
				<div className='flex gap-x-2'>
					<button className='px-4 py-2 bg-black'>
						<p className='text-white font-medium text-sm'>Add Application</p>
					</button>

					<button className='bg-black px-4 py-2'>
						<p className='text-sm font-medium text-white'>Export</p>
					</button>
				</div>
			</div>
			<Spacer height='20px' />
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
				<div className='h-40 border relative'>
					<p className='text-xl font-medium absolute top-5 left-5'>Pending</p>
				</div>
				<div className='h-40 border relative'>
					<p className='text-xl font-medium absolute top-5 left-5'>Declined</p>
				</div>
			</div>
			<Spacer height='80px' />
			<div className='flex justify-between items-center'>
				<div className='flex gap-x-2'>
					<Link
						href={`admin/applications?status=${STUDENT_STATUS.PENDING}`}
						className={` px-4 py-2 ${
							status === STUDENT_STATUS.PENDING.toFixed()
								? 'bg-black'
								: 'border'
						}`}>
						<p
							className={`text-sm font-medium text-white ${
								status === STUDENT_STATUS.PENDING.toFixed()
									? 'text-white'
									: 'text-black'
							}`}>
							Pending
						</p>
					</Link>

					<Link
						href={`admin/applications?status=${STUDENT_STATUS.DECLINED}`}
						className={` px-4 py-2 ${
							status === STUDENT_STATUS.DECLINED.toFixed()
								? 'bg-black'
								: 'border'
						}`}>
						<p
							className={`text-sm font-medium text-white ${
								status === STUDENT_STATUS.DECLINED.toFixed()
									? 'text-white'
									: 'text-black'
							}`}>
							Declined
						</p>
					</Link>
				</div>
				<div className='flex gap-x-4 items-center'>
					<div className='relative flex items-center'>
						<input
							type='text'
							placeholder='Search'
							className='h-10 border-gray-300 placeholder:text-sm placeholder:pl-3 placeholder:font-medium'
						/>

						<MagnifyingGlassIcon className='left-2 h-4 w-4 absolute' />
					</div>
				</div>
			</div>
			<Spacer height='20px' />
			<div className='px-4 sm:px-6 lg:px-0'>
				<div className='-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-none'>
					<table className='min-w-full divide-y divide-gray-300'>
						<thead className='bg-gray-50'>
							<tr>
								<th
									scope='col'
									className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900  sm:pl-6'>
									Student
								</th>
								<th
									scope='col'
									className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'>
									Email
								</th>
								<th
									scope='col'
									className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell'>
									Mobile
								</th>
								<th
									scope='col'
									className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
									Status
								</th>
								<th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
									<span className='sr-only'>Edit</span>
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-200 bg-white'>
							{filteredStudents &&
								filteredStudents.map(student => (
									<tr key={student.id}>
										<td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6'>
											{student.attributes.name}
											<dl className='font-normal lg:hidden'>
												<dt className='sr-only'>Email</dt>
												<dd className='mt-1 truncate text-gray-700'>
													{student.attributes.email}
												</dd>
												<dt className='sr-only sm:hidden'>Email</dt>
												<dd className='mt-1 truncate text-gray-500 sm:hidden'>
													{student.attributes.mobile}
												</dd>
											</dl>
										</td>
										<td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>
											{student.attributes.email}
										</td>
										<td className='hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'>
											{student.attributes.mobile}
										</td>
										<td className='px-3 py-4 text-sm text-gray-500'>
											{student.attributes.status === STUDENT_STATUS.PENDING ? (
												<p className='text-yellow-600 font-medium'>Pending</p>
											) : (
												<p className='text-red-600 font-medium'>Declined</p>
											)}
										</td>
										<td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
											<a
												href='#'
												className='text-indigo-600 hover:text-indigo-900'>
												Edit
												<span className='sr-only'>
													, {student.attributes.name}
												</span>
											</a>
										</td>
									</tr>
								))}
							{filteredStudents.length === 0 && (
								<td colSpan={5} className=''>
									<div className='py-4 mx-auto flex justify-center'>
										<span className='text-gray-900 text-center font-medium text-sm'>
											No Students Available
										</span>
									</div>
								</td>
							)}
						</tbody>
					</table>
				</div>
			</div>
			{/* Pagination */}
			<Spacer />
		</main>
	);
}
