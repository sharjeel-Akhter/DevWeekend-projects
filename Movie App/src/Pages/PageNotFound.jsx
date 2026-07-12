import { useEffect } from "react";

export function PageNotFound() {
  useEffect(()=> {
    document.title = 'Page Not Found | Cinemate'
  },[])
    return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <h1 className="text-5xl font-semibold">
        404 | Page Not Found
      </h1>
    </div>
    );
}

