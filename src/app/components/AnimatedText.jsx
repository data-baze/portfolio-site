import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <TypeAnimation
    sequence={[
      "Data",
      1000, 
      "Web Developer",
      1000,
      "Software Developer",
      1000,
      "Superhero",
      1000
    ]}
    wrapper="div"
    speed={50}
    repeat={Infinity}
  />
  )
}

export default AnimatedText;