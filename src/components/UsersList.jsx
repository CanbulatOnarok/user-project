
import '../style/UsersList.css';
const UsersList = ({ users }) => {
  return (


    <div className='user-list-container'>
      {users.map(
        (user) =>
        <div className='user-card'>
          <div key={user.id}>
            <img src="https://l24.im/zt3c" alt='Profil-Pictures'/>
            <h3>{user.ad}-{user.soyad}</h3>
            <p>{user.yas}</p>
            <p>{user.cinsiyet}</p>
            <p>{user.email}</p>
          </div>
          </div>
      )}
    </div>
  )
}

export default UsersList