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
      subheadline: "Auténtico sabor de trompo y tortillas hechas a mano.",
      cta: "Ver Menú",
    },
    menu: {
      title: "Nuestro Menú",
      subtitle: "Sabor Que Manda",
      specials: [
        { title: "¡JUEVES 2x1!", desc: "En Tacos al Pastor. La promo favorita de la casa." },
        { title: "Sábado y Domingo", desc: "Menudo y Barbacoa (Hasta agotar existencia)." }
      ],
      meats: {
        title: "Elige tu Carne",
        items: [
          "Pastor (La Especialidad)", "Bistec", "Suadero", "Campechano", 
          "Chorizo", "Tripa", "Lengua", "Cabeza", "Pollo", "Carnitas"
        ]
      },
      categories: [
        {
          id: "antojitos",
          title: "Lo Mero Bueno",
          image: "/platillos/image_a2ef7c.png", 
          items: [
            { name: "Tacos", desc: "Tortilla recién hecha, cebolla y cilantro", price: "$3.50" },
            { name: "Chilaquiles", desc: "Verdes o Rojos. Con huevo o carne", price: "$12.00" },
            { name: "Burritos", desc: "El gigante: frijol, arroz, queso y carne", price: "$10.00" },
            { name: "Gorditas", desc: "Rellenas de chicharrón o tu guiso favorito", price: "$4.50" },
            { name: "Sopes", desc: "Masa pellizcada con frijol y queso", price: "$4.50" },
            { name: "Quesadillas", desc: "Maíz o Harina, con mucho queso", price: "$4.00" },
            { name: "Tortas", desc: "Bolillo crujiente, aguacate y mayonesa", price: "$9.00" }
          ]
        },
        {
          id: "fin_semana",
          title: "Solo Fines de Semana",
          image: "/platillos/WhatsApp Image 2025-12-12 at 6.06.48 PM.jpeg",
          items: [
            { name: "Menudo", desc: "Pancita tradicional con grano. Incluye tortillas.", price: "$14.00" },
            { name: "Barbacoa", desc: "De Res o Chivo. Por taco o por libra.", price: "$16.00" },
            { name: "Consomé", desc: "Caldo reconfortante de barbacoa", price: "$5.00" }
          ]
        },
        {
          id: "extras",
          title: "Por Kilo y Eventos",
          image: "/platillos/WhatsApp Image 2025-12-12 at 6.07.47 PM.jpeg",
          items: [
            { name: "Venta por Libra", desc: "Carne lista para llevar. Incluye salsas.", price: "Cotizar" },
            { name: "Taquizas", desc: "Llevamos el trompo a tu evento.", price: "Cotizar" }
          ]
        }
      ],
      cta: "Ver Menú Completo"
    },
    location: {
      title: "Visítanos",
      addressTitle: "Dirección",
      address: "Austin, TX 78702", 
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
    navbar: { home: "Home", menu: "Menu", location: "Location", cta: "Order Now" },
    hero: { headline: "PEPE'S TAQUERIA ATX", subheadline: "Authentic street style with handmade tortillas.", cta: "View Menu" },
    menu: {
      title: "Our Menu",
      subtitle: "Real Mexican Flavor",
      specials: [
        { title: "THURSDAY 2x1!", desc: "Al Pastor Tacos. House favorite promo." },
        { title: "Sat & Sun Only", desc: "Menudo & Barbacoa (Until sold out)." }
      ],
      meats: {
        title: "Choice of Meat",
        items: ["Pastor (Pork)", "Steak", "Brisket", "Mixed", "Chorizo", "Tripe", "Tongue", "Head", "Chicken", "Pork chunks"]
      },
      categories: [
        {
          id: "antojitos",
          title: "Main Dishes",
          image: "/platillos/image_a2ef7c.png",
          items: [
            { name: "Tacos", desc: "Handmade tortilla, onion, cilantro", price: "$3.50" },
            { name: "Chilaquiles", desc: "Green or Red sauce. Egg or meat", price: "$12.00" },
            { name: "Burritos", desc: "Giant: beans, rice, cheese, meat", price: "$10.00" },
            { name: "Gorditas", desc: "Stuffed corn pocket with stew", price: "$4.50" },
            { name: "Sopes", desc: "Thick corn base with toppings", price: "$4.50" },
            { name: "Quesadillas", desc: "Corn or Flour, melted cheese", price: "$4.00" },
            { name: "Tortas", desc: "Mexican sandwich, avocado, mayo", price: "$9.00" }
          ]
        },
        {
          id: "fin_semana",
          title: "Weekends Only",
          image: "/platillos/WhatsApp Image 2025-12-12 at 6.06.48 PM.jpeg",
          items: [
            { name: "Menudo", desc: "Traditional tripe soup. Tortillas included.", price: "$14.00" },
            { name: "Barbacoa", desc: "Beef or Goat. By taco or pound.", price: "$16.00" },
            { name: "Consomé", desc: "Rich barbacoa broth", price: "$5.00" }
          ]
        },
        {
          id: "extras",
          title: "By Pound & Catering",
          image: "/platillos/WhatsApp Image 2025-12-12 at 6.07.47 PM.jpeg",
          items: [
            { name: "Meat by the Pound", desc: "Ready to go. Includes salsa.", price: "Quote" },
            { name: "Catering", desc: "We bring the trompo to you.", price: "Quote" }
          ]
        }
      ],
      cta: "View Full Menu"
    },
    location: {
      title: "Visit Us",
      addressTitle: "Address",
      address: "Austin, TX 78702",
      hoursTitle: "Hours",
      hours: "Mon - Sun: 9:00 AM - 10:00 PM",
      contactTitle: "Contact",
      phone: "(512) 555-0199"
    },
    footer: { rights: "All rights reserved." }
  }
};