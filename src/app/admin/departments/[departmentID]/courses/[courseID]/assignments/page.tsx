import Spacer from 'src/components/Spacer';
import { Assignment, Course } from '@/typescript/interface';
import { getCourse, getCourses } from '@/utils/coursesAPI';

export default async function AssignmentsPage({
	params,
}: {
	params: { courseID: string };
}) {
	const { courseID } = params;
	const course: Course = await getCourse(courseID);
	const assignments = course.relationships.assignments;

	const filteredAssignments = assignments;
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
											Name
										</th>
										<th
											scope='col'
											className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell'>
											Type
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
									{filteredAssignments &&
										filteredAssignments.map(assignment => (
											<tr key={assignment.id}>
												<td className='w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6'>
													{assignment.attributes.name}
													<dl className='font-normal lg:hidden'>
														<dt className='sr-only sm:hidden'>Mark</dt>
														<dd className='mt-1 truncate text-gray-500 sm:hidden'>
															{assignment.attributes.mark}
														</dd>
													</dl>
												</td>
												<td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>
													{assignment.relationships.type.attributes.name}
												</td>
												<td className='hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'>
													{assignment.attributes.mark}
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
									{filteredAssignments.length === 0 && (
										<tr>
											<td
												colSpan={3}
												className='py-4 pl-4 pr-3 bg-gray-200 text-sm text-center font-medium text-gray-900 sm:pl-6'>
												No Assignments found
											</td>
										</tr>
									)}
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
