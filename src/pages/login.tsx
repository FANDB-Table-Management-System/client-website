// import React, { useState } from 'react';

function Login() {
  return (
    <div className="bg-blue-50">
      <div className="flex flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900 px-2">
            Login to F and B System
          </h2>
        </div>
        <div className="mt-8 mx-auto w-full max-w-md px-4">
          <div className="bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
            <form className="space-y-6 text-left">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    type="text"
                    name="name"
                    required
                    placeholder="John"
                    className="text-gray-700 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Member Name
                </label>
                <div className="mt-1">
                  <input
                    id="member-name"
                    type="text"
                    name="member-name"
                    required
                    placeholder="John Doe"
                    className="text-gray-700 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Membership ID
                </label>
                <select
                  id="membership-id"
                  name="membership-id"
                  className="mt-1 block w-full bg-slate-100 text-gray-700 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                  <option>1000</option>
                  <option>1001</option>
                  <option>1002</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone-number"
                    type="text"
                    name="phone-number"
                    required
                    placeholder="9876543210"
                    className="text-gray-700 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="table-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Table Number
                </label>
                <select
                  id="table-number"
                  name="table-number"
                  className="mt-1 block w-full bg-slate-100 text-gray-700 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                >
                  <option>Table 1</option>
                  <option>Table 2</option>
                  <option>Table 3</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
