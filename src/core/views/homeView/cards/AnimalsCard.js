function Animales(anim){
  const {user } = anim;
  console.log('nombres', anim);
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.specimen}</p>
      <p>{user.age}</p>
    </div>
  );
}

export default Animales;