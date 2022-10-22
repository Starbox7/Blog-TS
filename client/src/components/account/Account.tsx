import "./account.css"

function Account() {

    return (
        <div className="account">
            <div className="accountWrapper">
                <form className="accountForm">
                    <div className="accountFormPP">
                        <label htmlFor="accountPP">
                            <img src="https://picsum.photos/100" />
                        </label>
                        <input type="file" id="accountPP" style={{ display: "none" }} accept=".jpg, .jpeg, .png" />
                    </div>
                    <div className="accountFormGroup">
                        <input type="text" placeholder="username" required />
                        <textarea placeholder="introduce" style={{ width: "80%" }} />
                        <div className="accountFormButton">
                            <button className="accountSubmit" type="submit">Update</button>
                            <button className="accountDelete">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account