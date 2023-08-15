import {useState} from 'react'
import { Login } from '../../services/Login';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Loginpage = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      setIsLoading(e => true)
      const response = await Login(email, password);
      localStorage.setItem('token',response.data.token)
      onLogin();
      navigate('/users');
      setIsLoading(e => false);
    } catch (error) {
      setIsLoading(e => true);
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
      setIsLoading(e => false);
    }
  };
  
  return (
    <>
        <div className="vh-100 position-relative container">
            <main className="row justify-content-center align-items-center h-75">
                <div className="col-lg-6">
                    <div className="card rounded-3">
                        <div className="card-body">
                            <h4 className="card-title mb-4 fs-2 fw-semibold">Sign In</h4>
                            {error && <div className="alert alert-danger">{error}</div>}
                            
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </form>
                          { isLoading ? 

                          <button className="btn btn-warning w-100" type="button" disabled>
                              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                              <span role="status">Loading...</span>
                          </button> :
                          <button type="button" className="btn btn-warning w-100" onClick={handleLogin}>Login</button>
                          }
                        </div>
                    </div>
                </div>
            </main>
    
            <Footer />
        </div>
    </>
  );
}

export default Loginpage;
