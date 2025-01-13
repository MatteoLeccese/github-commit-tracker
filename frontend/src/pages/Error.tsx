export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="\error.png"
        alt="Error"
        className="w-[280px] mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <a
        href="/"
        className="text-red-500 hover:text-red-700 transition duration-300"
      >
        Go back to homepage
      </a>
    </div>
  );
};
