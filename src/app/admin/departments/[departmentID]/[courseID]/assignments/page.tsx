import Spacer from 'src/components/Spacer';
import { Assignment } from '@/typescript/interface';

const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
];

const getCourseAssignments = async (courseID: string) => {
	console.log(process.env.INTERNAL_API_URL);

	try {
		const res = await fetch(
			process.env.INTERNAL_API_URL + `/assignments/${courseID}`,
		);
		if (!res) {
			// throw new Error('Faild To Fetch Assignments');
		}
		const respData = await res.json();
		return respData.data.assignments;
	} catch {}
};

export default async function DepartmentCourseAssignmentsPage({ params }) {
	const assignments: Assignment[] = await getCourseAssignments(
		'96bd94f6-0552-39be-9b8a-4daccb7ed630',
	);
	console.log(assignments);
	console.log(params);
	return (
		<main>
			<section>
				<div className='w-full max-w-7xl  mx-auto '>
					<Spacer />

					<div className='flex justify-between items-center'>
						<div>
							<h1 className='font-semibold text-2xl text-gray-900'>
								Assignments
							</h1>
							<h3 className='text-sm  text-gray-700'>
								{/* All Available Departments */}
							</h3>
						</div>
						<div className='flex gap-x-4'>
							<input
								type='text'
								placeholder='Search'
								className='h-10 placeholder:text-sm placeholder:font-medium'
							/>
							<button className='bg-black px-4'>
								<p className='text-sm font-medium text-white'>Export</p>
							</button>
						</div>
					</div>

					<Spacer />

					{/* Table */}
					<div className='px-4 sm:px-6 lg:px-0'>
						<div className='-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-none'>
							<table className='min-w-full divide-y divide-gray-300'>
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
											Assignment Name
										</th>
										<th
											scope='col'
											className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'>
											Marks
										</th>
										<th
											scope='col'
											className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
											<span className='sr-only'>Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-200 bg-white'>
									{assignments &&
										assignments.map(assignment => (
											<tr key={assignment._id}>
												<td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6'>
													{assignment.ass_name}
													<dl className='font-normal lg:hidden'>
														<dt className='sr-only sm:hidden'>Marks</dt>
														<dd className='mt-1 truncate text-gray-500 sm:hidden'>
															{assignment.marks}
														</dd>
													</dl>
												</td>
												<td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>
													{assignment.marks}
												</td>
												<td className='py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
													<a
														href='#'
														className='text-indigo-600 hover:text-indigo-900'>
														Edit
														<span className='sr-only'>Edit</span>
													</a>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
			<Spacer />
		</main>
	);
}
