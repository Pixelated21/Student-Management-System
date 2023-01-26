import BreadCrumb from '@/components/Breadcrumb';
import Statistic from '@/components/Statistics';
import Spacer from '@/components/Spacer';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { IStatistic } from '@/typescript/interface';

export default async function AdminPage() {
	const statistics: IStatistic[] = [];

	return (
		<main className=''>
			{/* Seconary Nav */}
			<section className='bg-black h-64 '>
				<div className='max-w-7xl h-full  mx-auto'>
					<div className='w-full flex h-full pt-5'>
						<div className='flex flex-col justify-between w-5/6 '>
							<div>
								<Spacer height='70px' />
								<p className='text-5xl text-white'>
									<span className='font-light'>Welcome Back, </span>
									<span className='font-medium'>Pixelated</span>
								</p>
								<Spacer />
							</div>
						</div>
						<div className='h-full w-1/6 pb-5'>
							<div className='flex flex-col h-full justify-between '>
								<div>
									{statistics?.length > 0 && <Statistic data={statistics} />}
								</div>

								<div className='flex justify-end'>
									<Cog8ToothIcon className='h-7 w-7 text-gray-500 hover:text-gray-200 duration-300 cursor-pointer hover:animate-[spin_5s_ease-in-out_infinite]' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto h-full '>
				<div className='flex'>
					<div className='w-1/2'>
						<div className='border h-[450px]'></div>
						<div className='flex'>
							<div className='border w-1/2 h-[200px]'></div>
							<div className='border w-1/2 h-[200px]'></div>
						</div>
					</div>
					<div className='w-1/2 flex'>
						<div className=' flex-col w-1/2'>
							<div className='border h-1/2'></div>
							<div className='border h-1/2'></div>
						</div>
						<div className=' w-1/2'>
							<div className='h-4/6 border'></div>
							<div className='h-2/6 border'></div>
						</div>
					</div>
				</div>
			</section>

			<Spacer />
		</main>
	);
}
