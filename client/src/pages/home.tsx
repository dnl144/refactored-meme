import { Card } from "@/components/ui/card";

export default function Home() {
  // Get base URL from environment variable, default to empty string
  const baseUrl = import.meta.env.VITE_BASE_URL ? `/${import.meta.env.VITE_BASE_URL}` : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Where is the start?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Join us on the journey of entrepreneurship
          </p>
        </div>

        {/* Twitter Timeline Section */}
        <div className="bg-gray-900/50 rounded-lg shadow-xl p-6">
          <div id="timeline-container" className="min-h-[600px]">
            <a 
              className="twitter-timeline" 
              href="https://twitter.com/whereisthestart?ref_src=twsrc%5Etfw"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
            >
              Tweets by whereisthestart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}