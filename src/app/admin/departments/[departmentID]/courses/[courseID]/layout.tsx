import BreadCrumb from '@/components/Breadcrumb';
import Spacer from '@/components/Spacer';
import Statistic from '@/components/Statistics';
import Tabs from '@/components/Tabs';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';
import type { Course, ILink, IStatistic, ITab } from '@/typescript/interface';
import { getCourse, getCourses } from '@/utils/coursesAPI';

export const dynamic = 'force-dynamic'

export default async function CourseIDLayout({
	params,
	children,
}: {
	params: {
		courseID: string;
	};
	children: React.ReactNode;
}) {
	const { courseID } = params;

	const course: Course = await getCourse(courseID);

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
			title: 'Type',
			value: course?.relationships?.course_type?.attributes?.name ?? 0,
		},
		{
			id: 2,
			title: 'Students',
			value: course?.relationships.students.length ?? 0,
		},
		{
			id: 3,
			title: 'Assignments',
			value: course.relationships.assignments.length ?? 0,
		},
	];

	return (
		<div>
			{/* Secondary Nav */}

			<main>{children}</main>
		</div>
	);
}
