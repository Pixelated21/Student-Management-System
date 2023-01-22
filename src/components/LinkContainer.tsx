'use client';

import { ILink } from '@/typescript/interface';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function LinkContainer({ data }: { data: ILink[] }) {
	const segment = useSelectedLayoutSegment();

	function getCurrentSegment(href: string, limit: number, target: number) {
		const segments = href.split('/', limit);
		return segments[target];
	}

	return (
		<div className='flex items-center text-sm  gap-x-10'>
			{data.map((link, idx) => (
				<Link
					key={idx}
					href={link.href}
					className={`${
						getCurrentSegment(link.href, 3, 2) === segment
							? 'text-gray-900 font-semibold'
							: 'text-gray-500 font-medium'
					}`}>
					<>{link.title}</>
				</Link>
			))}
		</div>
	);
}
