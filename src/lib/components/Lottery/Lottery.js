import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Lottery = ({ data }) => {
  const [elem] = useState(() => data.map(v => <div key={v} style={{ width: '100px', textAlign: 'center', background: 'lightgreen' }}>{v}</div>))
  const elemLength = data.length
  const [index, setIndex] = useState(0)
  const [stop, setStop] = useState(true)

  useEffect(() => {
    if (stop) return undefined
    const randomValue = Math.floor(Math.random() * elemLength)
    const interval = setInterval(() => {
      setIndex(randomValue !== index ? randomValue : randomValue === 0 ? randomValue + 1 : randomValue - 1)
    }, 100)

    return () => clearInterval(interval)
  }, [index, stop])

  return (
    <div>
      <div style={{ width: '100px', display: 'flex', alignItems: 'center' }}>
        {elem[index]}
      </div>
      <button type="button" onClick={() => setStop(!stop)}>
        {stop ? 'start' : 'stop'}
      </button>
    </div>
  )
}

Lottery.propTypes = {
  data: PropTypes.array,
}

Lottery.defaultProps = {
  data: [],
}

export default Lottery
