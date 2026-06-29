function GithubRepos({ repos }) {
  return (
    <>
      <p>
        <strong>REPOSITORIES:</strong>
        <ul style={{ listStyleType: "none" }}>
          {repos.map((repo) => (
            <li keys={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </p>
    </>
  );
}

export default GithubRepos;
