const AboutSection = ({ id }) => {
  return (
    <section
      id={id}
      className="about-section
      flex items-center justify-center
          w-full min-h-screen
          bg-linear-to-r from-gray-100 to-gray-300
      dark:from-gray-700 dark:to-gray-900
      transition-colors duration-500"
    >
      <div
        className="about-section-card
        w-full max-w-4xl p-6
        m-2 md:m-6
        mt-[calc(var(--header-mobile)+0.5rem)]
        md:mt-[calc(var(--header-desktop)+1.5rem)]
        rounded-2xl shadow-sm shadow-blue-950 dark:shadow-blue-100"
      >
        <h2
          className="about-title
        font-oswald font-semibold text-4xl
        text-gray-700 dark:text-gray-200"
        >
          About me
        </h2>

        <div
          className="line
          border-b w-26 mt-4 mb-12 
          text-gray-500"
        ></div>

        <p
          className="
        text-lg md:text-xl text-justify mt-6 
        text-gray-600 dark:text-gray-300"
        >
          I'm a front-end developer focused on building, clean, accessible, and
          responsive user interfaces.
        </p>
        <p
          className="
        text-lg md:text-xl text-justify mt-6
        text-gray-600 dark:text-gray-300"
        >
          I work with React and Tailwind CSS to create modern web experiences.
        </p>
        <p
          className="
        text-lg md:text-xl text-justify mt-6
        text-gray-600 dark:text-gray-300"
        >
          I enjoy turning designs into real, usable products.
        </p>
        <div
          className="line
          border-b w-12 mt-12
          text-gray-500"
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;
