import { PostService } from "@/services/post";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function Home() {
  //fetching the data
  const posts = await PostService.getPosts();

  return (
    <div className="flex    justify-center w-full">
      <Table className="w-full max-w-4xl  mx-auto !my-[50px]">
        <TableHeader className="bg-black text-white font-semibold ">
          <TableRow>
            <TableHead className="w-[100px]  ">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts &&
            posts.length &&
            posts?.map((post: any) => (
              <TableRow
                key={post.id}
                className="hover:bg-black transition-all  duration-500 text-black hover:text-white  !cursor-pointer"
              >
                <TableCell className="font-medium">
                  <Link href={`/post/${post.id}`}>{post.id}</Link>
                </TableCell>
                <TableCell className="">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </TableCell>
                <TableCell className="d-hiddedn md:d-inline">
                  <Link href={`/post/${post.id}`}>{post.body}</Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
