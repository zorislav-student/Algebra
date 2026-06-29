function GithubUser({ user }) {
  const { avatar_url, bio, name, location } = user;

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img src={avatar_url} style={styles.image} alt="no-logo" />
        <span style={styles.name}>{name}</span>
      </div>
      <p>
        <strong>BIO: {bio}</strong>
      </p>
      <p>
        <strong>LOCATION: {location}</strong>
      </p>
    </div>
  );
}

export default GithubUser;

const styles = {
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    marginLeft: 36,
    display: "inline",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
  },
  container: {
    textAlign: "justify",
  },
};
