import Link from 'next/link'
import {
    FormContainer,
    FormDiv,
    GoogleLogin,
    HorizontalRule,
    KakaoLogin,
    LoginContainerDiv,
    LoginDiv,
    LoginSecondDiv,
    LoginSustainDiv,
    NaverLogin,
    SocialLoginServiceDiv,
    SubmitInput,
} from './Login.style'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { useState } from 'react'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        pw: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        e.preventDefault()

        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <LoginContainerDiv>
            <LoginDiv>
                <p>로그인</p>
            </LoginDiv>
            <FormDiv>
                <FormContainer onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input type='email' name='email' onChange={handleChange} placeholder='이메일을 입력하세요' />
                    <div>Password</div>
                    <input type='password' name='pw' onChange={handleChange} placeholder='비밀번호를 입력하세요' />
                    <LoginSustainDiv>
                        <input type='checkbox' />
                        <div>로그인 유지하기</div>
                    </LoginSustainDiv>
                    <SubmitInput type='submit' value='로그인' />
                </FormContainer>
            </FormDiv>
            <LoginSecondDiv>
                <Link href='/forgot'>
                    <button>비밀번호 찾기</button>
                </Link>
                <Link href='/signup'>
                    <button>회원가입</button>
                </Link>
            </LoginSecondDiv>
            <HorizontalRule />
            <SocialLoginServiceDiv>
                <GoogleLogin>
                    <FcGoogle size={20} />
                    <input type='button' value='Google 계정 로그인' />
                </GoogleLogin>
                <NaverLogin>
                    <SiNaver size={20} />
                    <input type='button' value='네이버 계정 로그인' />
                </NaverLogin>
                <KakaoLogin>
                    <RiKakaoTalkFill color='black' size={20} />
                    <input type='button' value='카카오 계정 로그인' />
                </KakaoLogin>
            </SocialLoginServiceDiv>
        </LoginContainerDiv>
    )
}

export default Login
