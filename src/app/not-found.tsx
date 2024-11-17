// Customized 404 not found page

const NotFound = () => {
  return (
    <div className="h-screen bg-black text-white flex justify-center items-center flex-col gap-3">
      <h2 className="text-2xl">Page not found</h2>
      <p className="text-xl">could not found requested resource !</p>
    </div>
  );
};

export default NotFound;
