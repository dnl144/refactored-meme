import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Share2, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { Tweet } from "@/lib/twitter-api";

interface TweetCardProps {
  tweet: Tweet;
}

export default function TweetCard({ tweet }: TweetCardProps) {
  const shareUrl = `https://twitter.com/${tweet.username}/status/${tweet.id}`;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Share Tweet",
        text: tweet.text,
        url: shareUrl
      });
    } catch (err) {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <Card className="hover:bg-muted/10 transition-colors border-neutral-800 bg-black">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={tweet.profileImageUrl} />
            <AvatarFallback>{tweet.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-100">{tweet.name}</span>
              <span className="text-neutral-500">@{tweet.username}</span>
              <span className="text-neutral-500">·</span>
              <time className="text-neutral-500">
                {new Date(tweet.createdAt).toLocaleDateString()}
              </time>
            </div>
            <p className="mt-2 whitespace-pre-wrap text-neutral-100">{tweet.text}</p>
            {tweet.mediaUrl && (
              <img 
                src={tweet.mediaUrl} 
                alt="" 
                className="mt-3 rounded-lg w-full object-cover max-h-96"
              />
            )}
          </div>
        </div>
      </CardContent>
      <Separator className="bg-neutral-800" />
      <CardFooter className="justify-between py-4">
        <Button variant="ghost" size="sm" className="gap-2 text-neutral-500 hover:text-blue-400">
          <MessageCircle className="h-4 w-4" />
          <span>{tweet.replyCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-neutral-500 hover:text-green-400">
          <Repeat2 className="h-4 w-4" />
          <span>{tweet.retweetCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-neutral-500 hover:text-pink-600">
          <Heart className="h-4 w-4" />
          <span>{tweet.likeCount}</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={handleShare} className="text-neutral-500 hover:text-blue-400">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}