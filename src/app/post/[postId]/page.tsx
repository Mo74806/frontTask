import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import { PostService } from "@/services/post";
import { PostDataInterface } from "@/types";
import React from "react";

const page = async ({ params: { postId } }: { params: { postId: string } }) => {
  //fetching data
  let postData: PostDataInterface = await PostService.getSinglePost(postId);
  try {
    postData = await PostService.getSinglePost(postId);
  } catch (e: any) {
    throw new Error(e);
  }
  return (
    <div className=" py-[100px]  justify-center w-[100%] ">
      <div className="w-auto inline">
        <div className="text-4xl font-bold bg-black !w-auto mb-[24px] text-white">
          Post Details :
        </div>
        <h2 className="text-2xl font-semibold font-mono ">{postData.title}</h2>
        <p className="text-lg">{postData.body}</p>
        <div className="flex gap-x-2 text-wrap mt-[24px] ms-auto justify-end">
          <EditButton postId={postId} />
          <DeleteButton postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default page;
