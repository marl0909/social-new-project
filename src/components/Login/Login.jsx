import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../../../../../../WebstormProjects/social-new-project/app/src/components/Login/Login.css'
// import closeForm from './../../../assets/img/close-menu.png'
// import logo from './../../../assets/img/logo.png'

export const Login = (props) => {
    const {register, handleSubmit, watch, formState: {errors, isValid}, reset} = useForm({
        mode: "onBlur",
    });
    const onSubmit = () => reset();
    // const [isCloseOverlay, closeOverlay] = useState(false)

    return (
            <div className={'form-wrapper'}>
                <img className={'form-wrapper__logo'} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
                <div className={'form-content'}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register('login', {
                            required: 'This field must be filled!',
                            maxLength: {
                                value: 30,
                                message: 'Maximum 30 characters!',
                            }
                        })} placeholder={'Login'}/>
                        <div style={{height: 26}}>
                            {errors?.login && <span className={'text-error'}>{errors?.login?.message}</span>}
                        </div>
                        <input {...register('email', {
                            required: 'This field must be filled!',
                            pattern: {
                                value: /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
                                message: 'Email is not correct!'
                            },
                        })} placeholder={'Email'}/>
                        <div style={{height: 26}}>
                            {errors?.email &&  <span className={'text-error'}>{errors?.email?.message}</span>}
                        </div>
                        <button className={'login-btn'} disabled={!isValid}>Log In</button>
                    </form>
                </div>
            </div>
    )
}