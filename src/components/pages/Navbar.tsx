import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
        <div className="h-full w-full bg-white/60">
          <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
            <div>
              <Link to='/'>
                <h1 className='text-4xl'>Products</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav >
    );
  };
  
  export default Navbar;