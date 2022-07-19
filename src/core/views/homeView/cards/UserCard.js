import '../homeStyles.css';

function UserCard(props){
  const { user } = props;
  console.log('Propiedades', props);
  return (
    <div className='userCard'>
      <h3>{user.name}</h3>
      <p>{user.lastname}</p>
    </div>
  );
}

export default UserCard;