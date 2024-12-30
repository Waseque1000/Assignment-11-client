import React from "react";

const CategoryButton = ({ title, count }) => (
  <button className="rounded-lg bg-gray-100 p-4 text-left hover:bg-gray-200">
    <span className="mb-2 block font-semibold">{title}</span>
    <span className="text-sm text-gray-600">{count}+ artifacts</span>
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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Explore by Category</h2>
            <p className="mb-6 text-gray-600">
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
          <div className="relative hidden md:block">
            <img
              src="https://i.ibb.co.com/N2vbqsz/london-british-museum-hunting-relief-palace-assurbanipal-nineveh-assyria-uk-november-51408355.webp"
              alt="Category collection"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
