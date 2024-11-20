const User = ({user}) => {
    const { id, name, email, phone} = user;

    const useStyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: "20px"

    }
    return (
        <div style={useStyle}>
            <h3>Name : {name}</h3>
            <p>Phone : { phone}</p>
            <p>Email : { email}</p>
            
        </div>
    );
};

export default User;