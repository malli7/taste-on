import { Instagram, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <header className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={"https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?t=st=1728072716~exp=1728076316~hmac=dc8f0bbb17e82b66108c99ba1cf678f980064fef75e8808b417b971fc2d482c3&w=1800"}
          alt="Taste On"
          width={1600}
          height={600}
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          
          <h1 className="text-5xl font-bold mb-2 text-center">Taste On</h1>
          <p className="text-2xl italic mb-4 text-center">The Name Says it, The Flavour Proves it</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <p className="text-xl mb-8">
            Experience the rich tapestry of Indian cuisine, where every dish tells a story of tradition and taste.
            From aromatic curries to tandoori delights, embark on a culinary adventure at Spice Haven.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="https://zomato.onelink.me/xqzv/1j3nf21i"
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
              href="https://maps.app.goo.gl/YgpyhkwB2m8VJCvL9?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <MapPin size={40} />
              <span className="text-lg font-semibold">Find us</span>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken pieces" },
            { name: "Palak Paneer", description: "Spinach curry with soft cottage cheese cubes" },
            { name: "Biryani", description: "Fragrant rice dish with aromatic spices and your choice of protein" },
            { name: "Masala Dosa", description: "Crispy fermented crepe filled with spiced potatoes" },
            { name: "Tandoori Roti", description: "Whole wheat flatbread baked in a clay oven" },
            { name: "Gulab Jamun", description: "Sweet milk-solid balls soaked in rose-scented syrup" },
          ].map((dish) => (
            <div key={dish.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-amber-700">{dish.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-amber-900 text-amber-50 py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Taste On. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}