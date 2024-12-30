import React from "react";

const StatisticBox = ({ number, label }) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold">{number}</h3>
    <p>{label}</p>
  </div>
);

const StatisticsSection = () => {
  const stats = [
    { number: "1000+", label: "Artifacts Documented" },
    { number: "50+", label: "Museums Connected" },
    { number: "10K+", label: "Active Users" },
    { number: "100+", label: "Countries Represented" },
  ];

  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatisticBox key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
