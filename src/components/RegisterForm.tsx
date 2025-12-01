import { ArrowLeft, Leaf, Loader2, Lock, LogIn, Mail, User } from 'lucide-react'
import React, { use, useState } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import googleImage from '@/assets/google.png'
import axios from 'axios'
import { em } from 'motion/react-client'
import { set } from 'mongoose'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type propType = {
    previousStep: (s: number) => void
}

function RegisterForm({ previousStep }: propType) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await axios.post("/api/auth/register", {
                name, email, password
            })
            console.log(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-white relative px-6 py-10'>
            <div className='absolute top-6 left-6 flex items-center gap-2 text-green-700 hover:text-green-800 cursor-pointer transition-colors' onClick={() => previousStep(1)}>
                <ArrowLeft className='w-5 h-5' />
                <span className='font-medium'>Back</span>
            </div>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: -10
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6
                }}
                className='text-4xl md:text-5xl font-extrabold text-green-700 mb-2'>
                Create Account
            </motion.h1>
            <p className='text-gray-600 flex items-center mb-8'>Join Snapcart today <Leaf className='w-5 h-5 text-green-600' /> </p>
            <motion.form
                onSubmit={handleRegister}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.6
                }}
                className='w-full max-w-sm flex flex-col gap-5'>
                <div className='relative'>
                    <User className='absolute left-3 top-3.5 h-5 w-5 text-gray-400' />
                    <input type="text" placeholder='Your Name' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                </div>
                <div className='relative'>
                    <Mail className='absolute left-3 top-3.5 h-5 w-5 text-gray-400' />
                    <input type="text" placeholder='Your Email' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </div>
                <div className='relative'>
                    <Lock className='absolute left-3 top-3.5 h-5 w-5 text-gray-400' />
                    <input type={showPassword ? "text" : "password"} placeholder='Your Password' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                {
                    (() => {
                        const formValidation = name !== '' && email !== '' && password !== ''
                        return <button disabled={!formValidation || loading} className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center
                        justify-center gap-2 ${formValidation ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
                            {loading ? <Loader2 className='w-5 h-5 animate-spin' /> : "Register"}

                        </button>
                    })()
                }
                <div className='flex items-center gap-2 text-stone-400 text-sm mt-2'>
                    <span className='flex-1 h-px bg-gray-200'></span>
                    OR
                    <span className='flex-1 h-px bg-gray-200'></span>
                </div>

                <button className='w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-50 py-3 rounded-xl text-gray-700 font-medium
                transition-all duration-200' onClick={()=>signIn("google")}>
                    <Image src={googleImage} width={20} height={20} alt='Google' />
                    Continue with Google
                </button>
            </motion.form>
            <p className='text-gray-600 mt-6 text-sm flex items-center gap-1 cursor-pointer' onClick={()=>router.push("/login")}>Already have an account ? <LogIn className='w-4 h-4' /> <span className='text-green-600'>Sign in</span></p>
        </div>
    )
}

export default RegisterForm
