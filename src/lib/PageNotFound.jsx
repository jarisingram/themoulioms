import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="font-script text-primary text-7xl">404</h1>
            <div className="h-px w-16 bg-accent mx-auto" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif italic text-3xl text-primary">
              Page Not Found
            </h2>
            <p className="font-serif text-foreground/70 leading-relaxed">
              The page{" "}
              <span className="italic">"{pageName}"</span>{" "}
              could not be found.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center px-5 py-2.5 text-xs tracking-[0.25em] uppercase text-primary border border-primary/30 hover:border-primary transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
