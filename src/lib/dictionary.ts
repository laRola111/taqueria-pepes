// src/lib/dictionary.ts
export type Language = 'es' | 'en';

export const dictionary = {
  es: {
    navbar: {
      home: "Inicio",
      menu: "Menú",
      location: "Ubicación",
      cta: "Pedir Ahora",
    },
    hero: {
      headline: "LOS MEJORES TACO'S DE AUSTIN",
      subheadline: "Auténtico sabor de trompo y tortillas hechas a mano todos los días.",
      cta: "Ver Menú",
      locationBtn: "Cómo Llegar",
    },
    about: {
      pretitle: "Nuestra Historia",
      title: "Tradición en cada bocado",
      description: "Traemos el sazón original de México a Austin. Recetas familiares que celebran nuestra cultura.",
      stats: [
         { value: "+20", label: "Años" },
         { value: "100%", label: "Maíz" },
         { value: "ATX", label: "Local" }
      ]
    },
    menu: {
      title: "Nuestro Menú",
      subtitle: "Sabor de Todos los Días",
      meatSection: {
        title: "Nuestras Carnes",
        subtitle: "Agrégalas a tus Tacos, Tortas, Burritos o Quesadillas",
        items: ["Pastor", "Bistec", "Suadero", "Campechano", "Chorizo", "Tripa", "Lengua", "Cabeza", "Pollo", "Carnitas"]
      },
      weekendSection: {
        title: "Especiales de Fin de Semana",
        subtitle: "Sábado y Domingo",
        description: "Preparados lentamente con recetas tradicionales para un sabor inigualable.",
        items: [
          { name: "Menudo", desc: "La tradicional pancita de res, limpia y sazonada a la perfección (Sábados y Domingos)." },
          { name: "Barbacoa de Chivo", desc: "Receta secreta de la casa, suave y jugosa (Sábados y Domingos)." },
          { name: "Consomé", desc: "El acompañante ideal con garbanzos, arroz y el jugo de la carne." },
          { name: "Carne por Libra", desc: "Lleva el sabor a casa por kilo o libra (Pastor, Barbacoa, Carnitas)." }
        ]
      },
      categories: [
        {
          id: "tacos_principales",
          title: "Nuestros Tacos",
          image: "/platillos/tacos.png",
          items: [
            { name: "Tacos Tradicionales", desc: "Tortilla hecha a mano con cebolla y cilantro." },
            { name: "Quesadillas", desc: "Queso fundido en tortilla de maíz o harina." },
            { name: "Gringas", desc: "Tortilla de harina con queso y carne al pastor." },
            { name: "Pambazos", desc: "Pan bañado en guajillo con papa, chorizo y crema." }
          ]
        },
        {
          id: "antojitos",
          title: "Antojitos Mexicanos",
          image: "/platillos/gorditas.png",
          items: [
            { name: "Gorditas", desc: "Rellenas de su guiso favorito, lechuga y queso." },
            { name: "Sopes", desc: "Base de maíz con frijoles, carne, lechuga y crema." },
            { name: "Huaraches", desc: "Base grande de maíz con carne, nopales y queso." }
          ]
        }
      ],
      specials: [
        { title: "¡JUEVES 2x1!", desc: "En Tacos al Pastor." },
        { title: "Sáb y Dom", desc: "Menudo y Barbacoa." }
      ],
      cta: "Ver Menú"
    },
    location: {
      title: "Visítanos",
      addressTitle: "Dirección",
      address: "8120 Research Blvd, Austin, TX", 
      hoursTitle: "Horario",
      hours: "9:00 AM - 10:00 PM",
      contactTitle: "Contacto",
      phone: "(512) 000-0000"
    },
    footer: {
        rights: "© 2025 Taquería Pepe's. Creado por Rueda La Rola Media."
    }
  },
  en: {
    navbar: { home: "Home", menu: "Menu", location: "Location", cta: "Order Now" },
    hero: { headline: "AUSTIN'S BEST TACOS", subheadline: "Handmade tortillas and authentic flavor every day.", cta: "See Menu", locationBtn: "Directions" },
    about: { pretitle: "History", title: "Tradition", description: "Authentic flavors.", stats: [] },
    menu: {
      title: "Menu",
      subtitle: "Daily Flavor",
      meatSection: { title: "Meats", subtitle: "Choose your favorite", items: ["Pastor", "Steak", "Suadero"] },
      weekendSection: {
        title: "Weekend Specials",
        subtitle: "Saturday & Sunday",
        description: "Slow-cooked recipes.",
        items: [
          { name: "Menudo", desc: "Traditional beef tripe soup." },
          { name: "Goat Barbacoa", desc: "Slow-cooked goat special." }
        ]
      },
      categories: [
        {
          id: "tacos_principales",
          title: "Our Tacos",
          image: "/platillos/tacos.png",
          items: [{ name: "Traditional Tacos", desc: "Handmade tortillas." }]
        }
      ],
      specials: [],
      cta: "Full Menu"
    },
    location: { title: "Location", addressTitle: "Address", address: "Austin, TX", hoursTitle: "Hours", hours: "9am-10pm", contactTitle: "Contact", phone: "(512) 000-0000" },
    footer: { rights: "© 2025 Taquería Pepe's. Created by Rueda La Rola Media." }
  }
};