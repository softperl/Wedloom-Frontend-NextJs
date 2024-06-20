"use client";

import { CanvasEditor } from "@/components/editor/canvasEditor";
import { ViewCard } from "@/components/editor/viewCard";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return params?.card === "edit-card" ? <CanvasEditor /> : <ViewCard />;
}
