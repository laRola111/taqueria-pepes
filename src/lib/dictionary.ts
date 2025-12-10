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
      headline: "SABOR QUE EXPLOTA",
      subheadline: "Tacos, Tortas y Gorditas con el auténtico sazón callejero, pero elevado.",
      cta: "Ver Menú",
    },
    marquee: {
      items: [
        "Pastor", "Bistec", "Suadero", "Campechanos", 
        "Gringas", "Chorizo", "Tripa", "Lengua", 
        "Salsas Caseras", "Aguas Frescas"
      ]
    },
    about: {
      pretitle: "Nuestra Filosofía",
      title: "No es solo comida, es energía",
      description: "En Taquería Pepes rompemos las reglas. No somos la típica taquería rústica. Somos rápidos, somos frescos y nuestro sabor es intenso. Usamos ingredientes de primera para crear combinaciones que despiertan tus sentidos.",
      stats: [
        { value: "+10", label: "Salsas Únicas" },
        { value: "100%", label: "Carne Fresca" },
        { value: "24/7", label: "Pasión" }
      ]
    },
    menu: {
      title: "Elige tu Arma",
      subtitle: "Nuestras Especialidades",
      categories: {
        tacos: {
          title: "Tacos",
          desc: "Tortilla de maíz recién hecha, carne jugosa y tu elección de verdura.",
          price: "Desde $2.50"
        },
        tortas: {
          title: "Tortas",
          desc: "El gigante de la casa. Bolillo crujiente, frijoles, aguacate y mucha carne.",
          price: "Desde $8.99"
        },
        gorditas: {
          title: "Gorditas",
          desc: "Masa de maíz rellena de chicharrón prensado o tu guiso favorito con queso.",
          price: "Desde $4.50"
        },
        specialties: {
          title: "Especialidades",
          desc: "Gringas, Volcanes y Quesadillas gigantes para los que tienen mucha hambre.",
          price: "Varios Precios"
        }
      },
      cta: "Ver Menú Completo"
    },
    testimonials: {
      title: "Lo que dice la banda",
      reviews: [
        { name: "Alex R.", text: "¡El pastor es de otro planeta! Y la salsa naranja pica rico." },
        { name: "Sarah M.", text: "Me encanta el ambiente, es súper moderno y los tacos siempre salen calientes." },
        { name: "Diego F.", text: "Las gorditas de chicharrón son mi adicción. ¡Muy recomendados!" }
      ]
    },
    location: {
      title: "Cáele a Pepes",
      addressTitle: "Dirección",
      address: "123 Flavor St, Food City, TX 78702", // Ajusta esto después
      hoursTitle: "Horario",
      hours: "Lun - Dom: 10:00 AM - 11:00 PM",
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
      headline: "EXPLOSIVE FLAVOR",
      subheadline: "Tacos, Tortas, and Gorditas with authentic street style, leveled up.",
      cta: "View Menu",
    },
    marquee: {
      items: [
        "Marinated Pork", "Steak", "Brisket", "Mixed", 
        "Quesadillas", "Chorizo", "Tripe", "Beef Tongue", 
        "Homemade Salsas", "Fresh Waters"
      ]
    },
    about: {
      pretitle: "Our Philosophy",
      title: "It's not just food, it's energy",
      description: "At Taquería Pepes we break the rules. We are not your typical rustic taco spot. We are fast, we are fresh, and our flavor is intense. We use premium ingredients to create combinations that wake up your senses.",
      stats: [
        { value: "+10", label: "Unique Salsas" },
        { value: "100%", label: "Fresh Meat" },
        { value: "24/7", label: "Passion" }
      ]
    },
    menu: {
      title: "Choose Your Weapon",
      subtitle: "Our Specialties",
      categories: {
        tacos: {
          title: "Tacos",
          desc: "Freshly made corn tortilla, juicy meat, and your choice of toppings.",
          price: "From $2.50"
        },
        tortas: {
          title: "Tortas",
          desc: "The house giant. Crispy bread, beans, avocado, and lots of meat.",
          price: "From $8.99"
        },
        gorditas: {
          title: "Gorditas",
          desc: "Corn dough stuffed with pressed pork rind or your favorite stew with cheese.",
          price: "From $4.50"
        },
        specialties: {
          title: "Specialties",
          desc: "Gringas, Volcanes, and giant Quesadillas for those with a big appetite.",
          price: "Various Prices"
        }
      },
      cta: "View Full Menu"
    },
    testimonials: {
      title: "What people say",
      reviews: [
        { name: "Alex R.", text: "The pastor is out of this world! And the orange salsa is spicy and tasty." },
        { name: "Sarah M.", text: "I love the vibe, it's super modern and the tacos always come out hot." },
        { name: "Diego F.", text: "The chicharrón gorditas are my addiction. Highly recommended!" }
      ]
    },
    location: {
      title: "Visit Pepes",
      addressTitle: "Address",
      address: "123 Flavor St, Food City, TX 78702",
      hoursTitle: "Hours",
      hours: "Mon - Sun: 10:00 AM - 11:00 PM",
      contactTitle: "Contact",
      phone: "(512) 555-0199"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};