import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function LoadingSkeleton() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="justify-between py-4">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-8" />
      </CardFooter>
    </Card>
  );
}
