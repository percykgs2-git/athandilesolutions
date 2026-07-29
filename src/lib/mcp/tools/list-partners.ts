import { defineTool } from "@lovable.dev/mcp-js";

const partners = [
  "Investec",
  "Dynamic DNA",
  "Dynamic Visual Technologies (DVT)",
  "Calus Technologies",
  "Matlalenagri",
  "Mercedes Benz",
];

export default defineTool({
  name: "list_partners",
  title: "List partners",
  description: "List the partner organisations Athandile Solutions works with.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: partners.join("\n") }],
    structuredContent: { partners },
  }),
});
