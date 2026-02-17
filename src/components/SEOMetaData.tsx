/**
 * SEO Keywords Display Component
 * Shows relevant keywords for search engines (can be hidden visually)
 */

interface SEOMetaDataProps {
  visible?: boolean;
}

export const SEOMetaData = ({ visible = false }: SEOMetaDataProps) => {
  /*
   * Keywords list used for on-page SEO metadata and (optionally) hidden
   * keyword snippets. We include keywords for "institute" and "coaching"
   * because Campus24by7 targets not only schools and colleges but also
   * institutes and coaching centres. Adding these terms improves relevance
   * for search queries like "coaching management software" or
   * "institute management system" which are high-intent keywords for
   * lead generation (demo bookings / sales enquiries).
   *
   * Reasoning summary:
   * - "Institute" covers vocational training centres, professional
   *   institutes and other non-school academic bodies that search for ERP
   *   solutions.
   * - "Coaching" covers test-prep and tuition centres; these businesses
   *   search using slightly different terms (batch management, test-series,
   *   coaching fees management) so including them captures more organic
   *   traffic and sales leads.
   */
  const keywords = [
    // Primary keywords
    "school management system",
    "college management software",
    "school ERP",
    "college ERP",
    "institute management system",
    "coaching management system",
    "coaching center software",

    // Specific features
    "student management system",
    "fee management system",
    "attendance management software",
    "fee collection system",
    "exam management system",
    "transport management system",
    "batch management system",
    "test series management",

    // Sales-focused
    "best school management system",
    "affordable school ERP",
    "cloud-based school management",
    "school management software price",
    "best value school ERP",

    // Location-based
    "school management system India",
    "college management software India",
    "coaching management system India",

    // Variations
    "school CRM",
    "college CRM",
    "coaching CRM",
    "educational ERP",
    "academic management software",
  ];

  return (
    <div
      className={visible ? "mb-8" : "sr-only"}
      role="complementary"
      aria-label="SEO Keywords"
    >
      {visible && (
        <>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Solutions We Provide:
          </h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </>
      )}
      {!visible && (
        <p>
          Campus24by7 offers the best school management system, college
          management software, and educational ERP solutions. Our school ERP
          provides student management, fee collection, attendance tracking,
          exam management, transport management, and more. Perfect for schools,
          colleges, and institutes in India. Book a free demo today!
        </p>
      )}
    </div>
  );
};

export default SEOMetaData;
