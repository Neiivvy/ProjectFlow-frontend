import { LOGIN_ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import img from "@/assets/images/HomeImage1.png";
function ProjectManagement() {
  return (
    <div>
      <section className=" grid lg:grid-cols-2 text-center bg-gray-50 overflow-hidden m-5 p-5">
        <div className="max-w-4xl px-6">
          <h1 className="md:text-5xl text-3xl font-bold text-gray-900 leading-tight m-10">
            PROJECT MANAGEMENT SYSTEM
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Manage Projects{" "}
            <span className="text-indigo-600">Smarter & Faster</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            PMS helps teams plan, assign, track, and deliver projects
            efficiently in one powerful workspace.
          </p>

          <div className="mt-8  flex gap-4 justify-center">
            <Link
              href={LOGIN_ROUTE}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700"
            >
              Get Started
            </Link>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
        <Image
          src={img}
          height={500}
          width={500}
          alt="HomeImage"
          className="lg:h-150 lg:w-200  sm:mx-auto"
        />
      </section>
    </div>
  );
}

export default ProjectManagement;
