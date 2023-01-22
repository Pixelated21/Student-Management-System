import BreadCrumb from '@/components/Breadcrumb';
import Spacer from '@/components/Spacer';
import Statistic from '@/components/Statistics';
import Tabs from '@/components/Tabs';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';
import type { Course, ILink, IStatistic, ITab } from '@/typescript/interface';

// TODO: Change To Internal API
const getCourse = async (courseID: string) => {
	const res = await fetch(`http://127.0.0.1:8000/api/courses/${courseID}`);

	if (!res) {
		throw new Error('Failed To Fetch Department');
	}

	const respData = await res.json();
	return respData.data;
};

export default async function CourseIDLayout({
	params,
	children,
}: {
	params: {
		departmentID: string;
		courseID: string;
	};
	children: React.ReactNode;
}) {
	const { courseID } = params;
	const course: Course = await getCourse(courseID);

	// Dynamic UI Elements
	const links: ILink[] = [
		{ id: 1, title: 'Home', href: '/admin' },
		{ id: 2, title: 'Department', href: '/admin/departments' },
		{
			id: 3,
			title: `${
				course.relationships.department?.attributes?.name ?? 'UNDEFIEND'
			}`,
			href: `/admin/departments/${course.relationships.department?.id ?? ''}`,
		},
		{
			id: 4,
			title: `Courses`,
			href: `/admin/departments/${
				course.relationships.department?.id ?? ''
			}/courses`,
		},
		{
			id: 4,
			title: `${course?.attributes?.name ?? 'UNDEFIEND'}`,
			href: `/admin/departments/${
				course.relationships.department?.id ?? ''
			}/courses/${course?.id}`,
		},
	];

	const tabs: ITab[] = [
		{
			id: 1,
			title: 'Dashboard',
			href: `/admin/departments/${course.relationships.department?.id}/courses/${course?.id}`,
			isActive: true,
		},
		{
			id: 2,
			title: `Students`,
			href: `/admin/departments/${course.relationships.department?.id}/courses/${course?.id}/students`,
			isActive: false,
		},
		{
			id: 3,
			title: `Assignments`,
			href: `/admin/departments/${course.relationships.department?.id}/courses/${course?.id}/assignments`,
			isActive: false,
		},
		{
			id: 4,
			title: `Attendance`,
			href: `/admin/departments/${course.relationships.department?.id}/courses/${course?.id}/attendances`,
			isActive: false,
		},
	];

	const statistics: IStatistic[] = [
		{
			id: 1,
			title: 'Students',
			value: course?.relationships.students.length ?? 0,
		},
		{
			id: 2,
			title: 'Assignments',
			value: course.relationships.assignments.length ?? 0,
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
									{course?.attributes?.name ?? 'UNDEFIEND'}
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

			<main>{children}</main>
		</div>
	);
}
