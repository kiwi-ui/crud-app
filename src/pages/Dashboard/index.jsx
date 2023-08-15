import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { SingleUser, User } from '../../services/User'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({setUser, setId}) => {
	const [users, setUsers] = useState([])
	const navigate = useNavigate();
	
	const getSingleUser = async (id) => {
	  const { data } = await SingleUser(id);
	  setId(data.data.id)
	  setUser(data.data);
	  navigate(`/users/${data.data.id}`)
	}

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
		<Navbar />
		<main className="container my-2">
			<div className="row g-md-3 g-2">
				{users && users.map(user => (
					<div className="col-6 col-md-4" key={ user.id } onClick={ () => getSingleUser(user.id) }>
						<div className="card">
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