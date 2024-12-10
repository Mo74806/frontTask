"use client";
import React, { useState } from "react";
// import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PostService } from "@/services/post";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import PostForm from "@/components/PostForm";

const Create = () => {
  return (
    <div className=" w-full  items-center flex h-100 justify-center mt-[100px]">
      <div className="lg:w-[80%] md:w-[90%] mx-auto border border-black   p-[50px] text-black rounded-[10px]">
        <PostForm type="create" />
      </div>
    </div>
  );
};

export default Create;
