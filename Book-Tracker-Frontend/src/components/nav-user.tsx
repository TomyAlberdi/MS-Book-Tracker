"use client";

import {
  BookOpenCheck,
  BookUser,
  ChevronsUpDown,
  Eraser,
  PenLine
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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const { isMobile } = useSidebar();
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="h-8 w-8 text-sidebar-primary-foreground rounded-lg bg-sidebar-primary flex justify-center items-center">
                <BookUser className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-center">
                  {user ? user.username : `${t("Login")}`}
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
                  <div className="h-8 w-8 text-sidebar-primary-foreground rounded-lg bg-sidebar-primary flex justify-center items-center">
                    <BookUser className="size-4" />
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
                  {t("Register")}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/login")}>
                  <BookOpenCheck />
                  {t("Login")}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}
            {user && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <Eraser />
                  {t("Logout")}
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
