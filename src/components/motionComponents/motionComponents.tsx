import * as React from 'react'
import {motion, isValidMotionProp} from 'framer-motion'
import {
  SimpleGrid,
  GridProps,
  forwardRef,
  BoxProps,
  Box,
} from '@chakra-ui/react'

export const MotionSimpleGrid = motion.custom(
  forwardRef<GridProps, 'div'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <SimpleGrid ref={ref} {...chakraProps} />
  })
)

export const MotionBox = motion.custom(
  forwardRef<BoxProps, 'div'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)
