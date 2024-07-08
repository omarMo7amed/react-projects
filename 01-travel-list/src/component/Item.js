export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <input
        type="checkbox"
        value={!item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.description} {item.quantity}
        </span>
        <button onClick={(e) => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
