import "./form.css"

function Form() {
    return(
        <div className="form">
            <div className="formPreview">
                <label htmlFor="fileInput" className="formWriteGroupLabel">
                    <i className="fa-solid fa-image"></i>
                </label>
            </div>
            <form className="formWrite">
                <div className="formWriteGroup">
                    <input id="fileInput" type="file" multiple={true} accept=".jpg, .jpeg, .png"
                    style={{display: "none"}} required />
                    <textarea placeholder="Tell your story" />
                </div>
                <div className="formWriteButton">
                    <button className="formWriteGroupSubmit" type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default Form