import BooksMain from "@/app/Pages/Books/BooksMain";
import BooksReading from "@/app/Pages/Books/BooksReading";
import WantToRead from "@/app/Pages/Books/WantToRead";
import Home from "@/app/Pages/Home/Home";
import NotFound from "@/app/Pages/NotFound/NotFound";
import UserDiary from "@/app/Pages/User/UserDiary";
import UserMain from "@/app/Pages/User/UserMain";
import UserReviews from "@/app/Pages/User/UserReviews";

export const routesConfig = [
  {
    path: "*",
    element: <NotFound />,
  },
  { index: true, element: <Home /> },
  { path: "/books", element: <BooksMain /> },
  { path: "/books/reading", element: <BooksReading /> },
  { path: "/books/want-to-read", element: <WantToRead /> },
  {
    path: "/user",
    element: <UserMain />,
  },
  { path: "/user/diary", element: <UserDiary /> },
  { path: "/user/reviews", element: <UserReviews /> },
  //TODO: Create and route book details component
  //TODO: Create and route author details component
];
