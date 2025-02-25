import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
    <main>
        <div className='article'>
            <h2>Blog Post Title</h2>
            <p>Content of the first blog post...</p>
        </div>
        <div className='article'>
            <h2>Another Blog Post</h2>
            <p>Content of the second blog post...</p>
        </div>
    </main>
    <div className='footer'>
        <p>© 2023 My Simple Blog</p>
    </div>
    </>
  )
}

export default App
