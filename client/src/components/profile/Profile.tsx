import "./profile.css"

interface ImageUrl {
    name: string;
}

export default function Profile ({name}: ImageUrl) {
    return (
        <div className="profile">
            <img src={name} alt="" />
        </div>
    )
}