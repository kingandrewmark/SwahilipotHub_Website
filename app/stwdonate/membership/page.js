"use client";

import { useState } from "react";
import NextLayout from "@/layouts/NextLayout";
import Breadcrumb from "@/components/Breadcrumb";

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subCounty: "",
    educationLevel: "",
    interest: "",
    membershipType: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for joining Swahili Tech Women!");
  };

  return (
    <NextLayout>
      <Breadcrumb pageName="Join Swahili Tech Women" />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 px-4">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-gray-200 p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-pink-700">Join Swahili Tech Women</h2>
            <p className="text-gray-600 mt-2 text-lg">
              Join us and help solve challenges women face using technology.
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name Here..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 700 000 000"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            {/* Sub County */}
            <div>
              <label className="block text-gray-700 font-medium">Sub County (Residential)</label>
              <select
                name="subCounty"
                value={formData.subCounty}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="">Select Sub County</option>
                <option value="Mvita">Mvita</option>
                <option value="Nyali">Nyali</option>
                <option value="Changamwe">Changamwe</option>
                <option value="Kisauni">Kisauni</option>
              </select>
            </div>

            {/* Level of Education */}
            <div>
              <label className="block text-gray-700 font-medium">Level of Education</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="">Select Education Level</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                <option value="Master’s Degree">Master’s Degree</option>
              </select>
            </div>

            {/* Interest */}
            <div>
              <label className="block text-gray-700 font-medium">Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="">Select Interest</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Networking">Networking</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Membership Type */}
            <div>
              <label className="block text-gray-700 font-medium">Membership Type</label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="">Select Membership Type</option>
                <option value="Student">Student</option>
                <option value="Professional">Professional</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="md:col-span-2 flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                required
              />
              <label className="text-gray-600">
                I agree to the terms and conditions of Swahilipot Hub Foundation & Swahili Tech Women.
              </label>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 text-white bg-pink-700 hover:bg-pink-800 rounded-lg text-lg font-semibold transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </NextLayout>
  );
};

export default MembershipPage;
