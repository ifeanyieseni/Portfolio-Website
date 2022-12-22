import React from 'react'
import data from './skillData'
const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done}%</h4>
        </div>
      </div>
    )
  }
  return (
    <>
      <section className='skill'>
        <div className='section'>
          <div className='heading'>
            <h3>WHY CHOOSE US</h3>
            <h1>Some of My Skills</h1>
          </div>

          <div className='content flex'>
            <div className='left topMargin'>
              <Progress done='70' title='HTML' />
              <Progress done='80' title='CSS' />
              <Progress done='90' title='JAVASCRIPT' />
              <Progress done='70' title='REACT JS' />
            </div>

            <div className='right mtop'>
              {data.map((info) => {
                const { title, para, para1 } = info
                return (
                  <>
                    <h1>{title}</h1>
                    <p>{para}</p>
                    <p>{para1}</p>
                    <button className='btn-primary'>Hire Me</button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
