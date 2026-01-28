"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Product Page</h1>

      <button onClick={() => router.push("/product/7")}>
        go to product id no. 7
      </button>
    </div>
  );
}
