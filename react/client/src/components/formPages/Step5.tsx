import React from 'react';

const Step5: React.FC<StepProps> = ({ inputs, setInputs, goToPage }) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName==='clearRecordWhy') {
      setInputs({ ...inputs, clearRecordWhy:inputValue })
    } else if (inputName==='clearRecordHow') {
      setInputs({ ...inputs, clearRecordHow:inputValue })
    }
  }
  return (
    <div className="Step5">
      <p>Please finish this sentence: I want to clear my record because...</p>
      <input type="text" name="clearRecordWhy" placeholder="I am..." onChange={handleChange} />
      <p>How will clearing your record change your life or help you? (2 sentences maximum)</p>
      <input type="text" name="clearRecordHow" placeholder="Clearing my record will..." onChange={handleChange} />
      <button onClick={() => goToPage(9)}>BACK</button>
      <button onClick={() => goToPage(12)}>LOOKS GOOD</button>
    </div>
  )
}

export default Step5;