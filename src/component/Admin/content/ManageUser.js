import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="user-content">
                <button> Add new User </button>
            </div>
            <div className="user-table">
                table users
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;