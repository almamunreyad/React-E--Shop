export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} - Digital Products List Manager. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
