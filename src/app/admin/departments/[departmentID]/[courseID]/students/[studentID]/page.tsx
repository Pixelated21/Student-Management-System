/* eslint-disable @next/next/no-img-element */
import Spacer from 'src/components/Spacer';
import type { Student } from 'src/typescript/interface';

const getStudent = async () => {
	const res = await fetch('http://127.0.0.1:3000/api/students');

	if (!res) {
		throw new Error('Faild To Fetch Students');
	}

	const respData = await res.json();

	console.log(respData);

	return respData.data;
};

export default async function DepartmentStudentPage({
	params,
}: {
	params: { studentID: string };
}) {
	const students: Student[] = await getStudent();

	return (
		<main>
			<section>
				<div className='w-full max-w-7xl  mx-auto'>
					<Spacer />

					<div className='flex justify-between items-center'>
						<div>
							<h1 className='font-semibold text-2xl text-gray-900'>Students</h1>
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

					<ul
						role='list'
						className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
						{students.map((student, idx) => (
							<li key={idx} className='group'>
								<div className='col-span-1 cursor-pointer flex flex-col text-center bg-white group-hover:bg-black duration-300  border divide-y divide-gray-200'>
									<div className='flex-1 flex flex-col p-8'>
										<img
											className='w-32 h-32 flex-shrink-0 mx-auto rounded-full'
											src={`https://avatar.oxro.io/avatar.svg?name=${student.attributes.name}`}
											alt=''
										/>
										<h3 className='mt-6 text-gray-900 group-hover:text-white duration-300 text-sm font-medium'>
											{student.attributes.name}
										</h3>
										<dl className='mt-1 flex-grow flex flex-col justify-between'>
											<dt className='sr-only'>Title</dt>
											<dd className='text-gray-500 text-sm font-medium'>
												{student.attributes.email}
											</dd>
											<dt className='sr-only'>Role</dt>
										</dl>
									</div>
								</div>
							</li>
						))}
					</ul>

					<Spacer />
				</div>
			</section>
		</main>
	);
}
