import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSelection(friend) {
    setSelectFriend(friend === selectFriend ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectFriend={selectFriend}
          onSelect={handleSelection}
        />
        {showAddFriend && (
          <FormAddFriend
            onSetFriends={handleAddFriend}
            onSubmit={handleShowAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
          key={selectFriend.id}
        />
      )}
    </div>
  );
}

function FriendList({ friends, selectFriend, onSelect }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelect={onSelect}
            selectFriend={selectFriend}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend, onSelect, selectFriend }) {
  const isSelected = selectFriend === friend;
  return (
    <li className={`${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name}></img>
      {friend.name}
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelect(friend)}>
        {selectFriend === friend ? "close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onSetFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onSetFriends(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🏜️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaid, setWhoIsPaid] = useState("user");
  const total = bill ? bill - paidByUser : "";

  function handleSubmitBill(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaid === "user" ? total : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmitBill(e)}>
      <h2>Split a Bill with {selectFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️Your expense</label>
      <input
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) < bill ? Number(e.target.value) : paidByUser
          )
        }
      />
      <label>🧑‍🤝‍🧑{selectFriend.name}'s expense</label>
      <input type="text" disabled value={total} />
      <label>🤑Who is paying the bill</label>
      <select value={whoIsPaid} onChange={(e) => setWhoIsPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="Friend">{selectFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
