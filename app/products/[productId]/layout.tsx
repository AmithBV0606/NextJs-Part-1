import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 className="text-white">Featured products!!</h2>
    </>
  );
}
