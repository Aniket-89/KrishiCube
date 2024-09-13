
const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-green-700 to-green-600">
        <p className="text-xs text-green-100">© 2024 Krishi Cube. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs text-green-100 hover:text-yellow-200" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-green-100 hover:text-yellow-200" href="#">
            Privacy
          </a>
        </nav>
      </footer>
  )
}

export default Footer
