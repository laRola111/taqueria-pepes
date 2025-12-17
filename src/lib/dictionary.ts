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
      headline: "LOS MEJORES TACOS DE AUSTIN",
      subheadline: "Auténtico sabor de trompo y tortillas hechas a mano todos los días.",
      cta: "Ver Menú",
      locationBtn: "Cómo Llegar",
    },
    about: {
      pretitle: "Nuestra Historia",
      title: "Tradición en cada bocado",
      description: "Traemos el sazón original de la Ciudad de México a Austin. Nuestras recetas han pasado de generación en generación.",
      stats: [
         { value: "+20", label: "Años" },
         { value: "100%", label: "Maíz" },
         { value: "ATX", label: "Local" }
      ]
    },
    menu: {
      title: "Nuestro Menú",
      subtitle: "Sabor Tradicional",
      meatSection: {
        title: "Elección de Carnes",
        subtitle: "Agrégalas a tus platillos favoritos",
        items: ["Pastor", "Bistec", "Suadero", "Campechano", "Chorizo", "Tripa", "Lengua", "Cabeza", "Pollo", "Carnitas"]
      },
      weekendSection: {
        title: "Especiales de Fin de Semana",
        subtitle: "Sábado y Domingo",
        description: "Preparados lentamente con recetas tradicionales para un sabor inigualable.",
        items: [
          { name: "Menudo", desc: "La tradicional pancita de res, limpia y sazonada a la perfección (Sábado y Domingo)." },
          { name: "Barbacoa de Chivo", desc: "Suave, jugosa y preparada con nuestra receta secreta (Sábado y Domingo)." },
          { name: "Consomé", desc: "Caldo caliente con garbanzos, arroz y el jugo de la carne." },
          { name: "Carne por Libra", desc: "Lleva el sabor a casa: Pastor, Barbacoa o Carnitas." }
        ]
      },
      categories: [
        {
          id: "tacos_principales",
          title: "Nuestros Tacos",
          image: "/platillos/tacos.png",
          items: [
            { name: "Tacos Tradicionales", desc: "Tortilla de maíz hecha a mano con cebolla y cilantro." },
            { name: "Quesadillas", desc: "Queso fundido en tortilla de maíz o harina con tu carne favorita." },
            { name: "Gringas", desc: "Tortilla de harina con queso y carne al pastor." },
            { name: "Pambazos", desc: "Pan bañado en guajillo con papa, chorizo, lechuga y crema." }
          ]
        },
        {
          id: "antojitos",
          title: "Antojitos",
          image: "/platillos/gorditas.png",
          items: [
            { name: "Gorditas", desc: "Rellenas de su guiso favorito, lechuga y queso." },
            { name: "Sopes", desc: "Base de maíz con frijoles, carne, lechuga y crema." },
            { name: "Huaraches", desc: "Base grande de maíz con carne, nopales y queso fresco." },
            { name: "Flautas", desc: "Tacos dorados de pollo o res con ensalada fresca." }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Platos y Tortas",
          image: "/platillos/torta.png",
          items: [
            { name: "Tortas Mexicanas", desc: "Telera con aguacate, mayonesa, jalapeños y carne al gusto." },
            { name: "Burritos Gigantes", desc: "Tortilla de harina con arroz, frijoles y queso." },
            { name: "Enchiladas", desc: "Orden de 3 con salsa verde o roja y arroz." },
            { name: "Chilaquiles", desc: "Totopos bañados en salsa con huevo o carne." }
          ]
        }
      ],
      specials: [
        { title: "¡JUEVES 2x1!", desc: "En Tacos al Pastor." },
        { title: "Sáb y Dom", desc: "Menudo y Barbacoa." }
      ],
      cta: "Ver Menú Completo"
    },
    location: {
      title: "Visítanos",
      addressTitle: "Dirección",
      address: "8120 Research Blvd, Austin, TX", 
      hoursTitle: "Horario",
      hours: "Lun - Dom: 9:00 AM - 10:00 PM",
      contactTitle: "Contacto",
      phone: "(512) 000-0000"
    },
    footer: {
        rights: "© 2025 Taquería Pepe's. Creado por Rueda La Rola Media."
    }
  },
  en: {
    navbar: { home: "Home", menu: "Menu", location: "Location", cta: "Order Now" },
    hero: { headline: "AUSTIN'S BEST TACOS", subheadline: "Handmade tortillas and authentic flavor every day.", cta: "View Menu", locationBtn: "Directions" },
    about: {
      pretitle: "Our History",
      title: "20+ Years of Tradition",
      description: "Bringing authentic Mexico City flavor to Austin.",
      stats: [{ value: "+20", label: "Years" }, { value: "100%", label: "Corn" }, { value: "ATX", label: "Local" }]
    },
    menu: {
      title: "Our Menu",
      subtitle: "Traditional Flavor",
      meatSection: { title: "Meat Choices", subtitle: "Add them to your favorite dish", items: ["Pastor", "Steak", "Suadero", "Mixed", "Chorizo", "Tripe", "Tongue", "Head", "Chicken", "Pork"] },
      weekendSection: {
        title: "Weekend Specials",
        subtitle: "Saturday & Sunday",
        description: "Slow-cooked traditional recipes for an authentic home flavor.",
        items: [
          { name: "Menudo", desc: "Traditional beef tripe soup (Saturdays and Sundays)." },
          { name: "Goat Barbacoa", desc: "Slow-cooked house recipe (Saturdays and Sundays)." },
          { name: "Consommé", desc: "Traditional broth with chickpeas and rice." },
          { name: "Meat by the Pound", desc: "Pastor, Barbacoa or Carnitas to take home." }
        ]
      },
      categories: [
        {
          id: "tacos_principales",
          title: "Our Tacos",
          image: "/platillos/tacos.png",
          items: [
            { name: "Traditional Tacos", desc: "Handmade tortillas with onion and cilantro." },
            { name: "Quesadillas", desc: "Melted cheese on corn or flour tortilla with your favorite meat." }
          ]
        },
        {
          id: "antojitos",
          title: "Street Food",
          image: "/platillos/gorditas.png",
          items: [
            { name: "Gorditas", desc: "Stuffed with your favorite stew, lettuce and cheese." }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Main Dishes",
          image: "/platillos/torta.png",
          items: [
            { name: "Mexican Tortas", desc: "Mexican sandwich with avocado, mayo, jalapeños and meat." }
          ]
        }
      ],
      specials: [],
      cta: "Full Menu"
    },
    location: { 
      title: "Visit Us",
      addressTitle: "Address",
      address: "8120 Research Blvd, Austin, TX", 
      hoursTitle: "Hours",
      hours: "9:00 AM - 10:00 PM",
      contactTitle: "Contact",
      phone: "(512) 000-0000"
    },
    footer: { rights: "© 2025 Taquería Pepe's. Created by Rueda La Rola Media." }
  }
};