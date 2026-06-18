import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { VISIBILITY_TYPES } from "../constants/const";

function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
}

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

export default function VisibilityToolbar({
  visibilityType,
  onVisibilityChange,
}) {
  function handle(value) {
    onVisibilityChange(value);
  }

  return (
    <ButtonGroup>
      <Button
        variant={getButtonVariant(visibilityType, ALL)}
        size="sm"
        onClick={() => handle(ALL)}
      >
        All
      </Button>
      <Button
        variant={getButtonVariant(visibilityType, ACTIVE)}
        size="sm"
        onClick={() => handle(ACTIVE)}
      >
        Active
      </Button>
      <Button
        variant={getButtonVariant(visibilityType, COMPLETED)}
        size="sm"
        onClick={() => handle(COMPLETED)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}
