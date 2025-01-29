export interface Tweet {
  id: string;
  text: string;
  username: string;
  name: string;
  profileImageUrl: string;
  mediaUrl?: string;
  createdAt: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
}

export async function getTweets(): Promise<Tweet[]> {
  // Note: This would be replaced with actual Twitter API integration
  // For now returning mock data for static site demo
  return [
    {
      id: "1",
      text: "Just launched my new website! Check it out at example.com #webdev #coding",
      username: "johndoe",
      name: "John Doe",
      profileImageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      createdAt: new Date().toISOString(),
      replyCount: 5,
      retweetCount: 2,
      likeCount: 10
    },
    {
      id: "2",
      text: "Working on some exciting new features! Can't wait to share them with you all 🚀",
      username: "janedoe",
      name: "Jane Doe",
      profileImageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      createdAt: new Date().toISOString(),
      replyCount: 3,
      retweetCount: 1,
      likeCount: 8
    }
  ];
}
