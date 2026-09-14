import { Outlet } from "react-router-dom"

export function AuthLayout() {
  return (
    <div className="flex min-h-screen grid-cols-2 lg:grid w-full">
      <div className="relative hidden lg:flex flex-col justify-between p-10 text-white overflow-hidden pt-24">
        <div className="absolute inset-0 bg-zinc-900">
          <img
            src="https://images.unsplash.com/photo-1638625864149-ba4396c78274?q=80&w=1364&auto=format&fit=crop"
            alt="Authentication background"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Exo Dash
        </div>
        <div className="z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This template has saved me countless hours of work and helped me deliver stunning dashboard designs to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center p-8 bg-background w-full pt-28">
        <div className="absolute top-24 left-8 lg:hidden flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Exo Dash
        </div>

        <div className="mx-auto w-full max-w-[400px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
