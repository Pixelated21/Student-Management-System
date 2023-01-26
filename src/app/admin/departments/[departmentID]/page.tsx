import BreadCrumb from '@/components/Breadcrumb';
import Spacer from '@/components/Spacer';
import Statistic from '@/components/Statistics';
import Tabs from '@/components/Tabs';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';
import type {
	Department,
	ILink,
	IStatistic,
	ITab,
} from '@/typescript/interface';
import { getDepartment } from '@/utils/departmentsAPI';

export const dynamic = 'force-dynamic';

export default async function DepartmentIdPage({
	params,
}: {
	params: {
		departmentID: string;
	};
}) {
	const { departmentID } = params;
	const department: Department = await getDepartment(departmentID);

	const links: ILink[] = [
		{ id: 1, title: 'Home', href: '/admin' },
		{ id: 2, title: 'Department', href: '/admin/departments' },
		{
			id: 3,
			title: `${department?.attributes?.name ?? 'UNDEFIEND'}`,
			href: `/admin/departments/${department?.id ?? ''}`,
		},
	];

	const tabs: ITab[] = [
		{
			id: 1,
			title: 'Dashboard',
			href: `/admin/departments/${department?.id}`,
			isActive: true,
		},
		{
			id: 2,
			title: `Courses`,
			href: `/admin/departments/${department?.id}/courses`,
			isActive: false,
		},
	];

	const statistics: IStatistic[] = [
		{
			id: 1,
			title: 'Courses',
			value: department?.relationships?.courses?.length ?? 0,
		},
	];

	return (
		<div>
			{/* Secondary Nav */}
			<section className='bg-black h-64 '>
				<div className='max-w-7xl h-full  mx-auto'>
					<div className='w-full flex h-full pt-5'>
						<div className='flex flex-col justify-between w-5/6 '>
							<BreadCrumb links={links} />

							<div>
								<Spacer height='20px' />
								<p className='text-5xl font-medium text-white'>
									{department?.attributes?.name ?? 'UNDEFIEND'}
								</p>
							</div>

							{tabs?.length > 0 && <Tabs data={tabs} />}
						</div>
						<div className='h-full w-1/6 pb-5'>
							<div className='flex flex-col h-full justify-between '>
								{statistics?.length > 0 && <Statistic data={statistics} />}

								<div className='flex justify-end'>
									<Cog8ToothIcon className='h-7 w-7 text-gray-500 hover:text-gray-200 duration-300 cursor-pointer hover:animate-[spin_5s_ease-in-out_infinite]' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

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

						{/* Table */}
					</div>
				</section>
			</main>
		</div>
	);
}
