import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-hot-toast';


const Register = () => {

    const { createUser } = useAuth();
    const handleSubmit =(event) =>{
        event.preventDefault();

        const name=event.target.name.value;
const email =event.target.email.value;
const password = event.target.password.value;
const image = event.target.img.value;

if(password.length < 6){
    toast.error("Password must be at least 6 characters");
    return;
}



createUser(email,password)
.then(res=>console.log(res.user))
.catch(error=>console.log(error))


}
return(
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" name="img"  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password"  className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;