import { IStatistic } from '@/typescript/interface';

export default function Statistic({ data }: { data: IStatistic[] }) {
	return (
		<ul className='flex flex-col gap-y-1'>
			{data.map((statistic, idx) => (
				<li key={idx}>
					<div className='flex justify-between'>
						<span>
							<p className='text-gray-500 text-sm font-medium'>
								{statistic.title}
							</p>
						</span>
						<span>
							<p className='text-gray-300 text-sm font-medium'>
								{statistic.value}
							</p>
						</span>
					</div>
				</li>
			))}
		</ul>
	);
}
