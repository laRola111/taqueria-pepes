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
        items: ["Pastor", "Bistec", "Suadero", "Campechano", "Chorizo", "Pollo", "Fajita de Res", "Fajita de Pollo", "Barbacoa de Res", "Chicharrón", "Tinga", "Longaniza Verde", "Sirloin"]
      },
      weekendSection: {
        title: "Especiales de Fin de Semana",
        subtitle: "Sábado y Domingo",
        description: "Preparados lentamente con recetas tradicionales para un sabor inigualable.",
        items: [
          { name: "Menudo", desc: "La tradicional pancita de res, limpia y sazonada a la perfección (Sábados y Domingos)." },
          { name: "Servicio de Chivo", desc: "Barbacoa de chivo con la receta secreta de la casa (Sábados y Domingos)." },
          { name: "Consomé", desc: "El acompañante ideal con garbanzos, arroz y el jugo de la carne." },
          { name: "Carne por Libra", desc: "Lleva el sabor a casa por kilo o libra (Pastor, Barbacoa de Res, Sirloin)." }
        ]
      },
      categories: [
        {
          id: "tacos_y_quesadillas",
          title: "Tacos & Quesadillas",
          image: "/platillos/tacos.png",
          items: [
            { name: "Tacos Tradicionales", desc: "Tortilla hecha a mano (Maíz o Harina)." },
            { name: "Quesadillas de Maíz", desc: "Hechas a mano con queso fundido." },
            { name: "Quesadillas de Harina", desc: "Tortilla grande con queso y carne." },
            { name: "Gringas", desc: "Tortilla de harina con queso y pastor." }
          ]
        },
        {
          id: "antojitos_mexicanos",
          title: "Antojitos",
          image: "/platillos/gorditas.png",
          items: [
            { name: "Gorditas & Sopes", desc: "Rellenas de su guiso favorito." },
            { name: "Flautas", desc: "Tacos dorados con lechuga, crema y queso." },
            { name: "Huaraches", desc: "Base grande de maíz con carne y nopales." },
            { name: "Pambazos", desc: "Pan bañado en guajillo con papa y chorizo." }
          ]
        },
        {
          id: "especialidades",
          title: "Especialidades",
          image: "/platillos/chilaquiles.png",
          items: [
            { name: "Chilaquiles", desc: "Verdes o rojos con huevo o carne." },
            { name: "Enchiladas", desc: "Tradicionales con el toque de la casa." },
            { name: "Tortas", desc: "Pan telera con frijoles, mayo y carne." },
            { name: "Burritos", desc: "Gran tamaño con arroz, frijoles y carne." }
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
      address: "13525 Dessau Rd, Pflugerville, TX 78660", 
      hoursTitle: "Horario",
      hours: "Lunes a Domingo: 9:00 AM - 10:00 PM",
      contactTitle: "Contacto",
      phone: "+1 (512) 748-8752"
    },
    footer: {
        rights: "© 2025 Taquería Pepe's. Creado por Rueda La Rola Media."
    }
  },
  en: {
    navbar: { home: "Home", menu: "Menu", location: "Location", cta: "Order Now" },
    hero: { headline: "AUSTIN'S BEST TACOS", subheadline: "Handmade tortillas and authentic flavor every day.", cta: "See Menu", locationBtn: "Directions" },
    about: { pretitle: "History", title: "Tradition", description: "Authentic Mexican flavors in Pflugerville.", stats: [] },
    menu: {
      title: "Our Menu",
      subtitle: "Daily Flavor",
      meatSection: { title: "Our Meats", subtitle: "Add them to your favorite dish", items: ["Pastor", "Steak", "Suadero", "Chicken", "Beef Fajita", "Sirloin"] },
      weekendSection: {
        title: "Weekend Specials",
        subtitle: "Saturday & Sunday",
        description: "Slow-cooked traditional recipes.",
        items: [
          { name: "Menudo", desc: "Traditional beef tripe soup." },
          { name: "Goat Service", desc: "Authentic goat barbacoa." }
        ]
      },
      categories: [
        {
          id: "tacos_y_quesadillas",
          title: "Tacos & Quesadillas",
          image: "/platillos/tacos.png",
          items: [{ name: "Traditional Tacos", desc: "Handmade Corn or Flour tortillas." }]
        }
      ],
      specials: [],
      cta: "Full Menu"
    },
    location: { title: "Location", addressTitle: "Address", address: "13525 Dessau Rd, Pflugerville, TX", hoursTitle: "Hours", hours: "Mon - Sun: 9am - 10pm", contactTitle: "Contact", phone: "+1 (512) 748-8752" },
    footer: { rights: "© 2025 Taquería Pepe's. Created by Rueda La Rola Media." }
  }
};