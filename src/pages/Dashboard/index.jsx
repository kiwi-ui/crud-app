import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { SingleUser, User } from '../../services/User'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({setUser, setId}) => {
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const navigate = useNavigate();
	
	const getSingleUser = async (id) => {
	  const { data } = await SingleUser(id);
	  setId(data.data.id)
	  setUser(data.data);
	  navigate(`/users/${data.data.id}`)
	}

	const getUserList = async (page) => {
		try {
			const { data } = await User(page);
			setUsers(data.data)
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => { getUserList() }, [])
	const movePage = (e) => {
		e.preventDefault();

		getUserList(e.target.textContent);
		setCurrentPage(prevPage => e.target.textContent);
	}

	return (
		<>
			<Navbar />

			<main className="container my-2">
				<div className="row g-md-4 g-3">
					{users && users.map(user => (
						<div className="col-md-4" key={ user.id } onClick={ () => getSingleUser(user.id) }>
							<div className="card shadow">
								<img src={user.avatar} className="card-img-top" alt={`${user.first_name}`} />
							
								<div className="card-body bg-warning">
									<h5 className="card-title">{ user.first_name } { user.last_name }</h5>
									<p className="card-text">{ user.email }</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="d-flex justify-content-center flex-wrap mt-4">
					<button className={` ${ +currentPage === 1 ? 'text-primary' : ''} btn  mx-1` } onClick={movePage}>1</button>
					<button className={` ${ +currentPage === 2 ? 'text-primary' : ''} btn  mx-1` } onClick={movePage}>2</button>
				</div>
			</main>
		</>

  )
}

export default Dashboard
