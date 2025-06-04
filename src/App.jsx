import React, { useState } from "react";

const SimpleJokeApp = () => {
  // Jokes data with setup/punchline structure
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      setup: "Why did the student eat his homework?",
      punchline: "Because his teacher told him it was a piece of cake!",
    },
    {
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs!",
    },
    {
      setup: "Why did the computer get cold?",
      punchline: "Because it forgot to close Windows.",
    },
    {
      setup: "Why was the math book sad?",
      punchline: "Because it had too many problems.",
    },
    {
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache.",
    },
    {
      setup: "Why do Java developers wear glasses?",
      punchline: "Because they don't see sharp.",
    },
    {
      setup: "Why was the cell phone wearing glasses?",
      punchline: "Because it lost its contacts.",
    },
    {
      setup: "Why did the function stop calling?",
      punchline: "Because it had too many arguments.",
    },
    {
      setup: "What's a programmer's favorite hangout place?",
      punchline: "The Foo Bar.",
    },
  ];

  // State for routing and theme
  const [currentPage, setCurrentPage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState("");

  // Event handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Display all jokes (no filtering)
  const displayedJokes = jokes;

  // Home Page Component
  const HomePage = () => (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold mb-4">🎭 Welcome to Joke Central</h1>
        <p
          className={`text-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Your favorite collection of programming and tech jokes!
        </p>

        {/* User Name Input */}
        <div className="max-w-md mx-auto mt-8">
          <label
            className={`block text-sm font-medium mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Enter your name to get started:
          </label>
          <input
            type="text"
            placeholder="Your name here..."
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-lg border transition-colors `}
            //  ${
            //   isDarkMode
            //     ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            //     : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            // }`}
          />
          {userName && (
            <p
              className={`mt-2 text-center ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              Hello, {userName}! 👋
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div
          className={`p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          } shadow-lg`}
        >
          <div className="text-4xl mb-4">😂</div>
          <h3 className="text-xl font-semibold mb-2">Funny Jokes</h3>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Discover hilarious programming and tech jokes
          </p>
        </div>

        <div
          className={`p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          } shadow-lg`}
        >
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-xl font-semibold mb-2">Tech Humor</h3>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Perfect for developers and tech enthusiasts
          </p>
        </div>

        <div
          className={`p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          } shadow-lg`}
        >
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold mb-2">Daily Laughs</h3>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Get your daily dose of coding humor
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {userName ? `Ready for some laughs, ${userName}?` : "Ready to laugh?"}
        </h2>
        <button
          onClick={() => handlePageChange("jokes")}
          className={`px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105 ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          View All Jokes →
        </button>
      </div>

      <div
        className={`mt-12 p-4 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Total Jokes Available: {jokes.length}
        </p>
      </div>
    </div>
  );

  // Jokes Page Component
  const JokesPage = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {userName ? `${userName}'s Joke Collection` : "All Jokes"}
        </h1>
        <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
          {userName ? `Hey ${userName}! ` : ""}Browse through our collection of{" "}
          {jokes.length} hilarious jokes
        </p>
      </div>

      {/* Jokes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedJokes.map((joke, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 ${
              isDarkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Setup:</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  {joke.setup}
                </p>
              </div>

              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-gray-700" : "bg-yellow-50"
                }`}
              >
                <h4 className="font-semibold text-sm mb-1">Punchline:</h4>
                <p
                  className={`italic ${
                    isDarkMode ? "text-yellow-300" : "text-yellow-800"
                  }`}
                >
                  {joke.punchline}
                </p>
              </div>

              <div className="text-center">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    isDarkMode
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Joke #{index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message - removed since we show all jokes */}

      {/* Back to Home Button */}
      <div className="text-center pt-8">
        <button
          onClick={() => handlePageChange("home")}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation Header */}
      <nav
        className={`p-4 shadow-lg ${
          isDarkMode
            ? "bg-gray-800 border-b border-gray-700"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold">🎭 Joke App</h1>

            <div className="flex space-x-4">
              <button
                onClick={() => handlePageChange("home")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "home"
                    ? isDarkMode
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handlePageChange("jokes")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === "jokes"
                    ? isDarkMode
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Jokes
              </button>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <HomePage />
        <h1 className="">Jocks </h1>
        <JokesPage />
      </main>
    </div>
  );
};

export default SimpleJokeApp;

// Tenary operators (if and else)
// Handle button clicks, input changes
// Map in react
// React Router
