import Spacer from '@/components/Spacer';
import React from 'react';

export default async function CourseIDPage({
	params,
}: {
	params: {
		departmentID: string;
		courseID: string;
	};
}) {
	return (
		<div>
			<main>
				<section>
					<div className='w-full max-w-7xl  mx-auto '>
						<Spacer />

						<div className='flex justify-between items-center'>
							<div>
								<h1 className='font-semibold text-2xl text-gray-900'>
									Dashboard
								</h1>
								<h3 className='text-sm  text-gray-700'>
									{/* All Available Departments */}
								</h3>
							</div>
							<div className='flex gap-x-4'>
								{/* <input
									type='text'
									placeholder='Search'
									className='h-10 placeholder:text-sm placeholder:font-medium'
								/>
								<button className='bg-black px-4'>
									<p className='text-sm font-medium text-white'>Export</p>
								</button> */}
							</div>
						</div>

						<Spacer />
					</div>
				</section>
			</main>
		</div>
	);
}
