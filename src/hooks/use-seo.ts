/**
 * Hook for managing SEO metadata on page load
 */
import { useEffect } from "react";
import { updatePageSEO, addStructuredData, SEO_CONFIG } from "@/lib/seo";

interface UseSEOOptions {
  title: string;
  description: string;
  keywords?: string[];
  jsonld?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  jsonld,
}: UseSEOOptions) => {
  useEffect(() => {
    // Update meta tags
    updatePageSEO(title, description, keywords);

    // Add structured data if provided
    if (jsonld) {
      addStructuredData(jsonld);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, keywords, jsonld]);
};

export const useHomePageSEO = () => {
  const config = SEO_CONFIG.getPageConfig("home");
  useSEO({
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    jsonld: JSON.parse(SEO_CONFIG.getStructuredData("product")),
  });
};
