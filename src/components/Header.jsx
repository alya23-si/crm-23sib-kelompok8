import { Search, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
      {/* Breadcrumb / Page Info */}
      <div className="text-sm text-gray-500">
        Pages / <span className="text-green-700 font-semibold">Dashboard</span>
      </div>

      {/* Search & Account */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari destinasi, umroh..."
            className="px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* Sign In */}
        <div className="flex items-center gap-2 text-sm cursor-pointer text-gray-700 hover:text-orange-500 transition">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Sign In</span>
        </div>
      </div>
    </header>
  )
}

export default Header
