import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading....</div>

// SPA 방식의 리액트 애플리케이션은 처음에 필요한 모든 컴포넌트를 로딩하기 때문에 초기 실행 시간이 오래 걸리는 단점이 있다.
// 이ㄹ 해결하기 위해 <Suspense>와 <Lazy>를 이용해서 분할 로딩을 하는데 이를 '코드분할'이라고 한다.
const Main = lazy(() => import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
])

export default root;