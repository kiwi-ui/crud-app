import {useState} from 'react'
import { Login } from '../../services/Login';
import { useNavigate } from 'react-router-dom';

const Loginpage = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
      try {
        const {data} = await Login(email, password);
        console.log('Login successful:', data);
        localStorage.setItem('token',data.token)
        onLogin();
        navigate('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        setError('Login failed. Please check your credentials.');
      }
    };
  
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Login</h4>
                {error && <div className="alert alert-danger">{error}</div>}
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Loginpage;
