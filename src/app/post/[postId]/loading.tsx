import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <>
      <Skeleton className="w-[600px] bg-gray-400 h-[40px]  mb-2 mt-[200px]" />
      <div className="flex flex-col gap-2 ">
        <Skeleton className="w-[400px] bg-gray-400 h-[20px] " />
        <Skeleton className="w-[500px] bg-gray-400 h-[15px] " />
        <Skeleton className="w-[500px] bg-gray-400 h-[15px] " />
        <Skeleton className="w-[500px] bg-gray-400 h-[15px] " />
        <Skeleton className="w-[500px] bg-gray-400 h-[15px] " />
      </div>
      <div className="flex  gap-2  text-end justify-end items-center">
        <Skeleton className="w-[100px] bg-gray-400 h-[40px] " />
        <Skeleton className="w-[100px] bg-gray-400 h-[40px] " />
      </div>
    </>
  );
}
