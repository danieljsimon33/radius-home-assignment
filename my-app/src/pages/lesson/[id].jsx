import { v4, uuidv4 } from "uuid";

export default function Lesson({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
