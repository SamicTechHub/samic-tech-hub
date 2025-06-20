import React, { useState } from "react";

export default function MentorRegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    onClose(); // close modal
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal box */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-4">Mentor Registration</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label className="block text-sm">Name</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm">Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm">Expertise</label>
                    <input
                        name="expertise"
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                    Submit
                    </button>
                </form>
                </div>
            </div>
    </>
  );
}
