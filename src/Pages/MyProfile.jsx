import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const MyProfile = () => {
  const { user } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Update user profile in Firebase
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setSuccess('Profile updated successfully!');
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to update profile');
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-5">My Profile</h2>

      {/* User Info */}
      <div className="text-center mb-6">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-2 border"
        />
        <h3 className="text-xl font-semibold">{user?.displayName}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>

        {/* Success/Error Message */}
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default MyProfile;
