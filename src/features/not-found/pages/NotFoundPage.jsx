import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold text-red-500">404</h1>

            <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

            <p className="mt-3 text-gray-600">
                Sorry, the page you are looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
                Back to Home Page
            </Link>
        </div>
    );
}
