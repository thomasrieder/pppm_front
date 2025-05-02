
export const SmallForm = ({ formInfo }) => {
  return (
    <div className="SmallFormContainer">
        <h2>{formInfo.formName}</h2>
        {formInfo.fields.map((field, e) => (
            <input
                key={e}
                type={field.inputType} 
                onChange={e => field.changeValueCallback(e.target.value)}
                placeholder={field.placeholder} 
                className="SmallFormInput"/>
        ))}
        <button className="SmallFormButton" onClick={formInfo.formCallBack}>{formInfo.buttonTxt}</button>
    </div>
  );
}