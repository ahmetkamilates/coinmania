const InputField = ({ formik, data }) => {
    const { label, name, type } = data;
  
    return (
      <div>
        <label>{label}</label>
        <input
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={name}
          type={type}
        />
  
        {formik.errors[name] && formik.touched[name] && (
          <span>{formik.errors[name]}</span>
        )}
      </div>
    );
  };
  
  export default InputField;