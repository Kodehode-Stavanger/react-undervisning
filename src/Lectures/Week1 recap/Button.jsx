function Button({ loggedIn, username }) {
  return loggedIn && <h1>Yes</h1>;
}

export default Button;
