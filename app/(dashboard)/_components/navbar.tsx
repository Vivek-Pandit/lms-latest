import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-[#516a8a] shadow-sm">
      <h2 className="text-[#f51515] text-bold">EduTech LMS</h2>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}