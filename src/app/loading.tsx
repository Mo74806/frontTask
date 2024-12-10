import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <>
      <Skeleton className="w-[100%] bg-gray-400 h-[40px]  mb-4 mt-[100px]" />
      <div className="flex flex-col gap-2 ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index: number) => (
          <Skeleton key={index} className="w-[100%] bg-gray-400 h-[20px] " />
        ))}
      </div>
    </>
  );
}
