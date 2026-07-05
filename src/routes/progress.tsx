import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/progress")({
  component: () => <Outlet />,
});