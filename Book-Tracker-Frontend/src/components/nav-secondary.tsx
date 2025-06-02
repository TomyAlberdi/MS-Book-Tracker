import { type LucideIcon } from "lucide-react";
import * as React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    icon: LucideIcon;
    content: React.ComponentType;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Dialog>
                <DialogTrigger asChild>
                  <SidebarMenuButton size="sm" className="cursor-pointer">
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </DialogTrigger>
                <DialogContent aria-describedby={undefined}>
                  <item.content />
                </DialogContent>
              </Dialog>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
