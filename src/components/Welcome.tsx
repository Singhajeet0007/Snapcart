'use client'
import React from 'react'
import { motion } from "motion/react"
import { ArrowRight, Bike, ShoppingBasket } from 'lucide-react'

type propType = {
    nextStep: (s: number) => void
}

function Welcome({ nextStep }: propType) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
            <motion.div
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
                className='flex items-center gap-3'
            >
                <ShoppingBasket className='w-10 h-10 text-green-600' />
                <h1 className='text-4xl md:text-5xl font-extrabold text-green-700'>Snapcart</h1>
            </motion.div>

            <motion.p
                initial={{
                    opacity: 0,
                    y: 10
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.3
                }}
                className='mt-4 text-lg md:text-xl text-gray-700 max-w-lg'
            >
                Your one-step destination for fresh groceries, organic produce and daily essentials delivered right to your doorstep.
            </motion.p>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.5
                }}
                className='mt-10 flex gap-10 items-center justify-center'
            >
                <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-md' />
                <Bike className='w-24 h-24 md:w-32 md:h-32 text-orange-500 drop-shadow-md' />

            </motion.div>
            <motion.button
                initial={{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y: 1
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.8
                }}
                className='inline-flex items-center gap-2 mt-10 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-2xl hover:bg-green-700 shadow-md transition-all'
                onClick={() => nextStep(2)}
            >
                Next
                <ArrowRight />
            </motion.button>
        </div>

    )
}

export default Welcome
