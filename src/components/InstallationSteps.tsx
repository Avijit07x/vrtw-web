import InstallationStep from "./InstallationStep";

const InstallationSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Create Project",
      command: "npx create-vrtw",
    },
    {
      number: 2,
      title: "Navigate to Directory",
      command: "cd my-awesome-app",
    },
    {
      number: 3,
      title: "Start Development",
      command: "npm run dev",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Quick Setup</h2>
          <p className="text-xl text-gray-300">
            Three commands to rule them all
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <InstallationStep key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg">
            That's it! Your modern React app is ready to go. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallationSteps;
