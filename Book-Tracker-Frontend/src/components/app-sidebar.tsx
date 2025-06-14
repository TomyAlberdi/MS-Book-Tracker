import {
  BookHeart,
  BookUser,
  LibraryBig,
  Send,
  Settings as Settings2
} from "lucide-react";
import * as React from "react";

import Feedback from "@/app/Pages/Feedback/Feedback";
import Settings from "@/app/Pages/Settings/Settings";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import NavUser from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();

  const data = {
    navMain: [
      {
        title: t("Books"),
        url: "/books",
        icon: LibraryBig,
        isActive: true,
        items: [
          {
            title: t("Reading"),
            url: "/books/reading",
          },
          {
            title: t("WantToRead"),
            url: "/books/want-to-read",
          },
        ],
      },
      {
        title: t("Profile"),
        url: "/user",
        icon: BookUser,
        isActive: true,
        items: [
          {
            title: t("Diary"),
            url: "/user/diary",
          },
          {
            title: t("Reviews"),
            url: "/user/reviews",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: t("Feedback"),
        icon: Send,
        content: Feedback,
      },
      {
        title: t("Settings"),
        icon: Settings2,
        content: Settings,
      },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BookHeart className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Book Tracker</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
