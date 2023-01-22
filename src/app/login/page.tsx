'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			// call the login function from auth.js and pass in the email and password
			const res = await fetch('http://127.0.0.1::8000/api/login');
			const data = await res.json();

			localStorage.setItem('token', data.token);

			// Router.push('/dashboard');
		} catch (err) {
			console.log(err);
			// setError(err.response.data.message);
		}
	};

	return (
		<section className='bg-white h-screen'>
			<div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
				<div className='relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-20 bg-gray-50 sm:px-6 lg:px-8'>
					<div className='absolute inset-0'>
						<svg
							width='127'
							height='127'
							className='h-10 w-10 absolute top-5 left-5 '
							viewBox='0 0 127 127'
							fill='white'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M127 111.944C127 115.481 124.95 116.334 122.465 113.83L88.0829 79.4453C85.3649 76.4 83.7655 72.5194 83.5481 68.4433V6.43977C83.5553 4.73404 84.2361 3.10022 85.4422 1.89408C86.6482 0.68793 88.2819 0.00716203 89.9875 0H120.515C122.223 0.00477402 123.859 0.684462 125.067 1.89087C126.275 3.09727 126.957 4.73247 126.964 6.43977L127 111.944ZM13.1778 4.55317C10.6746 2.04981 11.5181 0.0181026 15.0643 0.0181026H64.9012C66.6075 0.0228894 68.2426 0.702918 69.4492 1.90958C70.6558 3.11624 71.3358 4.75146 71.3406 6.45793V56.3436C71.3406 59.89 69.2909 60.7336 66.8058 58.2303L13.1778 4.55317ZM113.849 122.465C116.352 124.968 115.509 127 111.963 127H62.1261C60.4197 126.995 58.7846 126.315 57.578 125.109C56.3715 123.902 55.6914 122.267 55.6866 120.56V70.6745C55.6866 67.1371 57.7363 66.2846 60.2214 68.7879L113.849 122.465ZM0.036092 15.0836C0.036092 11.5372 2.07673 10.6937 4.57084 13.197L38.9535 47.582C41.6726 50.623 43.2724 54.5011 43.4882 58.5749V120.56C43.4834 122.267 42.8034 123.902 41.5968 125.109C40.3902 126.315 38.7551 126.995 37.0488 127H6.43921C4.73213 126.998 3.09561 126.318 1.88852 125.111C0.681428 123.904 0.00239928 122.267 0 120.56L0.036092 15.0836Z'
								fill='#131836'
							/>
						</svg>
						<img
							className='object-cover object-top w-full h-full'
							src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
							alt=''
						/>
					</div>
					<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

					<div className='relative'>
						<div className='w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl'>
							{/* <h3 className='text-4xl font-bold text-white'>
								Join 35k+ web professionals & <br className='hidden xl:block' />
								build your website
							</h3>
							<ul className='grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4'>
								<li className='flex items-center space-x-3'>
									<div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
										<svg
											className='w-3.5 h-3.5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'>
											<path
												fill-rule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clip-rule='evenodd'></path>
										</svg>
									</div>
									<span className='text-lg font-medium text-white'>

										Commercial License
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
										<svg
											className='w-3.5 h-3.5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'>
											<path
												fill-rule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clip-rule='evenodd'></path>
										</svg>
									</div>
									<span className='text-lg font-medium text-white'>

										Unlimited Exports
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
										<svg
											className='w-3.5 h-3.5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'>
											<path
												fill-rule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clip-rule='evenodd'></path>
										</svg>
									</div>
									<span className='text-lg font-medium text-white'>

										120+ Coded Blocks
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
										<svg
											className='w-3.5 h-3.5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'>
											<path
												fill-rule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clip-rule='evenodd'></path>
										</svg>
									</div>
									<span className='text-lg font-medium text-white'>

										Design Files Included
									</span>
								</li>
							</ul> */}
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-14'>
					<div className='xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto'>
						<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
							Sign in to Nimble
						</h2>
						{/* <p className='mt-2 text-base text-gray-600'>
							Are you a student?
							<a
								href='#'
								title=''
								className='font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline'>
								{' '}
								Apply Now
							</a>
						</p> */}

						<form onSubmit={handleSubmit} className='mt-8'>
							<div className='space-y-5'>
								<div>
									<label
										htmlFor=''
										className='text-base font-medium text-gray-900'>
										Email address
									</label>
									<div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
										<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
											<svg
												className='w-5 h-5'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
												/>
											</svg>
										</div>

										<input
											onChange={e => setEmail(e.target.value)}
											type='email'
											value={email}
											name=''
											id=''
											placeholder='Enter email to get started'
											className='block w-full py-4 h-14 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
										/>
									</div>
								</div>

								<div>
									<div className='flex items-center justify-between'>
										<label
											htmlFor=''
											className='text-base font-medium text-gray-900'>
											Password
										</label>

										{/* <a
											href='#'
											title=''
											className='text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline'>

											Forgot password?
										</a> */}
									</div>
									<div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
										<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
											<svg
												className='w-5 h-5'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
												/>
											</svg>
										</div>

										<input
											onChange={e => setPassword(e.target.value)}
											type='password'
											value={password}
											name=''
											id=''
											placeholder='Enter your password'
											className='block w-full py-4 h-14 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
										/>
									</div>
								</div>

								<div>
									<button
										type='submit'
										className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-300 border border-transparent rounded-md bg-black focus:outline-none hover:opacity-80 focus:opacity-80'>
										Log in
									</button>
								</div>
							</div>
						</form>

						{/* <div className='mt-3 space-y-3'>
							<button
								type='button'
								className='relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none'>
								<div className='absolute inset-y-0 left-0 p-4'>
									<svg
										className='w-6 h-6 text-rose-500'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
									</svg>
								</div>
								Sign in with Google
							</button>

							<button
								type='button'
								className='relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none'>
								<div className='absolute inset-y-0 left-0 p-4'>
									<svg
										className='w-6 h-6 text-[#2563EB]'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
									</svg>
								</div>
								Sign in with Facebook
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
