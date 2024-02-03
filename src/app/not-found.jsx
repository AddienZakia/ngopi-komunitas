"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  useRouter().push("/");
}
