import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { Link, redirect } from 'react-router'
import { loginWithGoogle, loginAsGuest } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

export async function clientLoader() {
	try {
		const user = await account.get();

		if (user.$id) return redirect('/');
	} catch (e) {
		console.log('Error fetching user', e)
	}
}

const SignIn = () => {
	return (
		<main className='auth'>
			<section className='size-full glassmorphism flex-center px-6'>
				<div className='sign-in-card'>
					<header className='header'>
						<Link to="/">
							<img 
								src='/assets/icons/logo.svg'
								alt='logo'
								className='size-[30px]'
							/>
						</Link>
						<h1 className='p-28-bold text-dark-100'>Travel Agency</h1>
					</header>

					<article>
						<h2 className='p-28-semibold text-dark-100 text-center'>Start Your Travel Journey</h2>
						<p className='p-18-regular text-center text-gray-100 !leading-7'>Sign in with Google to manage destinations, itineraries, and user activity with ease.</p>
					</article>

					<ButtonComponent
						type='button'
						iconCss='e-search-icon'
						className='button-class !h-11 !w-full'
						onClick={loginWithGoogle}
					>
						<img 
							src='/assets/icons/google.svg'
							className='size-5'
							alt='google'
						/>
						<span className='p-18-semibold text-white'>Sign in with Google</span>
					</ButtonComponent>

					<div className='flex items-center gap-4 my-4'>
						<div className='flex-1 h-px bg-gray-200'></div>
						<span className='p-16-regular text-gray-100'>or</span>
						<div className='flex-1 h-px bg-gray-200'></div>
					</div>

					<ButtonComponent
						type='button'
						className='button-class !h-11 !w-full !bg-gray-100 !text-dark-100'
						onClick={loginAsGuest}
					>
						<span className='p-18-semibold text-white'>Sign in as Guest</span>
					</ButtonComponent>
				</div>
			</section>
		</main>
	)
}

export default SignIn