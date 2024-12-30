import React from "react";
import { Library, Search, Heart, Upload, Clock, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Artifact Discovery",
      description:
        "Browse through a curated collection of historical artifacts from different eras. Each artifact comes with detailed information about its origin, discovery, and historical significance.",
      icon: <Library className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Interactive Engagement",
      description:
        "Like and track your favorite historical pieces. Engage with artifacts by showing appreciation and keeping track of items that interest you most.",
      icon: <Heart className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Contribute Artifacts",
      description:
        "Add your own discoveries to our growing collection. Share detailed information about artifacts including their historical context, discovery date, and current location.",
      icon: <Upload className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Advanced Search",
      description:
        "Easily find specific artifacts using our powerful search functionality. Filter by name, type, era, and more to discover exactly what you're looking for.",
      icon: <Search className="w-8 h-8 text-amber-600" />,
    },
  ];

  return (
    <section className="py-16 bg-stone-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-500 mb-4">
            Discover History's Treasures
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore, contribute, and engage with historical artifacts from
            around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100 dark:border-amber-900"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-2">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-amber-400 to-amber-600"></div>
              </div>
              <img
                src="https://i.ibb.co.com/RzpMYw1/China-National-Silk-Museum-1-1.jpg"
                alt="Historical artifacts collection"
                className="relative rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
