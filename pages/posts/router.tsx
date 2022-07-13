import Code from 'components/prism/Code'
import Link from 'next/link';

const Router = () => {
  return (
    <div>
      <div className='title'># React Router</div>
      <div className='title sub'>Install React Router dependencies</div>
      <Code language='bash'>
        {
`# NPM
npm install react-router-dom
# yarn
yarn add react-router-dom
`
        }
      </Code>

      <div className='title sub'>Router 연결</div>
      <div><span className='box'>BrowserRouter</span> 를 import 하여 App 을 감싼다.</div>
      <Code language='js'>
        {
`// src/index.js
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Task1 from "./routes/Task1";
import Task2 from "./routes/Task2";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="task1" element={<Task1 />} />
        <Route path="task2" element={<Task2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
`
        }
      </Code>

      <div className='title sub'>Links 연결</div>
      <p><span className="box">Link</span> import</p>
      <Code language='js'>
        {
`// src/App.js
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>title</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
`
        }
      </Code>

      <div className='title sub'>'No Match' Route</div>
      <Code language='js'>
        {
`<Routes>
  <Route path="/" element={<App />}>
    <Route path="task1" element={<Task1 />} />
    <Route path="task2" element={<Task2 />} />
    <Route
      path="*"
      element={
        <main>
          <p>No Match</p>
        </main>
      }
    />
  </Route>
</Routes>
`
        }
      </Code>

      <div className='title sub'>&lt;outlet&gt;</div>
      <p><span className="box">&lt;Outlet&gt;</span>은 부모 경로 요소에서 자식 경로 요소를 렌더링하는 데 사용</p>
      <Code language='js'>
        {
`function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
`
        }
      </Code>
      <p>[Code 출처] <Link href='https://reactrouter.com/docs/en/v6/components/outlet'><a target='_blank'>https://reactrouter.com/docs/en/v6/components/outlet</a></Link></p>

      <div className='title'># Hooks</div>
      <div className='title usb'>useRoutes</div>
      <p>useRoutes Hook은 <span className="box">&lt;Routes&gt;</span>와 기능적으로 동일하지만 <span className="box">&lt;Route&gt;</span> 요소 대신 JavaScript 객체를 사용하여 경로를 정의한다.</p>
      <Code language='javascript'>
        {
`// src/App.js
import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks1 from "./pages/Tasks1";
import Tasks2 from "./pages/Tasks2";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "tasks1", element: <Tasks1 /> },
        { path: "tasks2", element: <Tasks2 /> },
      ],
    },
    { path: "about", element: <About /> },
  ]);

  return element;
}
`
        }
      </Code>

      <div className='title'># React Router v6</div>
      <div>React v16.8 이상 필요</div>
      <div>모든 <span className="box">&lt;Switch&gt;</span> 요소를 <span className="box">&lt;Routes&gt;</span>로 업그레이드</div>
      <div className='title sub'>Relative Routes and Links</div>
      <p>상대경로를 사용 할 수 있게 되면서 useRouteMatch ( match.path / match.url ) 가 사라짐</p>
      <Code language='js'>
        {
`<Switch>
  <Route path={\`\${match.path}/me\`}>
    <OwnUserProfile />
  </Route>
  <Route path={\`\${match.path}/:id\`}>
    <UserProfile />
  </Route>
</Switch>

// v6
<Routes>
  <Route path=":id" element={<UserProfile />} />
  <Route path="me" element={<OwnUserProfile />} />
</Routes>
`
        }
      </Code>
      <div className='title sub'>useHistory 대시 useNavigate 사용</div>
    </div>
  )
}
export default Router