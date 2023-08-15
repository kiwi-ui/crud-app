import Navbar from "../../components/Navbar"

const UserDetails = ({ user }) => {
  return (
	<>
		<Navbar/>
			
		<main className="container mt-5">
			<div className="row justify-content-center">

			{user && 
				<div className="col-md-6 col-10 rounded-5 border-3 p-0 shadow position-relative">
					<div className="text-center d-flex flex-column justify-content-center align-items-center py-4 border-bottom">
						<img src={user.avatar} className="rounded-5" alt={`${user.first_name}`} />
						
						<div className="text-center py-2">
							<p className="mb-0 fw-bold">{ user.first_name } { user.last_name }</p>
							<p className="mb-0">{ user.email }</p>
						</div>
					</div>

					<div className="bg-warning py-2 rounded-bottom-5">
						<div className="container">
							<p className="mb-0 fw-semibold">First Name</p>
							<p>{ user.first_name }</p>

							<p className="mb-0 fw-semibold">Last Name</p>
							<p>{ user.last_name }</p>

							<p className="mb-0 fw-semibold">Email</p>
							<p>{ user.email }</p>
						</div>
					</div>
				</div>
			}  
			</div>
		</main>
	</>
  )
}

export default UserDetails
