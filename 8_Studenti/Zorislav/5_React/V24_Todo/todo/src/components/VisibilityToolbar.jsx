import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function VisibilityToolbar() {
  return (
    <ButtonGroup>
      <Button size="sm">All</Button>
      <Button size="sm">Active</Button>
      <Button size="sm">Completed</Button>
    </ButtonGroup>
  );
}
