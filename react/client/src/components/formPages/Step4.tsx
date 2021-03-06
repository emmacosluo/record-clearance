import React from 'react';

const Step4: React.FC<StepProps> = ({ inputs, setInputs, goToPage}) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputName=e.currentTarget.name;
    const inputValue=e.currentTarget.value;
    if (inputName==='goals') {
      setInputs({ ...inputs, goals: inputValue })
    } else if (inputName==='goalsHow') {
      setInputs({ ...inputs, goalsHow: inputValue })
    }
  }
  return (
    <div className="Step4">
      <p>Please describe what goals you are working towards acheiving right now. (2 sentences maximum)</p>
      <input type="text" name="goals" placeholder="I am working towards..." onChange={handleChange}/>
      <p>How are you working towards acheiving these goals? (2 sentences maximum)</p>
      <input type="text" name="goalsHow" placeholder="I have been..." onChange={handleChange}/>
      <button onClick={() => goToPage(7)}>BACK</button>
      <button onClick={() => goToPage(10)}>LOOKS GOOD</button>
    </div>
  )
}

export default Step4;