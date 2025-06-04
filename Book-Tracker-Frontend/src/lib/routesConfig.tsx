import BooksMain from "@/app/Pages/BooksMain";
import Home from "@/app/Pages/Home";
import NotFound from "@/app/Pages/NotFound";
import UserDiary from "@/app/Pages/User/UserDiary";
import UserMain from "@/app/Pages/User/UserMain";
import UserReviews from "@/app/Pages/User/UserReviews";
import WantToRead from "@/app/Pages/WantToRead";

export const routesConfig = [
  {
    path: "*",
    element: <NotFound />,
  },
  { index: true, element: <Home /> },
  { path: "/books", element: <BooksMain /> },
  { path: "/books/want-to-read", element: <WantToRead /> },
  {
    path: "/user",
    element: <UserMain />,
  },
  { path: "/user/diary", element: <UserDiary /> },
  { path: "/user/reviews", element: <UserReviews /> },
  //TODO: Create and route book details component
];
