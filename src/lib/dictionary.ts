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
      locationBtn: "Cómo Llegar", // <--- AGREGADO: Para solucionar el error del botón
    },
    about: {
      pretitle: "Nuestra Historia",
      title: "Más de 20 años de tradición",
      description: "Traemos el auténtico sabor de la Ciudad de México a Austin. Nuestras recetas han pasado de generación en generación.",
      stats: [
         { value: "+20", label: "Años" },
         { value: "100%", label: "Maíz" },
         { value: "ATX", label: "Local" }
      ]
    },
    menu: {
      title: "Nuestro Menú",
      subtitle: "Sabor Que Manda",
      specials: [
        { title: "¡JUEVES 2x1!", desc: "En Tacos al Pastor. La promo de la casa." },
        { title: "Fin de Semana", desc: "Menudo, Barbacoa y Chivo." },
        { title: "Diario", desc: "Pregunta por el platillo especial." }
      ],
      meats: {
        title: "Elección de Carnes",
        items: [
          "Pastor", "Bistec", "Suadero", "Campechano", 
          "Chorizo", "Tripa", "Lengua", "Cabeza", "Pollo", "Carnitas"
        ]
      },
      categories: [
        {
          id: "antojitos",
          title: "Antojitos y Tacos",
          // Usamos tus archivos reales de public/platillos
          image: "/platillos/tacos.png", 
          items: [
            { name: "Tacos", desc: "Tortilla hecha a mano", price: "$3.50" },
            { name: "Quesadillas", desc: "Maíz o Harina", price: "$4.00" },
            { name: "Gorditas", desc: "Rellenas de guiso", price: "$5.50" },
            { name: "Sopes", desc: "Con todo", price: "$4.50" },
            { name: "Gringas", desc: "Queso y pastor", price: "$13.00" },
            { name: "Pambazos", desc: "Bañado en guajillo", price: "$14.00" },
            { name: "Huaraches", desc: "Base grande", price: "$10.00" }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Platos Fuertes",
          image: "/platillos/Enchiladas.png",
          items: [
            { name: "Chilaquiles", desc: "Verdes o Rojos", price: "$14.00" },
            { name: "Enchiladas", desc: "Orden de 3", price: "$14.00" },
            { name: "Burrito", desc: "Gigante", price: "$10.00" },
            { name: "Flautas", desc: "Pollo o Res", price: "$14.00" },
            { name: "Torta Cubana", desc: "La gigante", price: "$14.00" },
            { name: "Torta Pepe's", desc: "Carne al gusto", price: "$14.00" },
            { name: "Quesabirria", desc: "Con consomé", price: "$14.00" }
          ]
        },
        {
          id: "caldos_kilos",
          title: "Caldos y Kilos",
          image: "/platillos/menudo.png",
          items: [
            { name: "Menudo", desc: "Pancita (Fines de Semana)", price: "$14.99" },
            { name: "Barbacoa", desc: "Res o Chivo", price: "$16.00" },
            { name: "Consomé", desc: "Borrego o Res", price: "$6.00" },
            { name: "Carne por Libra", desc: "Para llevar", price: "Cotizar" },
            { name: "Taquizas", desc: "Para eventos", price: "Cotizar" }
          ]
        }
      ],
      cta: "Ver Menú Completo"
    },
    location: {
      title: "Visítanos",
      addressTitle: "Dirección",
      address: "Austin, TX", 
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
    hero: { 
      headline: "PEPE'S TAQUERIA ATX", 
      subheadline: "Authentic street style with handmade tortillas.", 
      cta: "View Menu",
      locationBtn: "Get Directions" // <--- AGREGADO EN INGLÉS TAMBIÉN
    },
    about: {
      pretitle: "Our History",
      title: "20+ Years of Tradition",
      description: "Bringing authentic Mexico City flavor to Austin. Family recipes perfected over generations.",
      stats: [{ value: "+20", label: "Years" }, { value: "100%", label: "Corn" }, { value: "ATX", label: "Local" }]
    },
    menu: {
      title: "Our Menu",
      subtitle: "Real Mexican Flavor",
      specials: [
        { title: "THURSDAY 2x1!", desc: "Al Pastor Tacos." },
        { title: "Weekends Only", desc: "Menudo & Barbacoa." },
        { title: "Daily Special", desc: "Ask for the dish of the day." }
      ],
      meats: {
        title: "Meat Choices",
        items: ["Pastor", "Steak", "Brisket", "Mixed", "Chorizo", "Tripe", "Tongue", "Head", "Chicken", "Pork"]
      },
      categories: [
        {
          id: "antojitos",
          title: "Tacos & Cravings",
          image: "/platillos/tacos.png",
          items: [
            { name: "Tacos", desc: "Handmade tortilla", price: "$3.50" },
            { name: "Quesadillas", desc: "Corn or Flour", price: "$4.00" },
            { name: "Gorditas", desc: "Stuffed with stew", price: "$5.50" },
            { name: "Sopes", desc: "With everything", price: "$4.50" },
            { name: "Gringas", desc: "Cheese and pastor", price: "$13.00" },
            { name: "Pambazos", desc: "Dipped in guajillo", price: "$14.00" },
            { name: "Huaraches", desc: "Large base", price: "$10.00" }
          ]
        },
        {
          id: "platos_fuertes",
          title: "Main Dishes",
          image: "/platillos/Enchiladas.png",
          items: [
            { name: "Chilaquiles", desc: "Green or Red", price: "$14.00" },
            { name: "Enchiladas", desc: "Order of 3", price: "$14.00" },
            { name: "Burrito", desc: "Giant", price: "$10.00" },
            { name: "Flautas", desc: "Chicken or Beef", price: "$14.00" },
            { name: "Torta Cubana", desc: "The giant", price: "$14.00" },
            { name: "Torta Pepe's", desc: "Meat of choice", price: "$14.00" },
            { name: "Quesabirria", desc: "With consommé", price: "$14.00" }
          ]
        },
        {
          id: "caldos_kilos",
          title: "Soups & By Pound",
          image: "/platillos/menudo.png",
          items: [
            { name: "Menudo", desc: "Tripe soup (Weekends)", price: "$14.99" },
            { name: "Barbacoa", desc: "Beef or Goat", price: "$16.00" },
            { name: "Consommé", desc: "Lamb or beef", price: "$6.00" },
            { name: "Meat by the Pound", desc: "To go", price: "Quote" },
            { name: "Catering", desc: "For events", price: "Quote" }
          ]
        }
      ],
      cta: "View Full Menu"
    },
    location: { 
      title: "Visit Us", 
      addressTitle: "Address", 
      address: "Austin, TX", 
      hoursTitle: "Hours", 
      hours: "9am - 10pm", 
      contactTitle: "Contact", 
      phone: "(512) 555-0199" 
    },
    footer: { rights: "All rights reserved." }
  }
};