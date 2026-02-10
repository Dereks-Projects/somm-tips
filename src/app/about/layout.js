/*
  About route layout — exists solely to hold the metadata
  that was previously in page.js before it became a client component.
*/

export const metadata = {
  title: "About — Somm.Tips",
  description:
    "Learn about Somm.Tips, our philosophy, and the Informative Media ecosystem.",
};

export default function AboutLayout({ children }) {
  return children;
}