import axios from "axios"
import React, { useContext, useState } from "react"
import { LoginContext } from "../../context/LoginContext"
import { PF } from "../../settings"
import "./account.css"

function Account() {
    const {state, dispatch} = useContext(LoginContext)
    const [username, setUsername] = useState<string>(state.user.username)
    const [intro, setIntro] = useState<string>(state.user.intro)
    const [file, setFile] = useState<FileList | null>()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: "UPDATE_START"})
        const updateUser = {
            _id: state.user._id,
            username: username,
            intro: intro,
            profilePic: "",
        }
        if(file){
            const data = new FormData()
            const filename = Date.now() + file[0].name
            data.append("name", filename)
            data.append("file", file[0])
            updateUser.profilePic = filename
            try {
                await axios.post("/api/upload", data)
            } catch (err: unknown) {
                console.log(err)
            }
        }else if(state.user.profilePic){
            updateUser.profilePic = state.user.profilePic
        }
        try{
            const res = await axios.put(`/api/user/${state.user._id}`, updateUser)
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
            window.location.replace(`/`)
        }catch(err: unknown){
            dispatch({type: "UPDATE_FAILURE"})
        }
    }

    const disaccount = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const deleteUser = {
            _id: state.user._id
        }
        try{
            await axios.delete(`/api/user/${state.user._id}`,{
                data: deleteUser
            })
            dispatch({type: "LOGOUT"})
            window.location.replace("/")
        }catch(err: unknown){
            console.log(err)
        }
    }

    React.useEffect(() => {
        console.log(`${PF}${state.user.profilePic}`)
    }, [])

    return (
        <div className="account">
            <div className="accountWrapper">
                <form className="accountForm" onSubmit={handleSubmit}>
                    <div className="accountFormPP">
                        <label htmlFor="accountPP">
                            <img src={
                                (file)?
                                URL.createObjectURL(file[0]):
                                ((state.user.profilePic !== "")?
                                (`${PF + state.user.profilePic}`):
                                "/no.jpg")
                            } alt=""/>
                        </label>
                        <input onChange={(e)=>setFile(e.target.files)} type="file" id="accountPP" style={{ display: "none" }} accept=".jpg, .jpeg, .png" />
                    </div>
                    <div className="accountFormGroup">
                        <input value={username} type="text" placeholder="username" required onChange={(e)=>setUsername(e.target.value)}/>
                        <textarea placeholder="introduce" style={{ width: "80%" }} onChange={(e) => setIntro(e.target.value)} value={intro}/>
                        <div className="accountFormButton">
                            <button className="accountSubmit" type="submit">Update</button>
                            <button className="accountDelete" onClick={disaccount}>Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account