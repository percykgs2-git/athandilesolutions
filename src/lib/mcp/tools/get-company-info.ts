import { defineTool } from "@lovable.dev/mcp-js";

const company = {
  name: "Athandile Solutions",
  tagline: "See IT with US",
  summary:
    "Athandile Solutions is an IT consulting company providing end-to-end web solutions and digital presence for businesses worldwide.",
  website: "https://athandilesolutions.lovable.app",
  pages: ["/", "/about", "/services", "/portfolio", "/careers", "/clients", "/contact"],
};

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description: "Return basic public information about Athandile Solutions (name, tagline, summary, website, main pages).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
    structuredContent: company,
  }),
});
