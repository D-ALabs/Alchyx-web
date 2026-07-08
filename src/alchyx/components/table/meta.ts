import type { ComponentMeta } from "../../registry/types";

export const tableMeta: ComponentMeta = {
  slug: "table",
  name: "Table",
  category: "Data Display",
  summary: "Styled primitives over native table elements — bordered, scrollable, hairline rows.",
  description:
    "Table is a set of thin wrappers over the native table elements (Table / TableHeader / TableBody / TableRow / TableHead / TableCell) so semantics, colSpan, and scope pass straight through. It consolidates the GitHub Primer border/hairline anatomy, the Ant Design column ergonomics, and the Twilio Paste scroll-container pattern: a bordered radius-card surface, a --surface2 mono-caps header band, and --bd2 hairline row dividers with an opt-in hover fill.",
  tags: ["table", "data", "grid", "rows", "columns", "thead", "tbody", "th", "td", "datagrid"],
  lineage: ["GitHub Primer", "Ant Design", "Twilio Paste"],
  status: "stable",
  recipe: "TB-01",
  a11y: [
    "Renders real <table>/<thead>/<tbody>/<tr>/<th>/<td> elements, so assistive tech announces rows, columns, and headers natively.",
    "TableHead is a <th> — keep its default scope=\"col\" so screen readers associate each column with its data cells.",
    "The wrapping container scrolls horizontally; give it tabIndex + an aria-label (via containerClassName's element) to make wide tables keyboard-pannable, and it gets a visible :focus-visible ring.",
    "Row hover is a subtle background change only; interactive rows get a :focus-visible ring, and all motion is dropped under prefers-reduced-motion.",
  ],
  props: [
    {
      name: "containerClassName",
      type: "string",
      description:
        "Class for the scrollable, bordered container wrapping the <table> (constrain width/height here). — Table",
    },
    {
      name: "hover",
      type: "boolean",
      default: "false",
      description: "Add a subtle --surface2 hover fill; use on scannable body rows. — TableRow",
    },
  ],
  code: `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@alchyx/react";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow hover>
          <TableCell>Button</TableCell>
          <TableCell>Actions</TableCell>
          <TableCell>Stable</TableCell>
        </TableRow>
        <TableRow hover>
          <TableCell>Dialog</TableCell>
          <TableCell>Overlay</TableCell>
          <TableCell>Beta</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
};

export default tableMeta;
