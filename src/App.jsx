import React from 'react'
import Circle from './components/Circle/Circle'
import Textarea from './components/Textarea'

function App() {
  const [textArr, setTextArr] = React.useState([])

  return (
    <div>
      <Textarea setTextArr={setTextArr} />
      {textArr?.map((circle, i) => (
        <Circle circle={circle} key={i} />
      ))}
    </div>
  )
}

export default App
