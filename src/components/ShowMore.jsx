// "Show all (n)" / "Show less" button under a shortened list.
export default function ShowMore({ open, total, onToggle, showAll, showLess, controls }) {
  return (
    <button type="button" className="show-more" aria-expanded={open} aria-controls={controls} onClick={onToggle}>
      {open ? showLess : showAll.replace("{n}", total)}
    </button>
  );
}
