"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  useRouter().push("/");
}
