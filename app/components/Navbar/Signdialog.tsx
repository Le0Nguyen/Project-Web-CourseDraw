import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import axios from "axios"

const Signin = () => {
  // useEffect(() => {
  //   // Initialize the users array with an empty array.
  //   setUsers([]);
  // }, []);

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //     const payload = {
  //       email: event.currentTarget.email.value,
  //       passWord: event.currentTarget.password.value,
  //     };
  // }; 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const data = JSON.stringify({
      username,
      password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   const response = await axios.get("http://localhost:8080/users");
  //   setUsers(response.data);
  // };

  // const handleLogin = async () => {
  //   const response = await axios.post("http://localhost:8080/login", {
  //       username: emailAddress,
  //       password: passWord,
  //   });

  //   // Nếu đăng nhập thành công, lưu thông tin người dùng vào localStorage.
  //   if (response.status === 200) {
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //       window.location.href = "/";
  //   } else {
  //       // Hiển thị thông báo lỗi cho người dùng.
  //       alert("Login failed.");
  //   }
  // };

  return (
    <>
      <div className="bg-purple hover:bg-purple hover:text-white text-white text-15px font-medium ml-8 py-4 px-5 rounded">
        <div className="hidden md:block">
          <button
            type="button"
            className="text-15px font-medium space-links"
            onClick={openModal}
          >
            Sign In
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/Logo.svg"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Sign in to your account
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div style={{ padding: "5px" }}>
                            <label htmlFor="user-name" className="sr-only">
                              Username
                            </label>
                            <input
                              value={username}
                              onChange={(val) => setUsername(val.target.value)}
                              id="user-name"
                              name="username"
                              type="username"
                              autoComplete="username"
                              required
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="username"
                            />
                          </div>
                          <div style={{ padding: "5px" }}>
                            <label htmlFor="password" className="sr-only">
                              Password
                            </label>
                            <input
                             value={password}
                             onChange={(val) => setPassword(val.target.value)}
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={handleLogin}
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span>
                            Sign in
                          </button>
                        </div>
                        <hr /> {/* Divider */}
                        <div>
                          <div className="flex space-x-4">
                            <Link
                              href="/Registration"
                              type="button"
                              className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={closeModal}
                            >
                              Sign up
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
