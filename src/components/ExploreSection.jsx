import React from "react";

const CategoryButton = ({ title, count }) => (
  <button className="rounded-lg bg-gray-100 p-4 text-left hover:bg-gray-200 transition-all duration-300">
    <span className="mb-2 block font-semibold text-lg md:text-xl">{title}</span>
    <span className="text-sm md:text-base text-gray-600">
      {count}+ artifacts
    </span>
  </button>
);

const ExploreSection = () => {
  const categories = [
    { title: "Ancient Tools", count: 200 },
    { title: "Writings & Scripts", count: 150 },
    { title: "Religious Items", count: 180 },
    { title: "Ancient Weapons", count: 120 },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Explore by Category
            </h2>
            <p className="mb-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
              Discover artifacts across different categories and time periods.
              From ancient tools to precious documents, explore humanity's rich
              historical heritage.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  title={category.title}
                  count={category.count}
                />
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className="relative hidden md:block">
            <img
              src="https://i.ibb.co.com/1XyVqFR/Delphi-Cover5.webp"
              alt="Category collection"
              className="rounded-lg object-cover shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
