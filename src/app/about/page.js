export const metadata = {
  title: "About",
  description: "This is the About page.",
};

const AboutPage = () => {
  return (
    <div className="py-15">
      <div className="block text-center">
        <h1 className="text-5xl mb-3 ">About Us</h1>
        <div className="container shadow-2xl bg-white p-6 rounded-4xl mx-auto">
          <h2 className="text-3xl mt-10  underline">
            Empowering Teams to Work Smarter, Together
          </h2>
          <p className="mt-5">
            At Project Management System (PMS), we help teams organize projects,
            manage tasks, and collaborate efficiently in one centralized
            platform. Our goal is to simplify project management by providing
            powerful yet easy-to-use tools that help individuals and teams plan,
            track, and complete work successfully. Whether you are managing a
            small team or a large-scale project, PMS provides everything you
            need to stay organized — from task assignment and progress tracking
            to team collaboration and deadline management.
          </p>
          <h2 className="text-3xl mt-10 underline ">Our Mission</h2>
          <p className="mt-5">
            Our mission is to make project management simple, transparent, and
            productive. We aim to reduce complexity in teamwork by creating a
            platform where teams can focus on achieving goals instead of
            managing scattered information.
          </p>
          <h2 className="text-3xl mt-10 underline">What We Provide</h2>
          <ul className="mt-5 space-y-2">
            <li>
              ✔ Task Management: Create, assign, prioritize, and track tasks
            </li>
            <li>
              ✔ Team Collaboration: Keep communication and project updates
              organized in one place.
            </li>
            <li>
              ✔ Progress Tracking: Monitor project status, deadlines, and team
              performance.
            </li>
            <li>
              ✔ Better Productivity: Help teams save time and complete projects
              efficiently.
            </li>
          </ul>
          <div>
            <h2 className="text-3xl mt-10 underline">Our Team Members</h2>
            <ol className="mt-5 space-y-2">
              <li>Sagar Shrestha</li>
              <li>Shovit Regmi</li>
              <li>Pankaj Kumar Rajbanshi</li>
              <li>Nitika Dangal</li>
              <li>Sumana Ranjit</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
