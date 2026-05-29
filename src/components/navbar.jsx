import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        <img
          src="/logo.svg"
          alt="logo"
          className="h-8 w-auto"
        />

        <ul className="flex items-center gap-8">
          {[
            { label: "store" },
            { label: "mac" },
            { label: "ipad" },
            { label: "iphone" },
            { label: "watch" },
            { label: "airpods" },
          ].map(({ label }) => (
            <li key={label}>
              <a
                href={`/${label}`}
                className="text-sm font-medium hover:text-gray-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <img src="/search.svg" alt="search" className="w-5 h-5" />
          </button>

          <button>
            <img src="/cart.svg" alt="cart" className="w-5 h-5" />
          </button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar