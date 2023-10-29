import './User.css';

function UserData(props){
 
    return(
        <div className="item">
            <h1>{props.name}</h1>
            <p>{props.day} - {props.month} - {props.year}</p>
            {/* {props.children} */}
        </div>
    );
}

export default UserData;