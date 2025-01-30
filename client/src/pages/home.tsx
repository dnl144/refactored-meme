import { Card } from "@/components/ui/card";

export default function Home() {
  // Get base URL from window location for GitHub Pages
  const getAssetPath = (path: string) => {
    const baseUrl = window.location.pathname.startsWith('/refactored-meme') 
      ? '/refactored-meme'
      : '';
    return `${baseUrl}/assets/${path}`.replace(/\/+/g, '/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="space-y-4 text-center mb-12">
          <img 
            src={getAssetPath('centrelogo.png')}
            alt="Where is the start?"
            className="w-full max-w-2xl mx-auto h-auto"
          />
          <p className="text-gray-400 text-lg md:text-xl">
            Where is the start?
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