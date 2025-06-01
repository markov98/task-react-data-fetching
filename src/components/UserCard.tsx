import type { User } from "../types.ts";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem 0" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;