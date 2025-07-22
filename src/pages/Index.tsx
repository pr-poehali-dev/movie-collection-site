import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const [selectedYear, setSelectedYear] = useState("Все");

  const allMovies = [
    {
      id: 1,
      title: "Gibota",
      originalTitle: "Gibota",
      year: "2024",
      genre: "Sci-Fi",
      rating: 8.7,
      kinopoiskRating: 8.7,
      imdbRating: 8.5,
      image: "/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg",
      description: "Футуристический триллер о борьбе за выживание в мире высоких технологий",
      director: "Андрей Тарковский",
      duration: "142 мин",
      country: "Россия",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Neon City",
      originalTitle: "Neon City",
      year: "2024",
      genre: "Action",
      rating: 7.9,
      kinopoiskRating: 7.9,
      imdbRating: 7.6,
      image: "/img/8d7ddd2b-03a0-4a34-89c3-9cc39714fffd.jpg",
      description: "Киберпанк-боевик в неоновых джунглях мегаполиса будущего",
      director: "Ридли Скотт",
      duration: "118 мин",
      country: "США",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Midnight Dreams",
      originalTitle: "Midnight Dreams",
      year: "2024",
      genre: "Drama",
      rating: 9.1,
      kinopoiskRating: 9.1,
      imdbRating: 8.9,
      image: "/img/55b4572c-f17f-46d0-a8e5-dc999ca101be.jpg",
      description: "Глубокая драма о поисках смысла жизни и человеческих отношениях",
      director: "Кристофер Нолан",
      duration: "165 мин",
      country: "Великобритания",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Cosmic Odyssey",
      originalTitle: "Cosmic Odyssey",
      year: "2023",
      genre: "Sci-Fi",
      rating: 8.2,
      kinopoiskRating: 8.2,
      imdbRating: 8.0,
      image: "/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg",
      description: "Эпическое путешествие по галактике в поисках новой родины",
      director: "Дени Вильнёв",
      duration: "155 мин",
      country: "США",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Urban Justice",
      originalTitle: "Urban Justice",
      year: "2023",
      genre: "Action",
      rating: 7.6,
      kinopoiskRating: 7.6,
      imdbRating: 7.4,
      image: "/img/8d7ddd2b-03a0-4a34-89c3-9cc39714fffd.jpg",
      description: "Боевик о борьбе за справедливость в криминальном городе",
      director: "Джон Уик",
      duration: "125 мин",
      country: "США",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Silent Hearts",
      originalTitle: "Silent Hearts",
      year: "2022",
      genre: "Drama",
      rating: 8.9,
      kinopoiskRating: 8.9,
      imdbRating: 8.7,
      image: "/img/55b4572c-f17f-46d0-a8e5-dc999ca101be.jpg",
      description: "Трогательная история о любви и потерях во время войны",
      director: "Алехандро Гонсалес Иньярриту",
      duration: "138 мин",
      country: "Мексика",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 7,
      title: "Nightmare Valley",
      originalTitle: "Nightmare Valley",
      year: "2022",
      genre: "Horror",
      rating: 7.4,
      kinopoiskRating: 7.4,
      imdbRating: 7.1,
      image: "/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg",
      description: "Психологический хоррор о темных секретах маленького городка",
      director: "Ари Астер",
      duration: "105 мин",
      country: "США",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Love Actually Happens",
      originalTitle: "Love Actually Happens",
      year: "2021",
      genre: "Romance",
      rating: 8.1,
      kinopoiskRating: 8.1,
      imdbRating: 7.8,
      image: "/img/55b4572c-f17f-46d0-a8e5-dc999ca101be.jpg",
      description: "Романтическая комедия о неожиданных встречах и судьбе",
      director: "Ричард Кертис",
      duration: "128 мин",
      country: "Великобритания",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const genres = ["Все", "Action", "Drama", "Sci-Fi", "Horror", "Romance"];
  const years = ["Все", "2024", "2023", "2022", "2021"];

  const filteredMovies = allMovies.filter(movie => {
    const genreMatch = selectedGenre === "Все" || movie.genre === selectedGenre;
    const yearMatch = selectedYear === "Все" || movie.year === selectedYear;
    return genreMatch && yearMatch;
  });

  const movies = filteredMovies;

  const topMovies = [
    { position: 1, title: "Midnight Dreams", rating: 9.1, year: 2024 },
    { position: 2, title: "Silent Hearts", rating: 8.9, year: 2022 },
    { position: 3, title: "Gibota", rating: 8.7, year: 2024 },
    { position: 4, title: "Cosmic Odyssey", rating: 8.2, year: 2023 },
    { position: 5, title: "Love Actually Happens", rating: 8.1, year: 2021 }
  ];

  const news = [
    {
      title: "Объявлены номинанты на премию «Оскар» 2024",
      category: "Премии",
      time: "2 часа назад",
      image: "/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg"
    },
    {
      title: "Новый трейлер блокбастера «Космическая одиссея 2»",
      category: "Трейлеры",
      time: "4 часа назад",
      image: "/img/8d7ddd2b-03a0-4a34-89c3-9cc39714fffd.jpg"
    },
    {
      title: "Интервью с режиссёром фильма «Gibota»",
      category: "Интервью",
      time: "6 часов назад",
      image: "/img/55b4572c-f17f-46d0-a8e5-dc999ca101be.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FF6600] rounded flex items-center justify-center">
                <Icon name="Film" size={18} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-[#FF6600]">Кинопоиск</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium">Фильмы</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium">Сериалы</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium">Новости</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium">Рецензии</a>
              <a href="#" className="text-gray-700 hover:text-[#FF6600] transition-colors font-medium">Топ</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Фильмы, сериалы, персоны..."
                className="w-64 px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FF6600] focus:outline-none text-sm"
              />
              <Icon name="Search" size={16} className="absolute right-3 top-2.5 text-gray-400" />
            </div>
            <Button size="sm" className="bg-[#FF6600] hover:bg-[#E55A00] text-white">
              Войти
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg"
                    alt="Gibota"
                    className="w-full max-w-64 rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#FF6600] text-white">Новинка</Badge>
                    <Badge variant="outline" className="border-gray-300">2024</Badge>
                  </div>
                  <h1 className="text-3xl font-bold mb-4">Gibota</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center text-white font-bold">
                        8.7
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>Кинопоиск</div>
                        <div className="text-xs">142 оценки</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        8.5
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>IMDb</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Футуристический триллер о борьбе за выживание в мире высоких технологий. 
                    История о человеке, который должен сделать выбор между технологическим прогрессом и человечностью.
                  </p>
                  <div className="flex gap-3">
                    <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть трейлер
                    </Button>
                    <Button variant="outline" className="border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white">
                      <Icon name="BookmarkPlus" size={16} className="mr-2" />
                      В избранное
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Movies with Filters */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Популярные фильмы</h2>
                <Button variant="ghost" className="text-[#FF6600] hover:bg-[#FF6600]/10">
                  Все фильмы →
                </Button>
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Жанр:</span>
                  {genres.map((genre) => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedGenre(genre)}
                      className={
                        selectedGenre === genre
                          ? "bg-[#FF6600] hover:bg-[#E55A00] text-white h-8"
                          : "text-gray-600 hover:bg-gray-200 h-8"
                      }
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Год:</span>
                  {years.map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedYear(year)}
                      className={
                        selectedYear === year
                          ? "bg-[#FF6600] hover:bg-[#E55A00] text-white h-8"
                          : "text-gray-600 hover:bg-gray-200 h-8"
                      }
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Найдено {movies.length} {movies.length === 1 ? 'фильм' : movies.length < 5 ? 'фильма' : 'фильмов'}
                  {selectedGenre !== "Все" && ` в жанре «${selectedGenre}»`}
                  {selectedYear !== "Все" && ` за ${selectedYear} год`}
                </p>
              </div>

              {/* Movies Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {movies.map((movie) => (
                  <Card key={movie.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white border border-gray-200">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-24 h-36 flex-shrink-0">
                          <img 
                            src={movie.image} 
                            alt={movie.title}
                            className="w-full h-full object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-sm mb-1 leading-tight">{movie.title}</h3>
                              <p className="text-xs text-gray-500">{movie.originalTitle}, {movie.year}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-6 h-6 bg-[#FF6600] rounded flex items-center justify-center text-white text-xs font-bold">
                                {movie.rating}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 space-y-1">
                            <p>{movie.genre} • {movie.duration}</p>
                            <p>Реж. {movie.director}</p>
                            <p className="text-gray-500 leading-tight">{movie.description.substring(0, 80)}...</p>
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-[#FF6600] hover:bg-[#FF6600]/10">
                              <Icon name="Play" size={12} className="mr-1" />
                              Трейлер
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-gray-600 hover:bg-gray-100">
                              <Icon name="BookmarkPlus" size={12} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Top 250 */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Trophy" size={20} className="text-[#FF6600]" />
                  <h3 className="font-bold">Топ-250</h3>
                </div>
                <div className="space-y-3">
                  {topMovies.map((movie) => (
                    <div key={movie.position} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors">
                      <div className="w-6 h-6 bg-[#FF6600] rounded text-white text-xs font-bold flex items-center justify-center">
                        {movie.position}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{movie.title}</p>
                        <p className="text-xs text-gray-500">{movie.year}</p>
                      </div>
                      <div className="w-8 h-8 bg-[#FF6600] rounded-full text-white text-xs font-bold flex items-center justify-center">
                        {movie.rating}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-[#FF6600] hover:bg-[#FF6600]/10">
                  Весь топ →
                </Button>
              </CardContent>
            </Card>

            {/* News */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Newspaper" size={20} className="text-[#FF6600]" />
                  <h3 className="font-bold">Новости</h3>
                </div>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <div key={index} className="flex gap-3 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium leading-tight mb-1">{item.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="text-[#FF6600]">{item.category}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 text-[#FF6600] hover:bg-[#FF6600]/10">
                  Все новости →
                </Button>
              </CardContent>
            </Card>

            {/* Ad Banner */}
            <Card className="bg-gradient-to-br from-[#FF6600] to-[#E55A00] text-white border-0">
              <CardContent className="p-4 text-center">
                <Icon name="Star" size={32} className="mx-auto mb-3" />
                <h3 className="font-bold mb-2">Подписка Плюс</h3>
                <p className="text-sm mb-4 opacity-90">Смотрите фильмы без рекламы и в высоком качестве</p>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6600]">
                  Подключить
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[#FF6600] rounded flex items-center justify-center">
                  <Icon name="Film" size={14} className="text-white" />
                </div>
                <span className="font-bold text-[#FF6600]">Кинопоиск</span>
              </div>
              <p className="text-sm text-gray-600">Все о кино и сериалах</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Фильмы и сериалы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Популярное</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Топ-250</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Рецензии</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Интервью</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Обратная связь</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Реклама</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 Кинопоиск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;