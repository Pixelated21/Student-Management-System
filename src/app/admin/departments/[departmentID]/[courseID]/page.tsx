import BreadCrumb from '@/components/Breadcrumb';
import Spacer from '@/components/Spacer';
import Statistic from '@/components/Statistics';
import Link from 'next/link';
import type { ILink, IStatistic, Department } from '@/typescript/interface';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

export default async function DepartmentPage() {
	const getDepartments = async () => {
		const res = await fetch('http://127.0.0.1:3000/api/departments');

		if (!res) {
			throw new Error('Failed To Fetch Department');
		}

		const respData = await res.json();
		return respData.data;
	};

	const departments: Department[] = await getDepartments();

	let filteredDepartments = departments.splice(0, 5);

	return (
		<div className=''>
			<section>
				<div className='w-full max-w-7xl  mx-auto '>
					<Spacer />

					<div className='flex justify-between items-center'>
						<div>
							<h1 className='font-semibold text-2xl text-gray-900'>
								{/* Department */}
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
					<div className='grid grid-cols-3 gap-5'>
						{filteredDepartments &&
							filteredDepartments.map(department => (
								<Link
									href={`/admin/departments/${department.id}`}
									key={department.id}
									className='group'>
									<div className='h-40 cursor-pointer bg-white border relative group-hover:bg-black duration-300'>
										<p className='top-5 left-5 absolute group-hover:text-white duration-300 font-medium text-2xl'>
											{department.attributes.name}
										</p>
										<span className='absolute top-5 right-5'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-6 h-6 text-gray-400 group-hover:text-white duration-300'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
												/>
											</svg>
										</span>
									</div>
								</Link>
							))}
					</div>
				</div>
			</section>
			<Spacer />
		</div>
	);
}
