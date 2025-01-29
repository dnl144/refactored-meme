import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="max-w-2xl mx-auto p-4">
        {/* Center hero Entrepreneurship starts image */}
        <div className="flex justify-center mb-12 mt-4">
          <img 
            src="/assets/Happening.png" 
            alt="Entrepreneurship starts" 
            className="w-full max-w-lg h-48 object-contain"
          />
        </div>

        {/* Twitter Timeline */}
        <div className="w-full bg-black/80 rounded-lg p-4">
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
  );
}