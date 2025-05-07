import React, { useContext, useState} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Bounce, toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Update user profile in Firebase
    updateUser({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success('Profile updated successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setSuccess("Profile updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.warn('Failed to update profile', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setError("Failed to update profile");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <Helmet>
        <title>My Profile | Tech Deal</title>
      </Helmet>
      
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* User Info */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white mb-14">
          <h2 className="text-2xl font-bold text-center mb-1">My Profile</h2>
        </div>
        
        <div className="text-center -mt-12 mb-6 px-6">
          <div className="inline-block rounded-full p-1 bg-white shadow-lg">
            <img
              src={user?.photoURL || "https://via.placeholder.com/96"}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/96";
              }}
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">{user?.displayName}</h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleUpdate} className="space-y-4 px-6 pb-8">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Photo URL</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Save Changes
          </button>

          {/* Success/Error Message */}
          {success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
              <p>{success}</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyProfile;