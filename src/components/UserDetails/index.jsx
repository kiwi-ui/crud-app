
const UserDetails = ({ user }) => {
  return (
    <>
      {user && 
        <div className="col-6 col-md-4">
						<div className="card">
							<img src={user.avatar} className="card-img-top" alt={`${user.first_name}`} />
						
							<div className="card-body">
								<h5 className="card-title">{ user.first_name } { user.last_name }</h5>
								<p className="card-text">{ user.email }</p>
							</div>
						</div>
				</div>
      }  
    </>
  )
}

export default UserDetails