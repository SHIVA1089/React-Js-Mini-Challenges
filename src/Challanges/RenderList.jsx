const RenderList = () => {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 35,
      isActive: false,
    },
    {
      id: 3,
      name: "Charlie Nguyen",
      email: "charlie@example.com",
      age: 22,
      isActive: true,
    },
    {
      id: 4,
      name: "Diana Lopez",
      email: "diana@example.com",
      age: 30,
      isActive: true,
    },
    {
      id: 5,
      name: "Ethan Patel",
      email: "ethan@example.com",
      age: 27,
      isActive: false,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl  text-center font-bold py-5">
        Users List: has {users.length} members!
      </h1>
      <ul className="flex justify-center items-center flex-col h-screen space-y-6">
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Status:</strong> {user.isActive ? "Active" : "Inactive"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderList;
