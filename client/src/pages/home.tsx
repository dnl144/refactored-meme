import { useQuery } from "@tanstack/react-query";
import { getTweets } from "@/lib/twitter-api";
import TweetCard from "@/components/tweet-card";
import LoadingSkeleton from "@/components/loading-skeleton";
import { Card } from "@/components/ui/card";

export default function Home() {
  const { data: tweets, isLoading, error } = useQuery({
    queryKey: ['tweets'],
    queryFn: getTweets
  });

  if (error) {
    return (
      <Card className="p-6 max-w-2xl mx-auto mt-8 bg-background/80">
        <p className="text-red-500">Failed to load tweets. Please try again later.</p>
      </Card>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Top-left Where is the start image */}
      <img 
        src="/assets/cornerlogo.png" 
        alt="Where is the start?" 
        className="absolute top-4 left-4 h-48 w-auto"
      />

      <div className="max-w-2xl mx-auto p-4">
        {/* Center hero Entrepreneurship starts image */}
        <div className="flex justify-center mb-12 mt-8">
          <img 
            src="/assets/Happening.png" 
            alt="Entrepreneurship starts" 
            className="w-full max-w-lg h-48"
          />
        </div>

        <div className="space-y-4">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <LoadingSkeleton key={i} />
            ))
          ) : (
            tweets?.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}