function Dashboard({posts}) {
    return (
        <ul>
            <h2>Modulos</h2>
            {posts.results.map((post) => (
        <li key={post.id}>{post.name}</li>
                ))}
        </ul>
    )
}

export async function getServerSideProps() {
    // example api
    // https://devaria-api.azurewebsites.net/api/categoria/calendario
    const res = await fetch('http://127.0.0.1:8000/api/modules/')
    const posts = await res.json()

    // console.log(posts)

    return {
        props: {
          posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        // revalidate: 10, // In seconds
      }
  }

export default Dashboard