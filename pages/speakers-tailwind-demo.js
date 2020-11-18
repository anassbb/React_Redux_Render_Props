function Page() {
  return (
    <div className="md:felx bg-gray-200 rounded-lg p-10">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src={`images/speaker-component-1124.png`}
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold">
          {"Douglas"} {"Crockford"}
        </h2>
        <div className="text-purple-500"></div>
        <div className="text-gray-900">Conference Speaker</div>
        <div className="text-gray-600">{"JSON Creator"}</div>
      </div>
    </div>
  );
}

export default Page;
