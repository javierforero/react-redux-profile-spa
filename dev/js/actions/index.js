export const selectedUser = (user) => {
  console.log("Clicked on: ", user.first);
  return {
      type: "User selected",
      payload: user
  }
};