import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import RenderIfVisible from 'react-render-if-visible'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <RenderIfVisible>
            <BallCanvas icon={technology.icon} />

          </RenderIfVisible>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')