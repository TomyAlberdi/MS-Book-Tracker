"use client";

import {
  BookOpenCheck,
  BookUser,
  ChevronsUpDown,
  Eraser,
  PenLine,
  Settings,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUserContext } from "@/context/UseUserContext";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const { isMobile } = useSidebar();
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  //TODO: Implement user settings dialog
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex justify-center items-center">
                <BookUser />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user ? user.username : "Register / Login"}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {user ? (
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex justify-center items-center">
                    <BookUser />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user.username}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
            ) : (
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => navigate("/register")}>
                  <PenLine />
                  Register
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/login")}>
                  <BookOpenCheck />
                  Login
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            {user && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <Eraser />
                  Log out
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavUser;
