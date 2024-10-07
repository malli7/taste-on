import { Instagram, Phone, MailIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <header className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={
            "https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?t=st=1728072716~exp=1728076316~hmac=dc8f0bbb17e82b66108c99ba1cf678f980064fef75e8808b417b971fc2d482c3&w=1800"
          }
          alt="Taste On"
          width={1600}
          height={600}
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-2 text-center">
            <Image
              src={
                "https://res.cloudinary.com/naacloud/image/upload/v1728275327/lsrfqnszzvlwnxzcs3ne.png"
              }
              alt="Taste On"
              width={200}
              height={200}
              className=" object-cover"
            />
          </h1>
          <h1 className="text-5xl font-bold mb-2 text-center">
            <Image
              src={
                "https://res.cloudinary.com/naacloud/image/upload/v1728275466/umjji0tpe51ctqwxpxxx.png"
              }
              alt="Taste On"
              width={200}
              height={200}
              className=" object-cover"
            />
          </h1>
          <p className="text-2xl italic mb-4 text-center">
            The Name Says it, The Flavour Proves it
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <p className="text-xl mb-8">
            {`We pride ourselves on delivering mouth-watering meals that are not
            only packed with flavor but also made with the highest quality
            ingredients. Every dish is prepared with love, ensuring unbeatable
            freshness and hygiene standards, so you can indulge without worry.
            From Swiggy , Zomato and Magicpin, our delicious menu is just a
            click away, allowing you to enjoy premium-quality food at your own
            convenience and premises. Our commitment to offering delicious
            taste, uncompromising hygiene, and reasonable prices makes us your
            perfect choice for a satisfying meal. Whether you're craving a
            hearty meal or a light bite, TASTE ON delivers with care—straight to
            your doorstep!`}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="https://zomato.onelink.me/xqzv/7fxeshwt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors text-lg font-semibold"
            >
              Order on Zomato
            </Link>
            <Link
              href="https://www.swiggy.com/direct/brand/564970?source=swiggy-direct&subSource=generic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold"
            >
              Order on Swiggy
            </Link>
            <Link
              href="https://www.magicpin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors text-lg font-semibold"
            >
              Order on Magicpin
            </Link>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <Link
              href="https://www.instagram.com/taste___on"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors flex items-center gap-2"
            >
              <Instagram size={40} />
              <span className="text-lg font-semibold">Follow us</span>
            </Link>
            <Link
              href="https://wa.me/+916303351735"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors flex items-center gap-2"
            >
              <Phone size={40} />
              <span className="text-lg font-semibold">Contact us</span>
            </Link>
            <Link
              href="mailto:tasteonkitchens@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <MailIcon size={40} />
              <span className="text-lg font-semibold">Mail us</span>
            </Link>
          </div>
        </section>

        <section className="flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1CAv3IzNDgWD54FtDHwPLWVzZrATs_2AX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white text-2xl font-bold py-6 px-12 rounded-full transition-colors shadow-lg flex items-center gap-4"
          >
            <Menu size={32} />
            View Our Menu
          </Link>
        </section>
      </main>

      <footer className="bg-amber-900 text-amber-50 py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Taste On. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
