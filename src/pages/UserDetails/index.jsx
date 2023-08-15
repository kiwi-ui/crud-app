import Navbar from "../../components/Navbar"

const UserDetails = ({ user }) => {
  return (
	<>
		<Navbar/>
		<main className="container mt-3">
		{user && 
			<div className="d-flex flex-wrap justify-content-center align-items-center">
				<div className="card w-75">
					<img src={user.avatar} className="card-img-top" alt={`${user.first_name}`} />
					
					<div className="card-body">
						<h5 className="card-title">{ user.first_name } { user.last_name }</h5>
						<p className="card-text">{ user.email }</p>
					</div>
				</div>
			</div>
		}  
		</main>
	</>
  )
}

export default UserDetails
