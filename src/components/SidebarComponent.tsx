"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import {
  Calendar,
  CreativeCommons,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { AppSidebar } from "./AppSidebar";

export function SidebarComponent() {
  return (
    <>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
    </>
  );
}
