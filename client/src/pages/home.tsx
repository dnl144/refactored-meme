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
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Where is the start?
        </h1>

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