import React, { useState } from 'react'
import Search from './components/Search'
import Preview from './components/Preview'
import logo from "../public/logo.jpeg"

function App() {
  const [data,setData] = useState({});
  const[isLoading, setIsLoading] = useState(true);

  return (
    <>
    <div className='flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg'>
    <div>
      <img className="w-28 rounded-md" src={logo} alt="" />
    </div>
      <div>
        <Search setIsLoading={setIsLoading} setData={setData}/>
      </div>
      <div>
        <Preview 
          avatar_url={data.avatar_url}
          bio={data.bio}
          email={data.email}
          followers={data.followers}
          following={data.following}
          login={data.login}
          location={data.location}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          blog={data.blog}
          date={data.created_at?.split("T")[0]}
          url = {data.html_url}
        />
      </div>
    </div>
    </>
  )
}

export default App
