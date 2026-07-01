export default function Footer() {
  return (
    <footer className="bg-[#e0e3dd] pt-24 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <span className="text-lg font-bold text-[#0f5238] block mb-4">
            Project Clarity
          </span>
          <p className="text-sm text-[#404943] max-w-xs mb-6">
            The modern standard for project management. Built for
            performance, designed for people.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-bold text-[#181d19] mb-4">Product</h5>
          <ul className="space-y-2 text-sm text-[#404943]">
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Features</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Integrations</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Enterprise</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Changelog</li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold text-[#181d19] mb-4">Company</h5>
          <ul className="space-y-2 text-sm text-[#404943]">
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">About</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Security</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-bold text-[#181d19] mb-4">Resources</h5>
          <ul className="space-y-2 text-sm text-[#404943]">
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Documentation</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">API Reference</li>
            <li className="hover:text-[#0f5238] cursor-pointer transition-colors">Community</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-[#bfc9c1] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#404943]">
          © 2024 Project Clarity Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-[#404943]">
          <span className="hover:text-[#0f5238] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#0f5238] cursor-pointer">Terms of Service</span>
          <span className="hover:text-[#0f5238] cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}