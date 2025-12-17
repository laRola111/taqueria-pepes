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
      headline: "TAQUERÍA PEPE'S ATX",
      subheadline: "Auténtico sabor de trompo y tortillas hechas a mano en el corazón de Austin.",
      cta: "Ver Menú",
      locationBtn: "Cómo Llegar",
    },
    about: {
      pretitle: "Nuestra Historia",
      title: "Más de 20 años de tradición",
      description: "Traemos el auténtico sabor de la Ciudad de México a Austin. Nuestras recetas han pasado de generación en generación, manteniendo el sazón original.",
      stats: [
         { value: "+20", label: "Años" },
         { value: "100%", label: "Maíz" },
         { value: "ATX", label: "Local" }
      ]
    },
    menu: {
      title: "Nuestro Menú",
      subtitle: "Sabor Que Manda",
      categories: [
        {
          id: "antojitos",
          title: "Antojitos y Tacos",
          image: "/platillos/tacos.png", //
          items: [
            { name: "Tacos", desc: "Tortilla hecha a mano, cebolla y cilantro.", price: "$3.50" },
            { name: "Quesadillas", desc: "Queso fundido en tortilla de maíz o harina.", price: "$4.00" },
            { name: "Gorditas", desc: "Rellenas de guiso, lechuga y queso fresco.", price: "$5.50" },
            { name: "Sopes", desc: "Base de maíz con frijoles y carne al gusto.", price: "$4.50" },
            { name: "Pambazos", desc: "Pan bañado en guajillo con papa y chorizo.", price: "$14.00" },
            { name: "Huaraches", desc: "Base grande de maíz con carne y nopales.", price: "$10.00" },
            { name: "Flautas", desc: "Tacos dorados de pollo o res con crema.", price: "$14.00" }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Platos Fuertes",
          image: "/platillos/torta.png", //
          items: [
            { name: "Tortas", desc: "Bolillo con aguacate, mayonesa y jalapeños.", price: "$14.00" },
            { name: "Burritos", desc: "Tortilla gigante de harina con arroz y frijoles.", price: "$10.00" },
            { name: "Enchiladas", desc: "Orden de 3 con salsa verde o roja y arroz.", price: "$14.00" },
            { name: "Chilaquiles", desc: "Totopos bañados en salsa con huevo o carne.", price: "$14.00" },
            { name: "Quesabirrias", desc: "Con queso y el toque especial del consomé.", price: "$14.00" }
          ]
        },
        {
          id: "caldos",
          title: "Caldos y Kilos",
          image: "/platillos/menudo.png", //
          items: [
            { name: "Menudo", desc: "Pancita de res tradicional (Fines de semana).", price: "$14.99" },
            { name: "Barbacoa", desc: "Res o chivo cocinado a fuego lento.", price: "$16.00" },
            { name: "Consomé", desc: "Caldo caliente con garbanzos y arroz.", price: "$6.00" }
          ]
        }
      ],
      specials: [
        { title: "¡JUEVES 2x1!", desc: "En Tacos al Pastor." },
        { title: "Fines de Semana", desc: "Menudo y Barbacoa recién hechos." }
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
      phone: "(512) 555-0199"
    },
    footer: {
        rights: "Todos los derechos reservados."
    }
  },
  en: {
    navbar: {
      home: "Home",
      menu: "Menu",
      location: "Location",
      cta: "Order Now",
    },
    hero: {
      headline: "PEPE'S TAQUERIA ATX",
      subheadline: "Authentic street flavor with handmade tortillas in the heart of Austin.",
      cta: "View Menu",
      locationBtn: "Get Directions",
    },
    about: {
      pretitle: "Our History",
      title: "20+ Years of Tradition",
      description: "Bringing authentic Mexico City flavor to Austin. Our recipes have been passed down through generations.",
      stats: [
         { value: "+20", label: "Years" },
         { value: "100%", label: "Corn" },
         { value: "ATX", label: "Local" }
      ]
    },
    menu: {
      title: "Our Menu",
      subtitle: "The King of Flavor",
      categories: [
        {
          id: "antojitos",
          title: "Street Food & Tacos",
          image: "/platillos/tacos.png", //
          items: [
            { name: "Tacos", desc: "Handmade tortilla with onion and cilantro.", price: "$3.50" },
            { name: "Quesadillas", desc: "Melted cheese on corn or flour tortilla.", price: "$4.00" },
            { name: "Gorditas", desc: "Stuffed with stew, lettuce, and fresh cheese.", price: "$5.50" },
            { name: "Sopes", desc: "Corn base with beans and meat of choice.", price: "$4.50" },
            { name: "Pambazos", desc: "Guajillo-dipped bread with potato and chorizo.", price: "$14.00" }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Main Dishes",
          image: "/platillos/torta.png", //
          items: [
            { name: "Tortas", desc: "Mexican sandwich with avocado and jalapeños.", price: "$14.00" },
            { name: "Burritos", desc: "Giant flour tortilla with rice and beans.", price: "$10.00" },
            { name: "Enchiladas", desc: "Order of 3 with green or red sauce.", price: "$14.00" }
          ]
        },
        {
          id: "caldos",
          title: "Soups & Specials",
          image: "/platillos/menudo.png", //
          items: [
            { name: "Menudo", desc: "Traditional beef tripe soup (Weekends).", price: "$14.99" },
            { name: "Barbacoa", desc: "Beef or goat slow-cooked to perfection.", price: "$16.00" }
          ]
        }
      ],
      specials: [
        { title: "THURSDAY 2x1!", desc: "On Al Pastor Tacos." },
        { title: "Weekends", desc: "Fresh Menudo and Barbacoa." }
      ],
      cta: "View Full Menu"
    },
    location: {
      title: "Visit Us",
      addressTitle: "Address",
      address: "8120 Research Blvd, Austin, TX", 
      hoursTitle: "Hours",
      hours: "Mon - Sun: 9:00 AM - 10:00 PM",
      contactTitle: "Contact",
      phone: "(512) 555-0199"
    },
    footer: {
        rights: "All rights reserved."
    }
  }
};