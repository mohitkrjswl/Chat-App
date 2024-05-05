const GenderCheckBox = () => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-gray-700">Male</span>
          <input type="checkbox" className="checkbox border-slate-800" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-gray-700">Female</span>
          <input type="checkbox" className="checkbox border-slate-800" />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox;