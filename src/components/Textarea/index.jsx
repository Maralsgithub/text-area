import React from 'react';
import styles from './index.module.css'

const Textarea = ({ setTextArr }) => {
  const [inputText, setInputText] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setTextArr((textArr) => [...textArr, inputText])
    setInputText('')
  }
  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <textarea
          cols="30"
          rows="10"
          name="text"
          value={inputText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">submit</button>
      </form>
      {/* <button onClick={handleClick} type='submit'>Click</button> */}
    </div>
  )
}

export default Textarea;