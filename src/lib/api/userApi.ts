type User = {
  name: string;
  email: string;
  password: string;
};

export const createUser = async (data: User) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};
