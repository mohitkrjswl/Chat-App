const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`}>
          <span className="label-text text-gray-700">Male</span>
          <input type="checkbox" className="checkbox border-slate-800"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange("male")}

          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? "selected" : ""}`}>
          <span className="label-text text-gray-700">Female</span>
          <input type="checkbox" className="checkbox border-slate-800"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange("female")}

          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox;