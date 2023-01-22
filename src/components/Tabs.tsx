'use client';
import { ITab } from '@/typescript/interface';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';

export default function Tabs({ data }: { data: ITab[] }) {
	const segment = useSelectedLayoutSegment();

	function getCurrentSegment(href: string, limit: number, target: number) {
		const segments = href.split('/', limit);
		return segments[target];
	}

	return (
		<ul className='flex gap-x-8 -m-1'>
			{data.map((tab, idx) => (
				<Link href={tab.href} key={idx}>
					<div className='flex flex-col gap-y-4'>
						<span
							className={`font-medium text-sm  ${
								getCurrentSegment(tab.href, 4, 4) === segment
									? 'text-white'
									: 'text-gray-500'
							}`}>
							{tab.title}
						</span>

						{tab.isActive ? (
							<span className='bg-white h-2 w-full rounded-t'></span>
						) : null}

						{/* TODO: Make dynamic */}

						{/* {getCurrentSegment(tab.href, 5, 4) === segment ? (
							<span className='bg-white h-2 w-full rounded-t'></span>
						) : getCurrentSegment(tab.href, 5, 4) === undefined ? (
							<span className='bg-white h-2 w-full rounded-t'></span>
						) : null} */}
					</div>
				</Link>
			))}
		</ul>
	);
}
