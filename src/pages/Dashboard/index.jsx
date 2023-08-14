import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { User } from '../../services/User'

const Dashboard = () => {
	const [users, setUsers] = useState([])
	
	useEffect(() => {
		const getUserList = async () => {
			try {
				const { data } = await User();
				setUsers(data.data)
			} catch (error) {
				console.log(error);
			}
		};

		getUserList();
	}, [])

	return (
	<>
		<header>
			<Navbar />
		</header>

		<main className="container my-2">
			<div className="row g-md-3 g-2">
				{users && users.map(user => (
					<div className="col-6 col-md-4">
						<div className="card" key={ user.id }>
							<img src={user.avatar} className="card-img-top" alt={`${user.first_name}`} />
						
							<div className="card-body">
								<h5 className="card-title">{ user.first_name } { user.last_name }</h5>
								<p className="card-text">{ user.email }</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	</>

  )
}

export default Dashboard