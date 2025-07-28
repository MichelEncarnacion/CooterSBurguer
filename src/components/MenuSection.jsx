import React from 'react';

const burgers = [
  {
    name: "Hamburguesa Hawaina",
    description: "Carne 100% de res, queso cheddar,piña, lechuga fresca, jitomate, cebolla y aderezo especial en pan artesanal.",
    price: "$99 MXN",
    image: "/burguer/hawai.jpg", 
  },

  {
    name: "Chicken Crunchy",
    description: "Boneless con tu salsa favorita, tocino crujiente, doble queso,cebolla en pan artesanal.",
    price: "$189 MXN",
    image: "/burguer/Hpollo.jpg", 
  },

    { 
    name: "Super Mexa",
    description: "Deliciosa hamburguesa de carne de res, queso, chorizo, lechuga, jitomate y guacamole de la casa.",
    price: "$179 MXN",
    image: "/burguer/mexican.jpg", 
  },
   { 
    name: "Smash Burger",
    description: "Deliciosa hamburguesa de carne de res, queso amarillo, cebolla caramelizada y pan brioche.",
    price: "$149 MXN",
    image: "/burguer/Hjr.jpg", 
  }, { 
    name: "Hot Dog Italiano",
    description: "Delicioso hotdog con queso, pepperoni, jitomate y tocino.",
    price: "$99 MXN",
    image: "/burguer/hdog.jpg", 
  }, { 
    name: "DoriJocho",
    description: "Delicioso hotdog con queso, tocino y crijientes Doritos.",
    price: "$109 MXN",
    image: "/burguer/hdoritos.jpg", 
  },
];

export function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-yellow-400 py-16 px-4"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center drop-shadow-md">
        Nuestro Menú
      </h3>
      <p className="text-yellow-100 mb-10 text-center max-w-xl mx-auto">
        Nuestras hamburguesas premium, hechas con ingredientes frescos y pan Artesanal. ¡Elige tu favorita y déjate sorprender!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {burgers.map((burger, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img
              src={burger.image}
              alt={burger.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-semibold text-white mb-2">
                {burger.name}
              </h4>
              <p className="text-yellow-200 flex-grow">{burger.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-yellow-400">
                  {burger.price}
                </span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl font-medium transition-colors shadow">
                  Ordenar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
