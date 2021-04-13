import React from 'react';
import './signin-and-signup.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
	<div className='signin-and-signup'>
		<SignIn/>
		<SignUp/>
	</div>
);

export default SignInAndSignUpPage;