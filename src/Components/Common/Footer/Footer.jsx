import React from 'react'
import { motion } from 'framer-motion'
import { popOutVariants } from '../../../Utils/motionVariants'
import { info } from '../../../Utils/constants'

const Footer = () => {
  return (
    <motion.div className='md:fixed bottom-0 w-full text-white text-center py-2 z-10'
    variants={popOutVariants}
    initial="hidden"
    animate="visible"
    >
      <div>
      ©️ {info.copyrigthDate} {info.name}</div>
    </motion.div>
  )
}

export default Footer