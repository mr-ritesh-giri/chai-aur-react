import { useLoaderData } from "react-router-dom";
function App() {
  const data = useLoaderData();

  return (
    <div className="flex items-center justify-center h-max p-28 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {data && (
          <>
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={data.avatar_url}
              alt={data.name}
            />
            <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
            <p className="text-gray-600 mb-4">{data.bio}</p>
            <div className="mb-4">
              <a
                className="text-blue-500 hover:underline"
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile on GitHub
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Followers: {data.followers}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mr-ritesh-giri");
  return response.json();
};
