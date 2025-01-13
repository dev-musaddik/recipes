import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import StudioNavbar from "./src/components/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ||"i3o0wv34";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! || "production";

export default defineConfig({
  basePath: "/studio",
  name: "Bloggers_Studio",
  title: "Bloggers Studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
