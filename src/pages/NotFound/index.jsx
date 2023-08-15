import Navbar from "../../components/Navbar";

const NotFound = () => {
  return (
    <>
        <Navbar />
        <main className="vh-100 vw-100 d-flex justify-content-center align-items-center flex-column top-0">
            <h2>404 - Page Not Found</h2>
            <p>The requested page could not be found.</p>
        </main>
    </>
  );
};

export default NotFound;
