import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <>
      <div>
        <div className="lg:w-[50%] md:w-[90%] mx-auto border border-black   p-[50px] text-black rounded-[10px]">
          <Skeleton className="w-[50%] bg-gray-400 h-[40px]  mb-2 mt-[200px]" />
        </div>
      </div>
    </>
  );
}
