import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const movies = [
    {
      id: 1,
      title: "Gibota",
      year: "2024",
      genre: "Sci-Fi Thriller",
      rating: 8.7,
      image: "/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg",
      description: "Футуристический триллер о борьбе за выживание в мире высоких технологий",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Neon City",
      year: "2024",
      genre: "Action",
      rating: 7.9,
      image: "/img/8d7ddd2b-03a0-4a34-89c3-9cc39714fffd.jpg",
      description: "Киберпанк-боевик в неоновых джунглях мегаполиса будущего",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Midnight Dreams",
      year: "2024",
      genre: "Drama",
      rating: 9.1,
      image: "/img/55b4572c-f17f-46d0-a8e5-dc999ca101be.jpg",
      description: "Глубокая драма о поисках смысла жизни и человеческих отношениях",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const collections = [
    { title: "Лучшие фильмы года", count: 25, icon: "Trophy" },
    { title: "Киберпанк коллекция", count: 18, icon: "Zap" },
    { title: "Драмы которые берут за душу", count: 32, icon: "Heart" },
    { title: "Космическая фантастика", count: 28, icon: "Rocket" }
  ];

  const reviews = [
    {
      title: "Gibota: Революция в жанре",
      author: "Алексей Кинокритик",
      excerpt: "Этот фильм переосмысливает границы научной фантастики...",
      rating: 5,
      date: "15 июля 2024"
    },
    {
      title: "Neon City и эстетика киберпанка",
      author: "Мария Фильмович",
      excerpt: "Визуальная феерия с глубоким философским подтекстом...",
      rating: 4,
      date: "12 июля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b border-[#B8860B]/20 bg-[#1A1A1A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Film" size={32} className="text-[#B8860B]" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Bebas Neue' }}>CinemaHub</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-[#B8860B] transition-colors">Главная</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Каталог</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Подборки</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Рецензии</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Новости</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Топ</a>
          </nav>
          <Button variant="outline" className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-black">
            Войти
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/img/35742cb4-64a6-46fc-959c-a3b84cc3600c.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Bebas Neue' }}>
            Мир кино
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Открой для себя лучшие фильмы, читай рецензии и смотри трейлеры
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-[#B8860B] hover:bg-[#B8860B]/80 text-black font-semibold">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлер
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Каталог фильмов
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Bebas Neue' }}>
            Популярные фильмы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <Card key={movie.id} className="bg-[#2A2A2A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300 hover-scale group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={movie.image} 
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="opacity-0 group-hover:opacity-100 bg-[#B8860B] hover:bg-[#B8860B]/80 text-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Icon name="Play" size={20} className="mr-2" />
                        Трейлер
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-[#B8860B] text-black">
                      ★ {movie.rating}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Bebas Neue' }}>{movie.title}</h3>
                    <p className="text-[#B8860B] mb-2">{movie.year} • {movie.genre}</p>
                    <p className="text-gray-400 text-sm">{movie.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 px-4 bg-[#2A2A2A]/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Bebas Neue' }}>
            Тематические подборки
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <Card key={index} className="bg-[#1A1A1A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300 hover-scale cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={collection.icon as any} size={48} className="text-[#B8860B] mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Bebas Neue' }}>{collection.title}</h3>
                  <p className="text-gray-400">{collection.count} фильмов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Bebas Neue' }}>
            Последние рецензии
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-[#2A2A2A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold flex-1" style={{ fontFamily: 'Bebas Neue' }}>{review.title}</h3>
                    <div className="flex ml-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-[#B8860B] fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#B8860B] mb-2">{review.author} • {review.date}</p>
                  <p className="text-gray-400 mb-4">{review.excerpt}</p>
                  <Button variant="ghost" className="text-[#B8860B] hover:bg-[#B8860B]/10 p-0">
                    Читать полностью →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 px-4 bg-[#2A2A2A]/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Bebas Neue' }}>
            Новости кинематографа
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#1A1A1A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#DC143C] text-white">Премьеры</Badge>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Bebas Neue' }}>Топ-10 ожидаемых фильмов осени</h3>
                <p className="text-gray-400 text-sm">Какие картины стоит ждать в ближайшие месяцы</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#B8860B] text-black">Интервью</Badge>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Bebas Neue' }}>Режиссёр о новом проекте</h3>
                <p className="text-gray-400 text-sm">Эксклюзивное интервью с создателем блокбастера</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-white text-black">Фестивали</Badge>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Bebas Neue' }}>Итоги Венецианского фестиваля</h3>
                <p className="text-gray-400 text-sm">Главные победители и открытия года</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#B8860B]/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Film" size={24} className="text-[#B8860B]" />
                <span className="font-bold" style={{ fontFamily: 'Bebas Neue' }}>CinemaHub</span>
              </div>
              <p className="text-gray-400 text-sm">Ваш гид в мире кинематографа</p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Bebas Neue' }}>Фильмы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Топ рейтинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Bebas Neue' }}>Контент</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Рецензии</a></li>
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-[#B8860B] transition-colors">Интервью</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Bebas Neue' }}>Связь</h4>
              <div className="flex space-x-4">
                <Icon name="Mail" size={20} className="text-gray-400 hover:text-[#B8860B] cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-[#B8860B] cursor-pointer transition-colors" />
                <Icon name="Share2" size={20} className="text-gray-400 hover:text-[#B8860B] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-[#B8860B]/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 CinemaHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;