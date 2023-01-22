import Link from 'next/link';
import { ILink } from '@/typescript/interface';

export default function BreadCrumb({ links }: { links: ILink[] }) {
	const end = links.length - 1;
	return (
		<ul className='flex items-center text-gray-500 text-sm font-medium'>
			{links.map((link, idx) => {
				return (
					<li key={idx} className='flex items-center gap-x-2 mr-2'>
						{link?.href ? (
							<Link href={link.href}>
								<span>{link.title}</span>
							</Link>
						) : (
							<span>{link.title}</span>
						)}
						{idx != end && (
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									className='w-3 h-3'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 4.5l7.5 7.5-7.5 7.5'
									/>
								</svg>
							</span>
						)}
					</li>
				);
			})}
		</ul>
	);
}
