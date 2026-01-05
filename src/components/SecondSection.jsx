const SecondSection = () => {
  return (
    <div
      className="second-section
          w-full min-h-screen
          bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      <div
        className="second-section-container
              w-full max-w-4xl m-auto
              p-4 pt-(--header-mobile) md:pt-(--header-desktop)"
      >
        <h2 className="text-4xl text-gray-700 dark:text-gray-200">
          This Is Second Section
        </h2>
      </div>
    </div>
  );
};

export default SecondSection;
