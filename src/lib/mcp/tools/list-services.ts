import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { title: "IT Consulting", description: "UX-optimised mobile and web-based applications built to fit your requirements, from simple document sharing apps to comprehensive automation systems." },
  { title: "Web Development & Design", description: "Professional web development that attracts the right visitors and guides them toward desired results." },
  { title: "Brand Design & Corporate Identity", description: "Creative and practical branding solutions backed by decades of design experience." },
  { title: "SEO", description: "Search Engine Optimisation that helps your company reach the next level and compete with bigger enterprises." },
  { title: "Social Media Marketing", description: "Data-driven social media campaigns that amplify brand presence across major platforms." },
  { title: "ICT Solutions", description: "A unique methodology to manage and optimise your technology infrastructure for seamless operations." },
  { title: "Mobile App Development", description: "Native and cross-platform mobile applications on iOS and Android." },
  { title: "Data Analytics", description: "Turn data into actionable insights with advanced analytics and visualisation." },
  { title: "Cybersecurity", description: "Vulnerability assessments and complete security implementations to protect your digital assets." },
  { title: "Cloud Solutions", description: "End-to-end cloud migration and management that scales with your business." },
  { title: "Hosting Solutions", description: "Secure, high-performance hosting built for reliability and speed." },
  { title: "Business Growth Through Leveraging IT", description: "Tools and strategies to help your business thrive in a digital-first world." },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services Athandile Solutions offers, with a short description of each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
