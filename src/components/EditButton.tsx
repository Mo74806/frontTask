"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const EditButton = ({ postId }: { postId: string }) => {
  const router = useRouter();
  console.log(postId);
  const handleEdit = () => {
    router.push(`/update/${postId}`);
  };

  return (
    <Button
      onClick={handleEdit}
      className="w-auto rounded-[8px] px-5 min-w-[200px] bg-black text-white hover:text-black"
    >
      Edit
    </Button>
  );
};

export default EditButton;
