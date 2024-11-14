import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !email || !password || !agree) {
            setError('Please fill in all fields and agree to the terms and conditions.');
            return;
        }
        setError('');
        console.log('Registered:', { fullName, email, password });
        setFullName('');
        setEmail('');
        setPassword('');
        setAgree(false);
        navigate('/login'); // Redirect to Login page after successful registration
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-6 text-lime-700">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-lime-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-lime-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-lime-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="form-checkbox"
                        />
                        <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                    </label>
                </div>
                <button type="submit" className="w-full bg-lime-700 text-white py-2 rounded-md hover:bg-lime-800">
                    Register
                </button>
            </form>
            <p className="mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-lime-700 hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;