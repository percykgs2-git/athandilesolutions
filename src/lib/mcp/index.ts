import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import listPartnersTool from "./tools/list-partners";
import getCompanyInfoTool from "./tools/get-company-info";

export default defineMcp({
  name: "athandile-solutions-mcp",
  title: "Athandile Solutions",
  version: "0.1.0",
  instructions:
    "Public read-only tools describing Athandile Solutions: the services offered, partner organisations, and general company info.",
  tools: [listServicesTool, listPartnersTool, getCompanyInfoTool],
});
