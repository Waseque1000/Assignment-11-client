import React from "react";
import {
  Clock,
  Users,
  Map,
  ArrowRight,
  Book,
  Camera,
  Scroll,
} from "lucide-react";

const HistorySection = () => {
  return (
    <div className="bg-gray-50">
      {/* Featured Collections Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Explore Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ancient Tools */}
            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/hfqD2qr/download-9.jpg"
                  alt="Ancient Tools"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ancient Tools
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Discover tools that shaped human civilization
                  </p>
                </div>
              </div>
            </div>

            {/* Sacred Writings */}
            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/gPQQwqJ/download-11.jpg"
                  alt="Sacred Writings"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Sacred Writings
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Ancient texts and manuscripts
                  </p>
                </div>
              </div>
            </div>

            {/* War Artifacts */}
            <div className="relative group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://i.ibb.co.com/fCwVSw6/download-12.jpg"
                  alt="War Artifacts"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    War Artifacts
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Weapons and armor from ancient battles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Journey Through Time
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200" />
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm font-medium text-indigo-600">
                      3000 BC
                    </span>
                    <h3 className="text-lg font-semibold mt-2">
                      Early Bronze Age
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Discovery of metalworking and early tools
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white" />
                </div>
                <div className="w-5/12" />
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12" />
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white" />
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm font-medium text-indigo-600">
                      1200 BC
                    </span>
                    <h3 className="text-lg font-semibold mt-2">
                      Iron Age Begins
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Advanced metallurgy and weapon crafting
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm font-medium text-indigo-600">
                      500 BC
                    </span>
                    <h3 className="text-lg font-semibold mt-2">
                      Classical Period
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Art, philosophy, and cultural artifacts
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white" />
                </div>
                <div className="w-5/12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Community of History Enthusiasts
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Connect with fellow history lovers, share discoveries, and
                contribute to our growing database of historical artifacts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Book className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Share Knowledge
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Contribute your expertise and insights
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Camera className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Document Finds
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Upload and catalog new discoveries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Connect</h3>
                    <p className="text-gray-600 text-sm">
                      Network with history enthusiasts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Scroll className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Research</h3>
                    <p className="text-gray-600 text-sm">
                      Access detailed artifact information
                    </p>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Join Community
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://i.ibb.co.com/N2vbqsz/london-british-museum-hunting-relief-palace-assurbanipal-nineveh-assyria-uk-november-51408355.webp"
                alt="Community"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div className="w-10 h-10 rounded-full bg-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Join 5,000+ members
                    </p>
                    <p className="text-sm text-gray-600">Growing community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistorySection;
